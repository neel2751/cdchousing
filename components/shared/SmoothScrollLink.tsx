"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothScrollLink({ href, children, className, onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    onClick?.();
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}