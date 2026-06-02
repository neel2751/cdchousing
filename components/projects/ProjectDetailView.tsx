"use client";
import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import ImageCarousel from "./ImageCarousel";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  project: Project;
}

export default function ProjectDetailView({ project }: Props) {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openCarousel = (index: number) => {
    setStartIndex(index);
    setCarouselOpen(true);
  };

  const statusColor =
    project.status === "completed"
      ? "bg-green-700/15 text-green-700 border-green-700/30"
      : project.status === "ongoing"
      ? "bg-secondary/15 text-secondary border-secondary/40"
      : "bg-primary/10 text-primary border-primary/20";

  return (
    <>
      <div className="relative h-[65vh] md:h-[70vh] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/75" />

        <Link
          href="/projects"
          className="absolute top-28 md:top-32 left-5 md:left-16 z-10 flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase hover:text-secondary transition-colors duration-300"
        >
          <span>←</span> All Projects
        </Link>

        <div className="absolute bottom-10 md:bottom-12 left-5 md:left-16 z-10 max-w-2xl pr-5">
          <span className="text-secondary text-xs tracking-[0.4em] uppercase block mb-3">
            {project.category}
          </span>
          <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight mb-3">
            {project.name}
          </h1>
          <p className="text-white/70 text-sm">{project.location}</p>
        </div>

        <div className={`absolute top-28 md:top-32 right-5 md:right-16 border text-xs px-4 py-1.5 tracking-widest uppercase backdrop-blur-sm ${statusColor}`}>
          {project.status}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          <AnimatedSection animation="fade-right" className="lg:col-span-2">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-6">Overview</p>
            <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="w-12 h-px bg-secondary mb-8" />
            <p className="text-primary/60 text-base leading-relaxed mb-12">
              {project.fullDescription}
            </p>

            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-6">Features &amp; Amenities</p>
            <div className="flex flex-wrap gap-3">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="border border-primary/20 text-primary/60 text-xs tracking-widest uppercase px-4 py-2 rounded-full hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left">
            <div className="bg-accent p-8 mb-6">
              <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-8">Project Details</p>
              <div className="space-y-5">
                {[
                  { label: "Status", value: project.status.charAt(0).toUpperCase() + project.status.slice(1) },
                  { label: "Year", value: project.year },
                  { label: "Area", value: project.area },
                  { label: "Units", value: project.units },
                  { label: "Location", value: project.location },
                  { label: "Category", value: project.category.charAt(0).toUpperCase() + project.category.slice(1) },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start border-b border-primary/10 pb-4">
                    <span className="text-primary/40 text-xs uppercase tracking-wider">{item.label}</span>
                    <span className="text-primary text-sm font-medium text-right max-w-[55%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 w-full border border-secondary text-secondary text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-secondary hover:text-white transition-all duration-500"
            >
              Enquire About This Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-20 md:mt-24">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-8">Gallery</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden aspect-4/3 cursor-pointer group relative"
                onClick={() => openCarousel(i)}
              >
                <img
                  src={img}
                  alt={`${project.name} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {carouselOpen && (
        <ImageCarousel
          images={project.images}
          startIndex={startIndex}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </>
  );
}