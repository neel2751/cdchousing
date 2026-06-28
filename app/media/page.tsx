import PressGrid from "@/components/media/PressGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { pressReleases } from "@/data/press";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press Releases" };

const youtubeVideos = [
  { id: "BYP6AfIQgx4", title: "CDC Housing Feature" },
  { id: "XIILIoV_-RY", title: "Project Showcase" },
  { id: "b08h_VyWR8k", title: "Behind the Build" },
];

const facebookReels = [
  "https://www.facebook.com/reel/884553967429357",
  "https://www.facebook.com/reel/4308361572820594",
];

export default function MediaPage() {
  const featured = pressReleases.find((p) => p.featured) ?? pressReleases[0];

  return (
    <>
      <div className="pt-36 md:pt-44 pb-12 bg-light">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Media Center</p>
            <h1 className="font-serif text-4xl md:text-6xl text-primary">Press Releases</h1>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 pb-16">
        <AnimatedSection animation="fade-up">
          <Link href={`/media/${featured.id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="overflow-hidden aspect-4/3 order-2 lg:order-1">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-secondary text-xs tracking-[0.4em] uppercase mb-4">Featured</span>
              <p className="text-primary/40 text-xs tracking-widest uppercase mb-3">{featured.date}</p>
              <h2 className="font-serif text-2xl md:text-4xl text-primary leading-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-primary/60 leading-relaxed mb-6 max-w-xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-secondary">
                Read More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </AnimatedSection>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 pb-24 md:pb-32">
        <PressGrid />
      </div>

      {/* VIDEO FEATURES */}
      <section className="bg-light py-16 md:py-24 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Watch</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">Video Features</h2>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youtubeVideos.map((v, i) => (
              <AnimatedSection key={v.id} animation="scale" delay={i * 100}>
                <div className="relative w-full overflow-hidden rounded-lg shadow-sm" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="font-serif text-base text-primary mt-3">{v.title}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL REELS */}
      <section className="bg-white py-16 md:py-24 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Social</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">Reels</h2>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facebookReels.map((url, i) => (
              <AnimatedSection key={url} animation="scale" delay={i * 100}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-light shadow-sm hover:shadow-lg transition-shadow duration-500 p-6 rounded-lg"
                >
                  <div>
                    <p className="text-secondary text-xs tracking-widest uppercase mb-2">Facebook Reel</p>
                    <h3 className="font-serif text-lg text-primary">Watch on Facebook</h3>
                  </div>
                  <span className="text-secondary text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}