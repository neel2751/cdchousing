"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-4"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6 flex items-center justify-between">

          <Link href="/" className="group flex items-center gap-2 md:gap-3 z-10">
            <div className="relative">
              <span
                className={clsx(
                  "font-serif font-bold transition-colors duration-300",
                  "text-xl md:text-2xl",
                  scrolled
                    ? "text-primary group-hover:text-secondary"
                    : "text-white group-hover:text-secondary"
                )}
              >
                CDC
              </span>
              <span
                className="absolute bottom-0 left-0 h-px bg-secondary transition-all duration-500 group-hover:w-full"
                style={{ width: scrolled ? "100%" : "0%" }}
              />
            </div>
            <span
              className={clsx(
                "text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase transition-colors duration-300",
                scrolled ? "text-primary/60" : "text-white/70"
              )}
            >
              Housing
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative text-xs tracking-wider uppercase transition-colors duration-300",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-secondary",
                  "after:transition-all after:duration-500",
                  pathname === item.href
                    ? "text-secondary after:w-full"
                    : scrolled
                    ? "text-primary hover:text-secondary after:w-0 hover:after:w-full"
                    : "text-white/90 hover:text-secondary after:w-0 hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className={clsx(
              "hidden lg:block text-xs tracking-widest uppercase px-5 xl:px-6 py-2.5 xl:py-3 border transition-all duration-500",
              "hover:bg-secondary hover:border-secondary hover:text-white",
              scrolled
                ? "border-primary text-primary"
                : "border-white/60 text-white"
            )}
          >
            Get in Touch
          </Link>

          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/contact"
              className={clsx(
                "hidden xs:block text-[10px] tracking-widest uppercase px-3 py-2 border transition-all duration-500",
                scrolled
                  ? "border-primary/40 text-primary"
                  : "border-white/40 text-white"
              )}
            >
              Enquire
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center gap-1.5 p-2 w-10 h-10 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={clsx(
                  "block h-px transition-all duration-300 origin-center",
                  scrolled || menuOpen ? "bg-primary" : "bg-white",
                  menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                )}
              />
              <span
                className={clsx(
                  "block h-px transition-all duration-300",
                  scrolled || menuOpen ? "bg-primary" : "bg-white",
                  menuOpen ? "opacity-0 w-0" : "w-4"
                )}
              />
              <span
                className={clsx(
                  "block h-px transition-all duration-300 origin-center",
                  scrolled || menuOpen ? "bg-primary" : "bg-white",
                  menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                )}
              />
            </button>
          </div>

        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-white flex flex-col justify-between",
          "transition-all duration-700 lg:hidden"
        )}
        style={{
          clipPath: menuOpen
            ? "circle(150% at calc(100% - 28px) 28px)"
            : "circle(0% at calc(100% - 28px) 28px)",
          transition: "clip-path 0.7s cubic-bezier(0.76,0,0.24,1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="pt-20 px-6 flex-1 flex flex-col justify-center">
          {/* Nav Links */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "group flex items-center justify-between py-4 border-b border-primary/8",
                  "transition-all duration-300",
                  pathname === item.href
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                )}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(30px)",
                  transition: `opacity 0.5s ease ${i * 0.07 + 0.2}s, transform 0.5s ease ${
                    i * 0.07 + 0.2
                  }s, color 0.3s ease`,
                }}
              >
                <span className="font-serif text-3xl xs:text-4xl">{item.label}</span>
                <span className="text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="mt-8 self-start text-xs tracking-widest uppercase border border-secondary text-secondary px-8 py-3 hover:bg-secondary hover:text-white transition-all duration-300"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(30px)",
              transition: `opacity 0.5s ease ${navItems.length * 0.07 + 0.25}s, transform 0.5s ease ${
                navItems.length * 0.07 + 0.25
              }s, background-color 0.3s ease, color 0.3s ease`,
            }}
          >
            Get in Touch
          </Link>
        </div>

        <div
          className="px-6 pb-10 border-t border-primary/10 pt-6"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.5s ease 0.55s",
          }}
        >
          <p className="text-xs tracking-widest uppercase text-primary/40 mb-3">Contact</p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
            className="block text-primary text-sm mb-1 hover:text-secondary transition-colors duration-300"
          >
            {process.env.NEXT_PUBLIC_CONTACT_PHONE}
          </a>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            className="block text-primary/60 text-sm hover:text-secondary transition-colors duration-300"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </>
  );
}