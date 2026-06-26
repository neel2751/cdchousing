"use client";
import { useEffect, useRef, useState } from "react";
import { useCursor } from "@/hooks/useCursor";

export default function CursorFollower() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking } = useCursor();
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouchDevice(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const dot = cursorDotRef.current;
    if (!dot || isTouchDevice) return;

    dot.style.left = `${position.x}px`;
    dot.style.top  = `${position.y}px`;
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorDotRef}
      className="fixed pointer-events-none z-[9998] flex items-center justify-center select-none"
      style={{
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        transition: "transform 0.1s ease, width 0.3s ease, height 0.3s ease",
        width:  isHovering ? "48px" : "36px",
        height: isHovering ? "48px" : "36px",
      }}
    >
      <img
        src="/images/cursor.png"
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  );
}