import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectsFAQ from "@/components/projects/ProjectsFAQ";
import ProjectsContactForm from "@/components/projects/ProjectsContactForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-light">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <p className="text-xs tracking-widest uppercase text-primary/40 mb-5">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="mx-1.5">/</span>
            <span>Projects</span>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-primary mb-10 md:mb-12">
            All Projects
          </h1>
          <ProjectGrid />
        </div>
      </section>

      <ProjectsFAQ />
      <ProjectsContactForm />
    </>
  );
}