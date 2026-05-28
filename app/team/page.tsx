import { teamMembers } from "@/data/team";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-10 md:pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary uppercase tracking-[0.4em] mb-3"
              style={{ fontSize: "clamp(0.6rem, 2vw, 0.75rem)" }}>
              People
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}>
              Our Team
            </h1>
            <div className="w-12 md:w-16 h-px bg-secondary mt-4 md:mt-6" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.id} animation="fade-up" delay={i * 60}>
              <div className="group">

                <div className="overflow-hidden mb-5 md:mb-6" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-primary" style={{ fontSize: "clamp(1.1rem, 3vw, 1.25rem)" }}>
                    {member.name}
                  </h3>
                  <p className="text-secondary uppercase tracking-widest mt-1"
                    style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)" }}>
                    {member.title}
                  </p>
                  <p className="text-primary/50 leading-relaxed mt-2 md:mt-3 text-sm">
                    {member.bio}
                  </p>
                  <div className="w-6 md:w-8 h-px bg-secondary mt-3 md:mt-4 transition-all duration-500 group-hover:w-12 md:group-hover:w-16" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}