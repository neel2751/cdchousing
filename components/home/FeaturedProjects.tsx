"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const current = projects[index];
  const left = projects[(index - 1 + total) % total];
  const right = projects[(index + 1) % total];

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="flex flex-col items-start gap-5 sm:flex-row sm:justify-between sm:items-center mb-8 md:mb-10">
          <AnimatedSection animation="fade-right">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Featured Projects</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-left">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-secondary text-secondary text-xs tracking-widest px-7 py-3.5 rounded-full hover:bg-secondary hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              Explore Projects
            </Link>
          </AnimatedSection>
        </div>

        <div className="relative flex items-center justify-center gap-3 md:gap-5">
          {/* arrow OUTSIDE left */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-secondary text-white text-xl md:text-2xl leading-none shadow-md hover:bg-primary transition-colors duration-300"
          >
            ‹
          </button>

          <div className="hidden md:block w-[10%] overflow-hidden self-stretch">
            <img src={left.thumbnail} alt={left.name} className="w-full h-full object-cover opacity-50" />
          </div>

          <div className="relative flex-1 max-w-4xl aspect-video overflow-hidden">
            {/* cross-fade images */}
            {projects.map((p, i) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
              >
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
              </Link>
            ))}

            {/* title overlaid at bottom center — changes with the project */}
            <div className="absolute inset-x-0 bottom-0 pointer-events-none">
              <div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-20 pb-6 md:pb-8">
                <p
                  key={current.id}
                  className="text-center font-serif text-2xl md:text-3xl text-white drop-shadow-lg"
                  style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
                >
                  {current.name}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-[10%] overflow-hidden self-stretch">
            <img src={right.thumbnail} alt={right.name} className="w-full h-full object-cover opacity-50" />
          </div>

          {/* arrow OUTSIDE right */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-secondary text-white text-xl md:text-2xl leading-none shadow-md hover:bg-primary transition-colors duration-300"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === index ? "w-10 bg-secondary" : "w-4 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}