"use client";
import { useEffect, useState } from "react";

export function useCounter(
  target: number,
  duration: number = 2000,
  isActive: boolean = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (target - startValue) * eased));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [target, duration, isActive]);

  return count;
}