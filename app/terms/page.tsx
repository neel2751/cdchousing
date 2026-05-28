import AnimatedSection from "@/components/shared/AnimatedSection";

export default function TermsPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-5xl text-white">Terms of Service</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-lg text-primary/70">
        <p>Last updated: January 2024</p>
        <h2>Use of This Website</h2>
        <p>
          By accessing this website, you agree to use it solely for lawful purposes.
          Content on this site is for informational purposes and does not constitute
          a legal offer. All project details are subject to final agreement.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All content including images, text, logos and designs on this website are
          the property of CDC Housing and may not be reproduced without written permission.
        </p>
        <h2>Disclaimer</h2>
        <p>
          Project renders and images are for representation purposes only. Actual
          finishes and specifications may vary. Please contact our sales team for
          the latest approved specifications.
        </p>
      </div>
    </>
  );
}