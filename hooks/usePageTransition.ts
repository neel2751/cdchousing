"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function usePageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== displayPath) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayPath(pathname);
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [pathname, displayPath]);

  return { isTransitioning, displayPath };
}