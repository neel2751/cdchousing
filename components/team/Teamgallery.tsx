"use client";
import { useEffect, useRef, useState } from "react";
import { teamMembers } from "@/data/team";
import Img from "@/components/shared/Img";

export default function TeamGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current.offsetLeft ?? 0);
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };
  const onMouseUp = () => setDragging(false);

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">The Team</p>
        <h2 className="font-serif text-4xl text-white">
          Drag to <span className="italic text-secondary">Explore</span>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto px-6 select-none scrollbar-hide"
        style={{
          cursor: dragging ? "grabbing" : "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {[...teamMembers, ...teamMembers].map((member, i) => (
          <div
            key={`${member.id}-${i}`}
            className="relative flex-shrink-0 overflow-hidden group"
            style={{ width: "280px", height: "380px" }}
          >
            <Img
              src={member.photo}
              alt={member.name}
              sizes="(max-width: 768px) 70vw, 30vw"
              className="w-full h-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-secondary text-xs tracking-widest uppercase block mb-1">
                {member.title}
              </span>
              <h4 className="font-serif text-lg text-white">{member.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 px-6 mt-8">
        <div className="w-8 h-px bg-white/20" />
        <span className="text-white/30 text-xs tracking-widest uppercase">Drag to explore</span>
        <span className="text-white/20 text-sm">→</span>
      </div>
    </section>
  );
}