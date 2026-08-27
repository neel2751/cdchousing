"use client";
import { useEffect, useState } from "react";
import Img from "@/components/shared/Img";

interface Props {
  images: string[];
  alt?: string;
  startIndex?: number;
  onClose?: () => void;
}

export default function ImageCarousel({ images, alt = "", startIndex = 0, onClose }: Props) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const go = (index: number) => {
    setDirection(index > current ? "right" : "left");
    setCurrent(index);
  };

  const prev = () => go(current === 0 ? images.length - 1 : current - 1);
  const next = () => go(current === images.length - 1 ? 0 : current + 1);

  /**
   * Every slide sits in the viewport (absolutely stacked, hidden with opacity),
   * so `loading="lazy"` never defers any of them — a 12-shot gallery would pull
   * all 12 files up front. Mount only the slide either side of the current one;
   * that still pre-warms the next arrow click without the other nine.
   */
  const isNear = (i: number) => {
    const d = Math.abs(i - current);
    return Math.min(d, images.length - d) <= 1;
  };

  useEffect(() => {
    if (!onClose) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (onClose) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-secondary text-xs tracking-widest uppercase transition-colors duration-300"
        >
          Close ✕
        </button>
        <span className="absolute top-6 left-6 text-white/30 text-xs tracking-widest uppercase">
          {current + 1} / {images.length}
        </span>

        <div className="relative w-full max-w-5xl max-h-[80vh] px-16">
          {images.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
            >
              {isNear(i) && (
                <Img
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  priority={i === current}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              )}
            </div>
          ))}
          {/* Spacer that gives the absolutely-positioned stack its height. */}
          <Img
            src={images[current]}
            alt=""
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full max-h-[80vh] object-contain invisible"
          />
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 text-white hover:border-secondary hover:text-secondary transition-all duration-300 flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 text-white hover:border-secondary hover:text-secondary transition-all duration-300 flex items-center justify-center"
        >
          →
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 ${
                i === current ? "w-8 h-px bg-secondary" : "w-2 h-px bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden aspect-video bg-accent">
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {isNear(i) && (
            <Img
              src={img}
              alt={`${alt} ${i + 1}`}
              priority={i === current}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm text-white hover:bg-secondary transition-all duration-300 flex items-center justify-center"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm text-white hover:bg-secondary transition-all duration-300 flex items-center justify-center"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 ${
              i === current ? "w-8 h-px bg-secondary" : "w-2 h-px bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}