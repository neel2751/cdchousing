"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

const heroImages = [
  "/images/hero-4.jpg",
];

export default function HeroSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  const growth = ease(Math.min(progress / 0.8, 1));

  const imgWidth = 44 + growth * 56;   
  const imgHeight = 68 + growth * 32;  
  const radius = 16 * (1 - growth);

  const textOpacity = Math.max(1 - progress / 0.5, 0);

  const activeIndex = Math.min(
    Math.floor(progress * heroImages.length),
    heroImages.length - 1
  );

  return (
    <>
      <div ref={wrapRef} className="relative" style={{ height: "220vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-light">

          <div className="absolute inset-0 z-10 px-5 md:px-10 lg:px-16 pointer-events-none">
            <div
              className="absolute left-5 md:left-6 top-[22%] max-w-[200px] md:max-w-xs"
              style={{ opacity: textOpacity }}
            >
              <h1 className="font-serif text-2xl md:text-4xl text-primary leading-tight">
                European Standards
                <br />
                Bespoke Design
                <br />
                Built in Bangladesh.
              </h1>
            </div>

            <div
              className="absolute right-5 md:right-6 top-[22%] max-w-[220px] md:max-w-xs"
              style={{ opacity: textOpacity }}
            >
              <p className="text-primary/70 text-sm md:text-base leading-relaxed">
                CDC Housing brings European standard planning with bespoke architectural
                design to develop high quality residential and commercial spaces in
                Bangladesh. We are creating modern homes built with quality, comfort and
                long term value in mind.
              </p>
            </div>

            <div
              className="absolute left-5 md:left-6 bottom-[16%] max-w-[200px] md:max-w-xs"
              style={{ opacity: textOpacity }}
            >
              <h2 className="font-serif text-2xl md:text-4xl text-secondary leading-tight">
                Developing
                <br />
                Tomorrow&apos;s
                <br />
                Bangladesh
              </h2>
            </div>

            <div
              className="absolute right-5 md:right-6 bottom-[16%] max-w-[220px] md:max-w-xs"
              style={{ opacity: textOpacity }}
            >
              <p className="text-primary/70 text-sm md:text-base leading-relaxed">
                CDC Housing is committed to building more than properties. We create
                thoughtfully designed spaces that improve everyday living, support modern
                urban lifestyles, and contribute to a better future for Bangladesh.
              </p>
            </div>
          </div>

          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                width: `${imgWidth}vw`,
                height: `${imgHeight}vh`,
                borderRadius: `${radius}px`,
              }}
            >
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="CDC Housing residential development"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{ opacity: i === activeIndex ? 1 : 0 }}
                />
              ))}

              <div
                className="absolute inset-0 flex items-end p-8 md:p-16"
                style={{ opacity: growth }}
              >
                <h2 className="font-serif text-white text-3xl md:text-5xl leading-tight drop-shadow-lg">
                  Building Tomorrow&apos;s Bangladesh
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>

      <section className="bg-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
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
    </>
  );
}