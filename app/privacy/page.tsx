import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-6 pt-28 md:pt-36 pb-20 md:pb-28">
        <AnimatedSection animation="fade-up">
          <p className="text-secondary text-xs tracking-widest uppercase mb-4">CDC Housing</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-3">Privacy Policy</h1>
          <div className="w-16 h-px bg-secondary mb-10" />

          <p className="text-primary/70 text-base leading-relaxed mb-10">
            At CDC Housing, we respect your privacy and are committed to protecting your personal information.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-serif text-2xl text-primary mb-3">What We Collect</h2>
              <p className="text-primary/70 text-base leading-relaxed">
                We collect personal information you voluntarily provide through our website, forms, events,
                registrations, communications and service interactions. This may include name, contact details,
                preferences and engagement information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-primary mb-3">How We Use Your Information</h2>
              <p className="text-primary/70 text-base leading-relaxed mb-4">We use your information to:</p>
              <ul className="space-y-2 text-primary/70 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  Respond to your inquiries and requests
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  Provide products, services and information you ask for
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  Improve our website and offerings
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  Share relevant updates about CDC Housing
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-primary mb-3">Website and Cookies</h2>
              <p className="text-primary/70 text-base leading-relaxed">
                Our website may use cookies and similar technologies to enhance your experience, analyze usage
                and improve functionality. This information is collected in a way that does not identify you
                personally.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-primary mb-3">Data Protection and Access</h2>
              <p className="text-primary/70 text-base leading-relaxed">
                We take appropriate measures to safeguard your data. You can request access, correction or
                removal of your personal information by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-primary mb-3">Changes to Policy</h2>
              <p className="text-primary/70 text-base leading-relaxed">
                We may update this policy occasionally. Updates will be posted on our official website.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}