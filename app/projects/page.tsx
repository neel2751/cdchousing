import ProjectGrid from "@/components/projects/ProjectGrid";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h1 className="font-serif text-6xl text-white">Our Projects</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <ProjectGrid />
      </div>
    </>
  );
}