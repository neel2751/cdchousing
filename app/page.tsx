import HeroSection from "@/components/home/HeroSection";
import FoundationTimeline from "@/components/home/FoundationTimeline";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignPartner from "@/components/home/DesignPartner";
import MediaBlogs from "@/components/home/MediaBlogs";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDC Housing — European Standards, Bespoke Design, Built in Bangladesh",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FoundationTimeline />
      <FeaturedProjects />
      <DesignPartner />
      <MediaBlogs />

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
                className="inline-flex items-center justify-center gap-3 bg-secondary text-white text-xs tracking-widest px-10 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border border-primary/20 text-primary text-xs tracking-widest px-10 py-4 rounded-full hover:border-secondary hover:text-secondary transition-all duration-500"
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