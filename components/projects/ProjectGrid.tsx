"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FilterButtons from "./FilterButtons";

const PER_PAGE = 6;

export default function ProjectGrid() {
  const [filter, setFilter] = useState<"ongoing" | "completed">("ongoing");
  const [page, setPage] = useState(1);

  const filtered = projects.filter((p) =>
    filter === "completed" ? p.status === "completed" : p.status !== "completed"
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const changeFilter = (f: "ongoing" | "completed") => {
    setFilter(f);
    setPage(1);
  };

  return (
    <div>
      <FilterButtons active={filter} onChange={changeFilter} />

      <div
        key={filter + page}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 mt-10 md:mt-12"
      >
        {pageItems.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
            className="w-8 h-8 flex items-center justify-center border border-primary/20 text-primary/60 text-sm disabled:opacity-30 hover:border-secondary hover:text-secondary transition-colors"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 flex items-center justify-center border text-sm transition-colors ${
                p === page
                  ? "bg-primary text-white border-primary"
                  : "border-primary/20 text-primary/60 hover:border-secondary hover:text-secondary"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
            className="w-8 h-8 flex items-center justify-center border border-primary/20 text-primary/60 text-sm disabled:opacity-30 hover:border-secondary hover:text-secondary transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}