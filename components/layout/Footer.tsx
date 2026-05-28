import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">

      <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6 pt-14 md:pt-20 pb-10 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          <div className="sm:col-span-2">
            <h2 className="font-serif text-white mb-2"
              style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}>
              CDC Housing
            </h2>
            <div className="w-12 md:w-16 h-px bg-secondary mb-5 md:mb-6" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Building aspirations into reality across Gujarat since 1995. Crafting homes
              that stand as legacies for generations to come.
            </p>

            <div className="flex gap-3 mt-6 md:mt-8">
              {footerLinks.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-secondary hover:text-secondary transition-all duration-300 text-xs uppercase tracking-wider touch-manipulation"
                  aria-label={s.label}
                >
                  {s.icon.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-secondary mb-4 md:mb-6"
              style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}>
              Company
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-secondary mb-4 md:mb-6"
              style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}>
              Contact
            </h3>
            <ul className="space-y-2.5 md:space-y-3 text-white/50 text-sm">
              <li className="leading-relaxed hover:text-white transition-colors duration-300">
                {process.env.NEXT_PUBLIC_ADDRESS}
              </li>
              <li>
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="hover:text-secondary transition-colors duration-300 touch-manipulation">
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                  className="hover:text-secondary transition-colors duration-300 touch-manipulation">
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6 py-5 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {currentYear} CDC Housing. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/30 text-xs hover:text-secondary transition-colors duration-300 touch-manipulation"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}