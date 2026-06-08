"use client";
import { useState, useEffect } from "react";

const milestones = [
  {
    title: "Quality Construction",
    text: "Built with reliable materials, skilled workmanship, and careful attention to detail.",
    image: "/images/foundation/Quality Construction.jpg",
  },
  {
    title: "Modern Architectural Design",
    text: "Bespoke designs that combine beauty, function, and comfortable living.",
    image: "/images/foundation/Architectural Design.jpg",
  },
  {
    title: "Safety & Reliability",
    text: "Developments planned with structural safety, trust, and long-term durability in mind.",
    image: "/images/foundation/Safety And Reliability.jpg",
  },
  {
    title: "Comfortable Living",
    text: "Spaces designed to make everyday life easier, peaceful, and more enjoyable.",
    image: "/images/foundation/Comfortable Living.jpg",
  },
  {
    title: "Long-Term Value",
    text: "Properties created to serve families, businesses, and future generations.",
    image: "/images/foundation/Long-Term Value.jpg",
  },
  {
    title: "Sustainable Development",
    text: "Thoughtful planning that supports better urban living and responsible growth in Bangladesh.",
    image: "/images/foundation/Sustainable Development.jpg",
  },
];

const FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1400' height='1000'>
      <rect width='100%' height='100%' fill='#1f2d4a'/>
      <rect x='0' y='0' width='100%' height='100%' fill='url(#g)'/>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#1f2d4a'/>
          <stop offset='1' stop-color='#2a3a5c'/>
        </linearGradient>
      </defs>
    </svg>`
  );

export default function FoundationTimeline() {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src !== FALLBACK) img.src = FALLBACK;
  };

  return (
    <section className="bg-white">
      <div
        className={
          isMobile
            ? "flex flex-col w-full overflow-hidden"
            : "flex h-[420px] md:h-[520px] w-full overflow-hidden"
        }
        style={isMobile ? { height: "auto" } : undefined}
      >
        {milestones.map((m, i) => {
          const isActive = active === i;
          return (
            <button
              key={m.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => !isMobile && setActive(i)}
              className="relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] focus:outline-none w-full"
              style={
                isMobile
                  ? { height: isActive ? "340px" : "64px" }
                  : {
                      height: "100%",
                      flex: isActive ? "1 1 0%" : "0 0 auto",
                      width: isActive ? "auto" : "clamp(80px, 12vw, 170px)",
                    }
              }
            >
              <img
                src={m.image}
                alt={m.title}
                onError={onImgError}
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
                <span className="absolute inset-0 flex items-center justify-center font-serif text-lg md:text-3xl text-primary/70 px-4 text-center">
                  {m.title}
                </span>
              )}

              {isActive && (
                <div
                  className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-left max-w-xl"
                  style={{ animation: "fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both" }}
                >
                  <h3 className="font-serif text-white leading-none">
                    <span className="text-2xl md:text-6xl">{m.title}</span>
                  </h3>
                  <div className="w-12 h-px bg-secondary my-4 md:my-5" />
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