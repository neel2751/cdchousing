"use client";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Uncompromising Quality",
    desc: "Every material is handpicked. Every joint is inspected. We do not cut corners — because your home is not a compromise.",
    icon: "◈",
  },
  {
    number: "02",
    title: "On-Time Delivery",
    desc: "Our track record of timely possession is our most prized achievement and your greatest assurance.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Transparent Dealings",
    desc: "No hidden charges. No surprises. Every rupee you spend is accounted for — with complete clarity and documentation.",
    icon: "◇",
  },
  {
    number: "04",
    title: "After-Sales Support",
    desc: "Our relationship doesn't end at possession. A dedicated team handles maintenance, repairs, and community management post-handover.",
    icon: "◉",
  },
  {
    number: "05",
    title: "Sustainable Design",
    desc: "All CDC housing projects are designed with environmental responsibility — energy efficiency, green spaces, and sustainable materials.",
    icon: "◐",
  },
  {
    number: "06",
    title: "Award-Winning Architecture",
    desc: "Our design philosophy blends contemporary aesthetics with local heritage — creating buildings that are iconic, not just functional.",
    icon: "◑",
  },
];

export default function WhyChooseSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Why CDC</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
              What Sets Us<br />
              <span className="italic text-secondary">Apart</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm md:text-right">
              Choosing CDC Housing means choosing a legacy of trust. Here's why thousands of families
              have made us their developer of choice.
            </p>
          </div>
          <div className="w-full h-px bg-white/10 mt-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className="group border border-white/10 p-10 hover:bg-white/5 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ${i * 0.08}s ease, transform 0.7s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-secondary/30 font-serif text-6xl leading-none group-hover:text-secondary/50 transition-colors duration-500">
                  {reason.number}
                </span>
                <span className="text-secondary/50 text-2xl group-hover:text-secondary transition-colors duration-500">
                  {reason.icon}
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                {reason.desc}
              </p>
              <div className="w-0 h-px bg-secondary mt-8 group-hover:w-12 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}