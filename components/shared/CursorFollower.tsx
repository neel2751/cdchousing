"use client";
import { useEffect, useRef, useState } from "react";
import { useCursor } from "@/hooks/useCursor";

export default function CursorFollower() {
  const cursorDotRef    = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
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
    const dot    = cursorDotRef.current;
    const circle = cursorCircleRef.current;
    if (!dot || !circle || isTouchDevice) return;

    dot.style.left = `${position.x}px`;
    dot.style.top  = `${position.y}px`;

    let circleX = position.x;
    let circleY = position.y;
    let animId: number;

    const animate = () => {
      circleX += (position.x - circleX) * 0.12;
      circleY += (position.y - circleY) * 0.12;
      circle.style.left = `${circleX}px`;
      circle.style.top  = `${circleY}px`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9998] w-2 h-2 bg-secondary rounded-full"
        style={{
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
          transition: "transform 0.1s ease",
        }}
      />
      <div
        ref={cursorCircleRef}
        className="fixed pointer-events-none z-[9997] rounded-full border border-secondary"
        style={{
          width:           isHovering ? "56px" : "32px",
          height:          isHovering ? "56px" : "32px",
          backgroundColor: isHovering ? "rgba(200,169,110,0.12)" : "transparent",
          transform:       `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
          transition:      "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, transform 0.1s ease",
        }}
      />
    </>
  );
}