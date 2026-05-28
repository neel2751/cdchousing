"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-16">
          <AnimatedSection animation="fade-right">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h2 className="font-serif text-5xl text-primary">Featured Projects</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-left">
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-3 text-sm tracking-widest uppercase group"
            >
              <span className="w-8 h-px bg-primary transition-all duration-500 group-hover:w-16 group-hover:bg-secondary" />
              <span className="group-hover:text-secondary transition-colors duration-300">
                All Projects
              </span>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((project, i) => (
            <AnimatedSection
              key={project.id}
              animation="scale"
              delay={i * 100}
            >
              <Link href={`/projects/${project.id}`}>
                <div
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ aspectRatio: i === 0 ? "16/10" : "4/3" }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-secondary text-xs tracking-widest uppercase mb-2">
                      {project.category} · {project.status}
                    </span>
                    <h3 className="font-serif text-2xl text-white mb-1">{project.name}</h3>
                    <p className="text-white/60 text-sm">{project.location}</p>

                    <div
                      className="flex items-center gap-3 mt-4 text-secondary text-xs tracking-widest uppercase transition-all duration-500"
                      style={{
                        opacity: hovered === project.id ? 1 : 0,
                        transform: hovered === project.id ? "translateY(0)" : "translateY(12px)",
                      }}
                    >
                      <span>View Project</span>
                      <span>→</span>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-secondary/90 text-white text-xs px-3 py-1 tracking-widest uppercase">
                    {project.year}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}