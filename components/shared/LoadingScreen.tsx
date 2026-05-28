"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress,  setProgress]  = useState(0);
  const [hiding,    setHiding]    = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHiding(true);
            setTimeout(() => setIsLoading(false), 700);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 16 + 4;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center px-6"
      style={{
        opacity:    hiding ? 0 : 1,
        transform:  hiding ? "translateY(-100%)" : "translateY(0)",
        transition: "opacity 0.4s ease, transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      {/* Logo */}
      <div className="mb-10 text-center">
        <h1 className="font-serif text-white tracking-widest"
          style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
          CDC
        </h1>
        <p className="text-secondary tracking-[0.4em] mt-1 uppercase"
          style={{ fontSize: "clamp(0.6rem, 2vw, 0.75rem)" }}>
          Housing
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-40 xs:w-48 h-px bg-white/20 relative">
        <div
          className="absolute left-0 top-0 h-full bg-secondary transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Counter */}
      <p className="text-white/40 mt-4 font-mono"
        style={{ fontSize: "clamp(0.65rem, 2vw, 0.75rem)" }}>
        {Math.min(Math.floor(progress), 100)}%
      </p>
    </div>
  );
}