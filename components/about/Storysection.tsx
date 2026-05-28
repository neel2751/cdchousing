"use client";
import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "1995", title: "Founded", desc: "CDC Housing was established in Ahmedabad with a single vision — to redefine quality living in Gujarat." },
  { year: "2002", title: "First Landmark", desc: "Delivered our first large-scale residential complex with 300 units, setting a new benchmark for the region." },
  { year: "2010", title: "Expansion", desc: "Expanded operations to Surat, Vadodara, and Rajkot — becoming a truly Gujarat-wide developer." },
  { year: "2018", title: "Luxury Segment", desc: "Entered the ultra-luxury market with award-winning projects that earned national recognition." },
  { year: "2023", title: "5,000 Homes", desc: "Crossed the milestone of 5,000 families housed — a legacy built on trust, quality, and commitment." },
];

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-light">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
              Three Decades of<br />
              <span className="italic text-secondary">Building Dreams</span>
            </h2>
          </div>
          <div>
            <p className="text-primary/50 text-base leading-relaxed mb-6">
              CDC Housing began with a simple belief — every family deserves a home built with
              integrity, craftsmanship, and care. Over three decades, that belief has never wavered.
            </p>
            <p className="text-primary/40 text-sm leading-relaxed">
              From a modest office in Ahmedabad's old city to a pan-Gujarat developer trusted by
              thousands of families, our story is one of quiet determination and relentless quality.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden mb-24 aspect-21/9">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800"
            alt="CDC Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
          <div className="absolute bottom-8 left-8 md:left-16">
            <p className="text-white/60 text-xs tracking-widest uppercase">Headquarters</p>
            <p className="text-white font-serif text-2xl mt-1">Ahmedabad, Gujarat</p>
          </div>
        </div>

        <div>
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-12">Milestones</p>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 hidden md:block" />

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-primary/10 cursor-pointer transition-all duration-300 ${
                    activeIndex === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                    <span className="font-serif text-6xl text-primary/10 block leading-none mb-2">{m.year}</span>
                    <h3 className="font-serif text-2xl text-primary mb-2">{m.title}</h3>
                    <p className="text-primary/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full hidden md:block transition-all duration-300 ${
                      activeIndex === i ? "bg-secondary scale-150" : "bg-primary/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}