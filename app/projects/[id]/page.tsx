import { projects } from "@/data/projects";
import ImageCarousel from "@/components/projects/ImageCarousel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: { id: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id);
  return { title: project?.name ?? "Project" };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-0 bg-primary">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">
              {project.category} · {project.status}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white">{project.name}</h1>
            <p className="text-white/50 mt-3">{project.location}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ImageCarousel images={project.images} alt={project.name} />
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <AnimatedSection animation="fade-right" className="md:col-span-2">
          <h2 className="font-serif text-3xl text-primary mb-6">About This Project</h2>
          <div className="w-12 h-px bg-secondary mb-6" />
          <p className="text-primary/60 leading-relaxed">{project.fullDescription}</p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm text-primary/70">
                <span className="w-1 h-1 rounded-full bg-secondary inline-block" />
                {f}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-left">
          <div className="bg-accent p-8 space-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary/40 mb-1">Area Range</p>
              <p className="font-serif text-xl text-primary">{project.area}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-primary/40 mb-1">Units</p>
              <p className="font-serif text-xl text-primary">{project.units}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-primary/40 mb-1">Year</p>
              <p className="font-serif text-xl text-primary">{project.year}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-primary/40 mb-1">Status</p>
              <p className="font-serif text-xl text-primary capitalize">{project.status}</p>
            </div>
            
              href="/contact"
              className="block w-full text-center bg-primary text-white text-xs tracking-widest uppercase py-4 hover:bg-secondary transition-all duration-500 mt-4"
            >
              Enquire Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}