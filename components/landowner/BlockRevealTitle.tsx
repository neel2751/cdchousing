"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface Props {
  text: string;
  coverColor: string;  
  textColor: string;  
  className?: string;
}

export default function BlockRevealTitle({ text, coverColor, textColor, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={clsx("block-reveal", animate && "animate", className)}>
      <span className="br-text" style={{ color: textColor }}>
        {text}
      </span>
      <span className="br-cover" style={{ backgroundColor: coverColor }} />
    </span>
  );
}