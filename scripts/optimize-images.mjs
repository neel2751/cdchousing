/**
 * Builds the deployable image set.
 *
 * The site is a static export (`output: "export"`), so there is no /_next/image
 * optimizer at runtime — whatever sits in `public/` is what the browser
 * downloads, byte for byte. Camera masters (6720x4480, 38 MB) were being served
 * directly, so this script does the resizing/encoding ahead of time instead.
 *
 * Originals are MOVED to `assets/originals/` on first run: they stay in the repo
 * for re-encoding, but leave `public/` so they are no longer shipped. Re-running
 * is cheap and idempotent — it re-reads from `assets/originals/`.
 *
 *   node scripts/optimize-images.mjs [--force]
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public/images");
const ORIGINALS = path.join(ROOT, "assets/originals");
const MANIFEST = path.join(ROOT, "data/image-manifest.json");

const FORCE = process.argv.includes("--force");

/**
 * Widths to emit per image role. The largest entry doubles as the `src`
 * fallback, so it caps how big the file can ever get.
 */
const ROLES = [
  // Full-bleed backgrounds: rendered edge to edge, so they need the big sizes.
  { match: /^(hero-|dhaka-skyline|Area-View)/, widths: [768, 1280, 1920, 2560] },
  // Everything else renders inside a card, a gallery cell or a lightbox.
  { match: /.*/, widths: [640, 1024, 1600] },
];

/** Images that must keep their alpha channel and are already small. */
const SKIP = new Set(["logo.png", "cursor.png"]);

const isRaster = (f) => /\.(jpe?g|png)$/i.test(f);

async function walk(dir, base = dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, base)));
    else if (isRaster(entry.name)) out.push(path.relative(base, full));
  }
  return out;
}

/** Move any masters still sitting in public/ into assets/originals/. */
async function stageOriginals() {
  if (!existsSync(PUBLIC_IMAGES)) return;
  for (const rel of await walk(PUBLIC_IMAGES)) {
    if (SKIP.has(path.basename(rel))) continue;
    const dest = path.join(ORIGINALS, rel);
    if (existsSync(dest)) {
      // Already staged on a previous run; the public copy is redundant.
      await fs.rm(path.join(PUBLIC_IMAGES, rel));
      continue;
    }
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.rename(path.join(PUBLIC_IMAGES, rel), dest);
  }
}

const widthsFor = (rel) =>
  ROLES.find((r) => r.match.test(path.basename(rel))).widths;

/**
 * Masters like "Sustainable Development.jpg" would emit a URL with a raw space
 * in it. Browsers cope, but caches and CDNs are inconsistent about encoding it,
 * so the shipped files get clean names. Components keep referencing the
 * original path — the manifest maps one to the other.
 */
const slug = (s) =>
  s
    .normalize("NFKD")
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

async function main() {
  await stageOriginals();

  const sources = existsSync(ORIGINALS) ? await walk(ORIGINALS) : [];
  const manifest = {};
  let before = 0;
  let after = 0;

  for (const rel of sources) {
    const src = path.join(ORIGINALS, rel);
    before += (await fs.stat(src)).size;

    const meta = await sharp(src).metadata();
    // Never upscale: a 1086px master should not be stretched to 1600.
    const widths = [...new Set(widthsFor(rel).map((w) => Math.min(w, meta.width)))]
      .sort((a, b) => a - b);

    const dir = path.dirname(rel) === "." ? "" : path.dirname(rel);
    const stem = slug(path.basename(rel, path.extname(rel)));
    const outDir = path.join(PUBLIC_IMAGES, dir);
    await fs.mkdir(outDir, { recursive: true });

    const variants = [];
    for (const w of widths) {
      const name = `${stem}-${w}.webp`;
      const dest = path.join(outDir, name);
      if (FORCE || !existsSync(dest)) {
        await sharp(src)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 76, effort: 5 })
          .toFile(dest);
      }
      after += (await fs.stat(dest)).size;
      variants.push({ w, src: path.posix.join("/images", dir, name) });
    }

    const largest = variants.at(-1);
    manifest[path.posix.join("/images", dir, path.basename(rel))] = {
      src: largest.src,
      width: largest.w,
      // Aspect ratio is preserved by resize, so height follows from the master.
      height: Math.round((largest.w / meta.width) * meta.height),
      srcSet: variants.map((v) => `${v.src} ${v.w}w`).join(", "),
    };
  }

  // Drop variants whose master is gone, so deleting an original also stops it
  // being deployed instead of leaving stale files in public/.
  const live = new Set(
    Object.values(manifest).flatMap((e) =>
      e.srcSet.split(", ").map((p) => p.slice(0, p.lastIndexOf(" ")))
    )
  );
  let pruned = 0;
  const sweep = async (dir) => {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await sweep(full);
      else if (entry.name.endsWith(".webp")) {
        const url = "/" + path.relative(path.join(ROOT, "public"), full);
        if (!live.has(url)) {
          await fs.rm(full);
          pruned++;
        }
      }
    }
  };
  await sweep(PUBLIC_IMAGES);

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
  console.log(`${sources.length} images${pruned ? `, pruned ${pruned} stale variants` : ""}`);
  console.log(`originals: ${mb(before)}  ->  shipped: ${mb(after)}`);
  console.log(`saved ${mb(before - after)} (${((1 - after / before) * 100).toFixed(1)}%)`);
}

main();
