"use client";
import { useState } from "react";

const milestones = [
  {
    title: "Quality Construction",
    text: "Built with reliable materials, skilled workmanship, and careful attention to detail.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400",
  },
  {
    title: "Modern Architectural Design",
    text: "Bespoke designs that combine beauty, function, and comfortable living.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1400",
  },
  {
    title: "Safety & Reliability",
    text: "Developments planned with structural safety, trust, and long-term durability in mind.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400",
  },
  {
    title: "Comfortable Living",
    text: "Spaces designed to make everyday life easier, peaceful, and more enjoyable.",
    image: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1400",
  },
  {
    title: "Long-Term Value",
    text: "Properties created to serve families, businesses, and future generations.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1400",
  },
  {
    title: "Sustainable Development",
    text: "Thoughtful planning that supports better urban living and responsible growth in Bangladesh.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1400",
  },
];

export default function FoundationTimeline() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white">
      <div className="flex h-[420px] md:h-[520px] w-full overflow-hidden">
        {milestones.map((m, i) => {
          const isActive = active === i;
          return (
            <button
              key={m.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="relative h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] focus:outline-none"
              style={{ flex: isActive ? "1 1 0%" : "0 0 auto", width: isActive ? "auto" : "clamp(80px, 12vw, 170px)" }}
            >
              <img
                src={m.image}
                alt={m.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: isActive ? "grayscale(0)" : "grayscale(1)",
                  opacity: isActive ? 1 : 0.25,
                  transform: isActive ? "scale(1)" : "scale(1.05)",
                }}
              />
              <div
                className="absolute inset-0 transition-colors duration-700"
                style={{ background: isActive ? "rgba(26,26,26,0.35)" : "rgba(245,240,232,0.55)" }}
              />

              {!isActive && (
                <span className="absolute inset-0 flex items-center justify-center font-serif text-xl md:text-3xl text-primary/70">
                  {m.title}
                </span>
              )}

              {isActive && (
                <div
                  className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-left max-w-xl"
                  style={{ animation: "fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
                >
                  <h3 className="font-serif text-white leading-none">
                    <span className="text-4xl md:text-6xl">{m.title}</span>
                  </h3>
                  <div className="w-12 h-px bg-secondary my-5" />
                  <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-md">
                    {m.text}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}