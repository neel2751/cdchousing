"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-light pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">

          <AnimatedSection animation="fade-right" className="md:col-span-3">
            <h1 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
              European Standards
              <br />
              Bespoke Design
              <br />
              Built in Bangladesh.
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={100} className="md:col-span-5">
            <div
              className="relative overflow-hidden group w-full"
              style={{ aspectRatio: "3 / 4" }}
            >
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="CDC Housing residential development"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}

              {heroImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Show image ${i + 1}`}
                      className={`h-px transition-all duration-500 ${
                        i === current ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={150} className="md:col-span-4">
            <p className="text-primary/70 leading-relaxed">
              CDC Housing brings European standard planning with bespoke architectural
              design to develop high quality residential and commercial spaces in
              Bangladesh. We are creating modern homes built with quality, comfort and
              long term value in mind.
            </p>
          </AnimatedSection>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-center mt-16 md:mt-20">
          <AnimatedSection animation="fade-right" className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary leading-tight">
              Developing
              <br />
              Tomorrow&apos;s
              <br />
              Bangladesh
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={100} className="md:col-span-8">
            <p className="text-primary/70 leading-relaxed max-w-2xl">
              CDC Housing is committed to building more than properties. We create
              thoughtfully designed spaces that improve everyday living, support modern
              urban lifestyles, and contribute to a better future for Bangladesh.
            </p>
          </AnimatedSection>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-20 md:mt-28">
          <AnimatedSection animation="fade-right">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Our Foundation for Building Excellence
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={100}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-secondary text-secondary text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-secondary hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}