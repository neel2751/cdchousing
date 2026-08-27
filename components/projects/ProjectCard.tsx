"use client";
import Link from "next/link";
import { Project } from "@/data/projects";
import Img from "@/components/shared/Img";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        animation: `fadeUp 0.7s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1) forwards`,
      }}
    >
      <div className="overflow-hidden" style={{ aspectRatio: "16 / 11" }}>
        <Img
          src={project.images[0]}
          alt={project.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
      </div>

      <h3 className="text-sm tracking-widest uppercase text-primary mt-5">
        {project.name}
      </h3>
      <p className="text-primary/50 text-sm mt-1">{project.location}</p>
      <span className="inline-block mt-3 text-secondary text-lg transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </Link>
  );
}