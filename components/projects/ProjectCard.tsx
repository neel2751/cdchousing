"use client";
import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="group relative overflow-hidden bg-white shadow-sm cursor-pointer"
        style={{
          opacity: 0,
          transform: "translateY(50px)",
          animation: `fadeUp 0.8s ${index * 0.1}s cubic-bezier(0.16,1,0.3,1) forwards`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="overflow-hidden aspect-[4/3]">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
          />
        </div>

        <div className={`absolute top-4 left-4 text-white text-xs px-3 py-1 tracking-widest uppercase ${
          project.status === "completed" ? "bg-green-700/80" :
          project.status === "ongoing" ? "bg-secondary/90" : "bg-primary/80"
        }`}>
          {project.status}
        </div>

        <div className="p-6">
          <span className="text-secondary text-xs tracking-widest uppercase">{project.category}</span>
          <h3 className="font-serif text-xl text-primary mt-1 mb-1">{project.name}</h3>
          <p className="text-primary/50 text-sm mb-4">{project.location}</p>
          <p className="text-primary/60 text-sm leading-relaxed line-clamp-2">{project.description}</p>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-primary/10">
            <span className="text-xs text-primary/40">{project.area}</span>
            <span className="text-xs text-primary/40">{project.units}</span>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-primary/95 flex flex-col justify-center items-center p-8 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <span className="text-secondary text-xs tracking-widest uppercase mb-4">{project.category}</span>
          <h3 className="font-serif text-2xl text-white text-center mb-4">{project.name}</h3>
          <p className="text-white/60 text-sm text-center leading-relaxed mb-8">{project.description}</p>
          <div className="flex items-center gap-3 text-secondary text-xs tracking-widest uppercase">
            <span>Explore Project</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}