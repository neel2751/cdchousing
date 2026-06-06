"use client";
import { pressReleases } from "@/data/press";
import PressCard from "./PressCard";

export default function PressGrid() {
  const filtered = pressReleases.filter((p) => !p.featured);

  return (
    <div>
      {filtered.length === 0 ? (
        <p className="text-center text-primary/40 text-sm tracking-widest uppercase py-20">
          No press releases yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <PressCard key={post.id} post={post} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}