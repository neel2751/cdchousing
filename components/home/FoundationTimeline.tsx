"use client";
import { useState } from "react";

const milestones = [
  {
    year: "1976",
    title: "The Foundation",
    text: "The roots of a global vision were planted as the founder began his journey in interior decoration and construction across the Middle East.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400",
  },
  {
    year: "1995",
    title: "Establishing Sobha Ltd.",
    text: "After his phenomenal success in the Middle East, Mr. PNC Menon entered the Indian real estate market at a nascent stage when it was in dire need of quality construction. In 1995, he founded Sobha Developers, headquartered in Bangalore.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1400",
  },
  {
    year: "2003",
    title: "Expanding Horizons",
    text: "A decade of disciplined growth established a reputation for backward integration and uncompromising quality across landmark projects.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400",
  },
  {
    year: "2014",
    title: "Global Footprint",
    text: "The brand extended its philosophy of bespoke design and European standards into new international markets.",
    image: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1400",
  },
  {
    year: "2016",
    title: "A New Chapter",
    text: "Building on decades of legacy, the foundation was laid for bringing world-class living to Bangladesh through CDC Housing.",
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
              key={m.year}
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
                  {m.year}
                </span>
              )}

              {isActive && (
                <div
                  className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-left max-w-xl"
                  style={{ animation: "fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
                >
                  <h3 className="font-serif text-white leading-none">
                    <span className="text-4xl md:text-6xl">{m.year}</span>
                    <span className="text-secondary text-base md:text-xl italic ml-3">— {m.title}</span>
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