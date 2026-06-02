import ProjectGrid from "@/components/projects/ProjectGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Featured Projects" };

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-36 md:pt-44 pb-12 md:pb-16 bg-light">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-6xl text-primary">Featured Projects</h1>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
            <p className="text-primary/60 max-w-xl mx-auto mt-6 leading-relaxed">
              European standard planning and bespoke architectural design — explore the
              residences and commercial spaces shaping tomorrow&apos;s Bangladesh.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 pb-24 md:pb-32">
        <ProjectGrid />
      </div>
    </>
  );
}