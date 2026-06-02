"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FilterButtons from "./FilterButtons";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <FilterButtons activeFilter={activeFilter} onFilter={setActiveFilter} />

      {filtered.length === 0 ? (
        <p className="text-center text-primary/40 text-sm tracking-widest uppercase py-20">
          No projects in this category yet.
        </p>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeFilter}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}