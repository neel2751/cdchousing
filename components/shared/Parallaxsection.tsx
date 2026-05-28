"use client";
import { useRef, useEffect, useState, ReactNode } from "react";

interface Props {
  imageUrl: string;
  speed?: number;
  overlayOpacity?: number;
  height?: string;
  children?: ReactNode;
}

export default function ParallaxSection({
  imageUrl,
  speed = 0.3,
  overlayOpacity = 0.5,
  height = "h-[60vh]",
  children,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom < 0 || rect.top > windowHeight) return;
      const relativeScroll = rect.top - windowHeight / 2;
      setOffsetY(relativeScroll * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${height}`}
    >
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY}px) scale(1.2)`,
          transition: "transform 0.05s linear",
        }}
      >
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(26,26,26,${overlayOpacity})` }}
      />

      {children && (
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
          {children}
        </div>
      )}
    </div>
  );
}