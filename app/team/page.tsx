import { teamMembers } from "@/data/team";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">People</p>
            <h1 className="font-serif text-6xl text-white">Our Team</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.id} animation="fade-up" delay={i * 80}>
              <div className="group">
                {/* Photo */}
                <div className="overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-108"
                    style={{ transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                  />
                </div>
                {/* Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl text-primary">{member.name}</h3>
                    <p className="text-secondary text-xs tracking-widest uppercase mt-1">
                      {member.title}
                    </p>
                    <p className="text-primary/50 text-sm mt-3 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="w-8 h-px bg-secondary mt-4 transition-all duration-500 group-hover:w-16" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}