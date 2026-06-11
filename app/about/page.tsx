import AnimatedSection from "@/components/shared/AnimatedSection";
import StorySection from "@/components/about/Storysection";
import WhyChooseSection from "@/components/about/Whychoosesection";
import StatisticsSection from "@/components/about/StatisticsSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      {/* Scroll-activated story + timeline */}
      <div className="pt-28 md:pt-36">
        <StorySection />
      </div>

      {/* Editorial "what sets us apart" grid */}
      <WhyChooseSection />

      {/* Impact counters */}
      <StatisticsSection />

      {/* Closing CTA */}
      <section className="bg-light py-28 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-6">
              Start Your Journey
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight mb-8">
              Let&apos;s Build Tomorrow&apos;s<br />
              <span className="italic text-secondary">Bangladesh</span> Together
            </h2>
            <p className="text-primary/50 text-base leading-relaxed max-w-xl mx-auto mb-12">
              Whether you&apos;re looking for your next home or have land to develop,
              our team is ready to turn your vision into a landmark.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-secondary text-white text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border border-primary/20 text-primary text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:border-secondary hover:text-secondary transition-all duration-500"
              >
                View Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}