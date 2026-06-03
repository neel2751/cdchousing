"use client";
import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "1995", title: "Founded", desc: "CDC Housing was established in Dhaka with a single vision — to redefine quality living across Bangladesh." },
  { year: "2002", title: "First Landmark", desc: "Delivered our first large-scale residential complex with 300 units, setting a new benchmark for the region." },
  { year: "2010", title: "Expansion", desc: "Expanded operations beyond Dhaka — becoming a developer trusted nationwide." },
  { year: "2018", title: "Luxury Segment", desc: "Entered the ultra-luxury market with award-winning projects that earned national recognition." },
  { year: "2023", title: "5,000 Homes", desc: "Crossed the milestone of 5,000 families housed — a legacy built on trust, quality, and commitment." },
];

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [introVisible, setIntroVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const introRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // intro + banner reveal on scroll-in
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === introRef.current) setIntroVisible(true);
          if (e.target === imageRef.current) setImageVisible(true);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    if (introRef.current) io.observe(introRef.current);
    if (imageRef.current) io.observe(imageRef.current);
    return () => io.disconnect();
  }, []);

  // scroll-activated timeline: whichever card is nearest viewport center wins
  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2;
      let nearest = 0;
      let min = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cardCenter = r.top + r.height / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < min) {
          min = dist;
          nearest = i;
        }
      });
      setActiveIndex(nearest);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-24 px-6 bg-light">
      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <div
          ref={introRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-end"
        >
          <div
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
              Three Decades of<br />
              <span className="italic text-secondary">Building Dreams</span>
            </h2>
          </div>
          <div
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.9s 0.15s cubic-bezier(0.16,1,0.3,1), transform 0.9s 0.15s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <p className="text-primary/50 text-base leading-relaxed mb-6">
              CDC Housing began with a simple belief — every family deserves a home built with
              integrity, craftsmanship, and care. Over three decades, that belief has never wavered.
            </p>
            <p className="text-primary/40 text-sm leading-relaxed">
              From a modest office in Dhaka to a developer trusted by thousands of families across
              Bangladesh, our story is one of quiet determination and relentless quality.
            </p>
          </div>
        </div>

        {/* Banner with clip-path reveal */}
        <div
          ref={imageRef}
          className={`relative overflow-hidden mb-24 h-[40vh] md:h-[55vh] bg-primary/10 ${
            "image-reveal-visible"
          }`}
        >
          <img
            src="/images/about-banner.jpg"
            alt="CDC Housing headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
          <div className="absolute bottom-8 left-8 md:left-16">
            <p className="text-white/60 text-xs tracking-widest uppercase">Headquarters</p>
            <p className="text-white font-serif text-2xl mt-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Scroll-activated timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Sticky giant year (desktop) */}
          <div className="hidden md:block">
            <div className="sticky top-32">
              <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-8">Milestones</p>
              <span
                key={milestones[activeIndex].year}
                className="block font-serif text-[7rem] leading-none text-primary animate-[fadeIn_0.5s_ease]"
              >
                {milestones[activeIndex].year}
              </span>
              <h3 className="font-serif text-3xl text-secondary mt-2">
                {milestones[activeIndex].title}
              </h3>
              <div className="w-16 h-px bg-secondary mt-8" />
              <p className="text-primary/40 text-sm mt-3 tracking-widest">
                {String(activeIndex + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* Scrolling cards */}
          <div className="md:py-[25vh] space-y-24 md:space-y-40">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`transition-all duration-500 ${
                  activeIndex === i ? "opacity-100 translate-x-0" : "opacity-30 md:translate-x-2"
                }`}
              >
                <span className="md:hidden block font-serif text-6xl text-primary/10 leading-none mb-2">
                  {m.year}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-3">{m.title}</h3>
                <p className="text-primary/50 text-sm leading-relaxed max-w-md">{m.desc}</p>
                <div
                  className={`h-px bg-secondary mt-8 transition-all duration-700 ${
                    activeIndex === i ? "w-16" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}