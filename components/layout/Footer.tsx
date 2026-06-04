import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/navigation";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-primary border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-5 md:px-6 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          <div>
            <Image
              src="/images/logo.png"
              alt="CDC Housing"
              width={300}
              height={120}
              className="h-14 w-auto object-contain"
            />
            <p className="text-primary/50 text-sm leading-relaxed mt-5 max-w-xs">
              European standard planning and bespoke design, building tomorrow&apos;s Bangladesh.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="uppercase tracking-widest text-secondary mb-4 text-xs">Office</h3>
            <address className="not-italic text-primary/60 text-sm leading-relaxed space-y-1">
              <p>Ayub Height, House – 25</p>
              <p>Block – A, Avenue Road Bashundhara R/A</p>
              <p>Dhaka – 1229</p>
              <a
                href="mailto:contact@cdchousing.com"
                className="inline-block mt-3 hover:text-secondary transition-colors duration-300"
              >
                contact@cdchousing.com
              </a>
            </address>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-secondary mb-4 text-xs">Legal &amp; Press</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary/60 text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-6">
              {footerLinks.social.map((s) => {
                const Icon =
                  s.icon === "facebook" ? Facebook
                  : s.icon === "linkedin" ? Linkedin
                  : s.icon === "instagram" ? Instagram
                  : Youtube;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 border border-primary/20 flex items-center justify-center text-primary/50 hover:border-secondary hover:text-secondary hover:bg-white transition-all duration-300"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-5 text-center">
          <p className="text-primary/40 text-xs">
            All Rights Reserved by CDC Housing Limited. © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}