"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function CounterAnimation({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 2200,
}: Props) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useCounter(target, duration, isVisible);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center"
    >
      <div className="font-serif text-5xl md:text-6xl font-bold text-secondary mb-2 counter-number">
        {prefix}{count}{suffix}
      </div>
      <div className="text-primary/60 text-sm tracking-widest uppercase">{label}</div>
    </div>
  );
}