"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const leftNav = navItems.slice(0, 2);
  const rightNav = navItems.slice(2);

  const linkClass = (href: string) =>
    clsx(
      "relative text-xl tracking-wide transition-colors duration-300",
      "after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-secondary after:transition-all after:duration-500",
      pathname === href
        ? "text-secondary after:w-full"
        : "text-[#1f2d4a] hover:text-secondary after:w-0 hover:after:w-full"
    );

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-light/95 backdrop-blur-md border-b border-primary/10",
          scrolled ? "shadow-sm py-1" : "py-1 md:py-1.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-2 lg:grid-cols-3 items-center">

          <nav className="hidden lg:flex items-center gap-10 justify-end pr-10">
            {leftNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className="group flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="CDC Housing"
              width={300}
              height={120}
              priority
              className="h-12 md:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 justify-start pl-10">
            {rightNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden flex justify-end col-start-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center gap-1.5 p-2 w-10 h-10 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={clsx("block h-px bg-[#1f2d4a] transition-all duration-300", menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6")} />
              <span className={clsx("block h-px bg-[#1f2d4a] transition-all duration-300", menuOpen ? "opacity-0 w-0" : "w-4")} />
              <span className={clsx("block h-px bg-[#1f2d4a] transition-all duration-300", menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6")} />
            </button>
          </div>

        </div>
      </header>

      <div
        className="fixed inset-0 z-40 bg-light flex flex-col justify-center lg:hidden"
        style={{
          clipPath: menuOpen ? "circle(150% at calc(100% - 28px) 28px)" : "circle(0% at calc(100% - 28px) 28px)",
          transition: "clip-path 0.7s cubic-bezier(0.76,0,0.24,1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col gap-1 px-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group flex items-center justify-between py-4 border-b border-primary/10 transition-colors duration-300",
                pathname === item.href ? "text-secondary" : "text-[#1f2d4a] hover:text-secondary"
              )}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(30px)",
                transition: `opacity 0.5s ease ${i * 0.07 + 0.2}s, transform 0.5s ease ${i * 0.07 + 0.2}s, color 0.3s ease`,
              }}
            >
              <span className="font-serif text-3xl">{item.label}</span>
              <span className="text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}