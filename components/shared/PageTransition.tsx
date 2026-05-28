"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const t = setTimeout(() => setAnimating(false), 800);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      className="fixed inset-0 z-[9990] bg-primary pointer-events-none"
      style={{
        transform: animating ? "translateY(0)" : "translateY(-100%)",
        transition: animating
          ? "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)"
          : "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0.3s",
        transformOrigin: "top",
      }}
    />
  );
}