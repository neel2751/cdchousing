"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

const heroImages = [
  "/images/hero-4.jpg",
];

const PHASE1 = 0.50; // first half of scroll = move up; rest = expand

export default function HeroSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number>();
  const start = useRef({ sx: 0.30, sy: 0.60 });

  useEffect(() => {
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

    const isMobile = () => window.innerWidth < 768;

    const setStart = () => {
      // mobile: narrow portrait card so text sits clear in the corners
      start.current = isMobile() ? { sx: 0.55, sy: 0.50 } : { sx: 0.35, sy: 0.90 };
    };

    const readScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      target.current = total > 0 ? scrolled / total : 0;
    };

    const apply = (progress: number) => {
      const { sx: SX0, sy: SY0 } = start.current;
      const H = window.innerHeight;

      const navEl = document.querySelector("header");
      const navH = navEl ? navEl.getBoundingClientRect().height : 80;

      const gap = isMobile() ? 60 : 120;
      const Y1 = navH - (1 - SY0) * H / 2;

      const inPhase1 = progress < PHASE1;
      const p1 = clamp(progress / PHASE1);
      const p2 = clamp((progress - PHASE1) / (1 - PHASE1));

      let sx: number, sy: number, Y: number, grow: number;

      if (inPhase1) {
        sx = SX0;
        sy = SY0;
        grow = 0;
        Y = Y1 + gap * (1 - ease(p1));
      } else {
        grow = ease(Math.min(p2 / 0.9, 1));
        sx = SX0 + grow * (1 - SX0);
        sy = SY0 + grow * (1 - SY0);
        Y = Y1 * (1 - ease(p2));
      }

      const radius = 18 * (1 - grow);
      const textOpacity = inPhase1 ? 1 : 1 - clamp(p2 / 0.5);
      const slide = grow * (isMobile() ? 40 : 80);
      const captionOpacity = clamp((grow - 0.78) / 0.22);

      if (boxRef.current) {
        boxRef.current.style.transform = `translateY(${Y}px) scale(${sx}, ${sy})`;
        boxRef.current.style.borderRadius = `${radius / sx}px / ${radius / sy}px`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `scale(${1 / sx}, ${1 / sy})`;
      }
      if (leftRef.current) {
        leftRef.current.style.opacity = `${textOpacity}`;
        // mobile: top-left text slides up; desktop: left-center slides left
        leftRef.current.style.transform = isMobile()
          ? `translateY(${-slide}px)`
          : `translateY(-50%) translateX(${-slide}px)`;
      }
      if (rightRef.current) {
        rightRef.current.style.opacity = `${textOpacity}`;
        // mobile: bottom-right text slides down; desktop: right-center slides right
        rightRef.current.style.transform = isMobile()
          ? `translateY(${slide}px)`
          : `translateY(-50%) translateX(${slide}px)`;
      }
      if (captionRef.current) captionRef.current.style.opacity = `${captionOpacity}`;
    };

    const loop = () => {
      current.current += (target.current - current.current) * 0.06;
      if (Math.abs(target.current - current.current) < 0.0002) {
        current.current = target.current;
      }
      apply(current.current);
      raf.current = requestAnimationFrame(loop);
    };

    setStart();
    readScroll();
    current.current = target.current;
    apply(current.current);

    const onResize = () => { setStart(); readScroll(); };
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", onResize);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", onResize);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={wrapRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-light">

          {/* HEADING — top-left corner on mobile, left-center on desktop */}
          <div
            ref={leftRef}
            className="absolute left-4 right-[38%] md:right-auto md:left-10 lg:left-16 top-24 md:top-1/2 z-30 md:max-w-sm pointer-events-none text-left"
            style={{ willChange: "transform, opacity" }}
          >
            <h1 className="font-serif text-[19px] md:text-5xl text-primary leading-tight font-normal">
              European Standards
              <br />
              Bespoke Design
              <br />
              Built in Bangladesh.
            </h1>
          </div>

          {/* PARAGRAPH — bottom-right corner on mobile, right-center on desktop */}
          <div
            ref={rightRef}
            className="absolute right-4 left-[34%] md:left-auto md:right-10 lg:right-16 bottom-[8%] md:bottom-auto md:top-1/2 z-30 md:max-w-sm pointer-events-none text-right md:text-left"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-primary/70 text-[11px] md:text-base leading-relaxed">
              CDC Housing brings European standard planning with bespoke architectural
              design to develop high quality residential and commercial spaces in
              Bangladesh — modern homes built with quality, comfort and long term value
              in mind.
            </p>
          </div>

          {/* image stage */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div
              ref={boxRef}
              className="relative overflow-hidden shadow-2xl"
              style={{
                width: "100vw",
                height: "100vh",
                transform: "scale(0.35, 0.90)",
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <div
                ref={innerRef}
                className="absolute inset-0"
                style={{
                  transform: "scale(2.857, 1.111)",
                  transformOrigin: "center center",
                  willChange: "transform",
                }}
              >
                {heroImages.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="CDC Housing residential development"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            ref={captionRef}
            className="absolute inset-0 z-30 flex items-end p-6 md:p-16 pointer-events-none"
            style={{ opacity: 0 }}
          >
            <h2 className="font-serif text-white text-xl md:text-3xl leading-tight drop-shadow-lg">
              Building Tomorrow&apos;s Bangladesh
            </h2>
          </div>

        </div>
      </div>

      <section className="bg-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <AnimatedSection animation="fade-right" className="lg:col-span-6">
              <h2 className="font-display text-secondary leading-[1.05] text-4xl md:text-6xl lg:text-7xl">
                Developing
                <br />
                Tomorrow&apos;s
                <br />
                Bangladesh
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={150} className="lg:col-span-5 lg:col-start-8">
              <p className="text-primary/70 text-base md:text-lg leading-relaxed">
                CDC Housing is committed to building more than properties. We create thoughtfully designed spaces that improve everyday living,
                support modern urban lifestyles, and contribute to a better future for Bangladesh.
              </p>
              <p className="text-primary/70 text-base md:text-lg leading-relaxed mt-6">
                Where others see minor details, we see the small elements that come together
                to create an extraordinary living experience — homes built with quality,
                comfort and lasting value for the people of Bangladesh.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-light py-12 md:py-16">
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
                className="inline-flex items-center gap-3 border border-secondary text-secondary text-sm tracking-widest px-8 py-4 rounded-full hover:bg-secondary hover:text-white transition-all duration-500 whitespace-nowrap"
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