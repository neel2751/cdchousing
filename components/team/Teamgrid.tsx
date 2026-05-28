"use client";
import { teamMembers } from "@/data/team";
import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <section className="py-24 px-6 bg-light">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Our People</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
              The Minds Behind<br />
              <span className="italic text-secondary">CDC Housing</span>
            </h2>
            <p className="text-primary/50 text-sm leading-relaxed max-w-sm md:text-right">
              A team of passionate professionals united by a single vision — to craft living
              spaces that stand the test of time.
            </p>
          </div>
          <div className="w-full h-px bg-primary/10 mt-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}