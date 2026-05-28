import ContactForm from "@/components/contact/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-10 md:pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary uppercase tracking-[0.4em] mb-3"
              style={{ fontSize: "clamp(0.6rem, 2vw, 0.75rem)" }}>
              Reach Us
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}>
              Get in Touch
            </h1>
            <div className="w-12 md:w-16 h-px bg-secondary mt-4 md:mt-6" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6 py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Info + Map */}
          <AnimatedSection animation="fade-right">
            <h2 className="font-serif text-primary mb-6 md:mb-8"
              style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}>
              Let&apos;s Build Your Dream
            </h2>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  label: "Address",
                  value: process.env.NEXT_PUBLIC_ADDRESS ?? "",
                  href:  null,
                },
                {
                  label: "Email",
                  value: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
                  href:  `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
                },
                {
                  label: "Phone",
                  value: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
                  href:  `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`,
                },
                {
                  label: "Office Hours",
                  value: "Mon – Sat: 10:00 AM – 7:00 PM",
                  href:  null,
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="uppercase tracking-widest text-secondary mb-1.5"
                    style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-primary/70 hover:text-secondary transition-colors duration-300 text-sm md:text-base touch-manipulation"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-primary/70 text-sm md:text-base">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 md:mt-10 overflow-hidden border border-primary/10"
              style={{ aspectRatio: "16/9" }}>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Ahmedabad,Gujarat`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CDC Housing Office Location"
              />
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection animation="fade-left">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}