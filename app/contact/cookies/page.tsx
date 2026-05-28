import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CookiesPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-5xl text-white">Cookie Policy</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-lg text-primary/70">
        <p>Last updated: January 2024</p>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit our website.
          They help us remember your preferences and improve your browsing experience.
        </p>
        <h2>How We Use Cookies</h2>
        <p>
          We use essential cookies for site functionality and analytics cookies to
          understand how visitors use our site. We do not use advertising cookies.
        </p>
        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. Disabling cookies may
          affect some features of this website.
        </p>
      </div>
    </>
  );
}