import PressGrid from "@/components/media/PressGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { pressReleases } from "@/data/press";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press Releases" };

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
    </>
  );
}