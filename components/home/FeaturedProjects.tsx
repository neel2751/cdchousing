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
    <section className="pt-20 md:pt-24 pb-24 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="flex justify-between items-center mb-12 md:mb-16">
          <AnimatedSection animation="fade-right">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Featured Projects</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-left">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-secondary text-secondary text-xs tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-secondary hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              Explore Projects
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up">
          <p className="text-center font-serif text-2xl md:text-3xl text-primary mb-10 md:mb-12">
            A Life Rooted in Green
          </p>
        </AnimatedSection>

        <div className="relative flex items-stretch justify-center gap-3 md:gap-5">
          <div className="hidden md:block w-[10%] overflow-hidden">
            <img src={left.thumbnail} alt={left.name} className="w-full h-full object-cover opacity-50" />
          </div>

          <div className="relative flex-1 max-w-4xl aspect-video overflow-hidden">
            <Link href={`/projects/${current.id}`}>
              <img src={current.images[0]} alt={current.name} className="w-full h-full object-cover" />
            </Link>

            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-2xl text-white/90 hover:text-white transition-colors duration-300"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-2xl text-white/90 hover:text-white transition-colors duration-300"
            >
              ›
            </button>
          </div>

          <div className="hidden md:block w-[10%] overflow-hidden">
            <img src={right.thumbnail} alt={right.name} className="w-full h-full object-cover opacity-50" />
          </div>
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