import manifest from "@/data/image-manifest.json";

type Entry = { src: string; width: number; height: number; srcSet: string };

const MANIFEST = manifest as Record<string, Entry>;

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  /** Path of the original master, e.g. "/images/hero-4.jpg". */
  src: string;
  alt: string;
  /**
   * How wide the image renders, for the browser's variant pick. Defaults to
   * full-bleed; pass the real value for anything laid out in a grid or card.
   */
  sizes?: string;
  /** Set on the LCP image only — it opts out of lazy loading. */
  priority?: boolean;
}

/**
 * Serves the pre-built WebP variants produced by `scripts/optimize-images.mjs`.
 *
 * next/image can't help here: `output: "export"` ships with `unoptimized: true`,
 * so it would emit the untouched master. Resolving through the manifest instead
 * gives us a real srcset, intrinsic dimensions (no layout shift) and lazy
 * loading by default.
 */
export default function Img({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  ...rest
}: Props) {
  const entry = MANIFEST[src];

  // An unoptimized path (an SVG, or a master added since the last build) still
  // has to render — just without the variants.
  if (!entry) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...rest}
      />
    );
  }

  return (
    <img
      src={entry.src}
      srcSet={entry.srcSet}
      sizes={sizes}
      width={entry.width}
      height={entry.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      // fetchPriority is React 18.3+; it moves the LCP image to the front of
      // the network queue instead of letting it compete with the JS chunks.
      fetchPriority={priority ? "high" : undefined}
      {...rest}
    />
  );
}
