import AnimatedSection from "@/components/shared/AnimatedSection";

export default function PrivacyPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-5xl text-white">Privacy Policy</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-lg text-primary/70">
        <p>Last updated: January 2024</p>
        <h2>Information We Collect</h2>
        <p>
          CDC Housing collects personal information you provide through contact forms including
          your name, email address, phone number, and message content. This information is used
          solely for responding to your enquiries and providing our services.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to respond to enquiries, send project updates you request,
          improve our services, and comply with legal obligations. We do not sell or share
          your data with third parties for marketing purposes.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy concerns, contact us at{" "}
          <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-secondary">
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </>
  );
}