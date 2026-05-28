"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children:   ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade-in";
  delay?:     number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className,
  animation  = "fade-up",
  delay      = 0,
  threshold  = 0.15,
}: Props) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
    // Lower rootMargin on mobile — trigger earlier so content
    // isn't hidden when user scrolls fast on touch
    rootMargin: "-40px 0px -40px 0px",
  });

  const hiddenStyles: Record<string, React.CSSProperties> = {
    "fade-up":    { opacity: 0, transform: "translateY(60px)" },
    "fade-left":  { opacity: 0, transform: "translateX(-60px)" },
    "fade-right": { opacity: 0, transform: "translateX(60px)" },
    "scale":      { opacity: 0, transform: "scale(0.88)" },
    "fade-in":    { opacity: 0 },
  };

  const visibleStyles: React.CSSProperties = {
    opacity:   1,
    transform: "none",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={clsx(className)}
      style={{
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}