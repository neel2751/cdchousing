import ContactForm from "@/components/contact/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Reach Us</p>
            <h1 className="font-serif text-6xl text-white">Get in Touch</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* Info */}
        <AnimatedSection animation="fade-right">
          <h2 className="font-serif text-4xl text-primary mb-8">Let's Build Your Dream</h2>
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-secondary mb-2">Address</p>
              <p className="text-primary/70">{process.env.NEXT_PUBLIC_ADDRESS}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-secondary mb-2">Email</p>
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="text-primary/70 hover:text-secondary transition-colors duration-300">
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-secondary mb-2">Phone</p>
              <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                className="text-primary/70 hover:text-secondary transition-colors duration-300">
                {process.env.NEXT_PUBLIC_CONTACT_PHONE}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-secondary mb-2">Office Hours</p>
              <p className="text-primary/70">Mon – Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-10 overflow-hidden aspect-video border border-primary/10">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Ahmedabad,Gujarat`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection animation="fade-left">
          <ContactForm />
        </AnimatedSection>

      </div>
    </>
  );
}