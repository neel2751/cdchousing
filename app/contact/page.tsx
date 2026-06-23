import ContactForm from "@/components/contact/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6 pt-28 md:pt-36 pb-14 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">

          <AnimatedSection animation="fade-right" className="lg:col-span-6">
            <h2 className="font-serif text-primary mb-8 md:mb-10"
              style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>
              Get in Touch
            </h2>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" className="lg:col-span-3">
            <h3 className="font-serif text-xl text-primary mb-6">Office Information</h3>
            <div className="space-y-6">
              <div>
                <p className="text-secondary text-xs tracking-widest uppercase mb-1.5">Phone / WhatsApp</p>
                <a href="tel:+880 1772-206985" className="block text-primary/70 text-sm hover:text-secondary transition-colors duration-300 mt-1">
                  +880 1772 206985
                </a>
                <a href="tel: +880 1716-776543" className="block text-primary/70 text-sm hover:text-secondary transition-colors duration-300 mt-1">
                  +880 1716-776543
                </a>
              </div>
              <div>
                <p className="text-secondary text-xs tracking-widest uppercase mb-1.5">Email</p>
                <a href="mailto:contact@cdchousing.com" className="text-primary/70 text-sm hover:text-secondary transition-colors duration-300">
                  contact@cdchousing.com
                </a>
              </div>
              <div>
                <p className="text-secondary text-xs tracking-widest uppercase mb-1.5">Office Address</p>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Ayub Height, House – 25, Block – A,<br />
                  Avenue Road, Bashundhara R/A,<br />
                  Dhaka – 1229
                </p>
              </div>
              <div>
                <p className="text-secondary text-xs tracking-widest uppercase mb-1.5">Business Hours</p>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Sat – Thu: 10:00 AM – 7:00 PM<br />
                  Friday: Closed
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" className="lg:col-span-3 space-y-12">
            <div>
              <h3 className="font-serif text-xl text-primary mb-5">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { Icon: FaInstagram, color: "#E4405F", label: "Instagram", href: "#" },
                  { Icon: FaFacebook,  color: "#1877F2", label: "Facebook",  href: "#" },
                  { Icon: FaLinkedin,  color: "#0A66C2", label: "LinkedIn",  href: "#" },
                  { Icon: FaYoutube,   color: "#FF0000", label: "YouTube",   href: "#" },
                ].map(({ Icon, color, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{ color }}
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-5">Connect More</h3>
              <div className="space-y-3">
                {[
                  { label: "View Our Projects", href: "/projects" },
                  { label: "Landowner", href: "/landowner" },
                  { label: "About Us", href: "/about" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group flex items-center justify-between border-b border-primary/10 pb-3 text-primary/70 hover:text-secondary transition-colors duration-300"
                  >
                    <span className="text-sm">{l.label}</span>
                    <span className="text-secondary transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>

      <div className="w-full">
        <div className="overflow-hidden border-t border-primary/10" style={{ aspectRatio: "21/9" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5181270696803!2d90.4266296!3d23.7645572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bd979cf899%3A0x8d88c19c6627f7f8!2sCDC%20Housing%20Ltd!5e0!3m2!1sen!2suk!4v1781713761003!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CDC Housing Office Location"
          />
        </div>
      </div>
    </>
  );
}