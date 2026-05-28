"use client";
import { useState } from "react";
import { TeamMember } from "@/data/team";

interface Props {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
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
      <div className="overflow-hidden aspect-[3/4]">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-110"
        />
      </div>

      <div className="absolute top-4 right-4 bg-secondary/90 text-white text-xs px-3 py-1 tracking-widest uppercase">
        {member.experience}
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-primary mb-1">{member.name}</h3>
        <span className="text-secondary text-xs tracking-widest uppercase">{member.title}</span>
        <div className="w-8 h-px bg-secondary mt-4" />
      </div>

      <div
        className="absolute inset-0 bg-primary/96 flex flex-col justify-center items-center p-8 transition-all duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <span className="text-secondary text-xs tracking-widest uppercase mb-3">{member.title}</span>
        <h3 className="font-serif text-2xl text-white text-center mb-4">{member.name}</h3>
        <p className="text-white/60 text-sm text-center leading-relaxed mb-8">{member.bio}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-secondary text-xs tracking-widest uppercase border border-secondary/40 px-5 py-2 hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <span>LinkedIn</span>
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
}