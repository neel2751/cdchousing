"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800",
    tagline: "Building",
    highlight: "Legacies",
    sub: "Luxury residences and commercial spaces crafted for generations.",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800",
    tagline: "Crafting",
    highlight: "Dreams",
    sub: "From concept to possession — excellence at every step.",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800",
    tagline: "Defining",
    highlight: "Gujarat",
    sub: "Premium developments across Ahmedabad, Surat and beyond.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 600);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1200 ease-in-out"
          style={{ opacity: i === currentSlide ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover scale-105 transition-transform duration-8000"
            style={{ transform: i === currentSlide ? "scale(1)" : "scale(1.05)" }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div
          className="overflow-hidden"
          key={`tagline-${currentSlide}`}
        >
          <p
            className="text-secondary text-sm tracking-[0.4em] uppercase mb-4"
            style={{ animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            CDC Housing — Since 1995
          </p>
        </div>

        <div className="overflow-hidden mb-2" key={`title-${currentSlide}`}>
          <h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-none"
            style={{ animation: "fadeUp 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {slide.tagline}
          </h1>
        </div>
        <div className="overflow-hidden mb-6">
          <h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-secondary leading-none italic"
            key={`highlight-${currentSlide}`}
            style={{ animation: "fadeUp 0.9s 0.18s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {slide.highlight}
          </h1>
        </div>

        <div className="overflow-hidden">
          <p
            className="text-white/60 text-lg max-w-lg leading-relaxed"
            key={`sub-${currentSlide}`}
            style={{ animation: "fadeUp 0.9s 0.28s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {slide.sub}
          </p>
        </div>

        <div
          className="flex gap-4 mt-10"
          style={{ animation: "fadeUp 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <Link
            href="/projects"
            className="group flex items-center gap-3 bg-secondary text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-secondary/90 transition-all duration-300"
          >
            View Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-3 border border-white/40 text-white text-xs tracking-widest uppercase px-8 py-4 hover:border-secondary hover:text-secondary transition-all duration-500"
          >
            Our Story
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-16 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-500 ${
              i === currentSlide
                ? "w-12 h-px bg-secondary"
                : "w-4 h-px bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 right-6 md:right-16 z-10 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}