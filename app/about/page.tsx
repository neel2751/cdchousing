import AnimatedSection from "@/components/shared/AnimatedSection";
import StatisticsSection from "@/components/about/StatisticsSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { title: "Integrity", desc: "Every promise made is a promise kept. Zero compromise on quality or delivery timelines." },
  { title: "Innovation", desc: "From smart home integration to sustainable design, we lead with technology." },
  { title: "Excellence", desc: "Award-winning design and construction quality across every project category." },
  { title: "Community", desc: "Building not just homes but thriving communities with amenities for all ages." },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
            <h1 className="font-serif text-6xl text-white">About CDC Housing</h1>
            <div className="w-16 h-px bg-secondary mt-6" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection animation="fade-right">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
          <h2 className="font-serif text-4xl text-primary mb-6">
            From One Vision to<br />Gujarat's Trusted Builder
          </h2>
          <div className="w-16 h-px bg-secondary mb-8" />
          <p className="text-primary/60 leading-relaxed mb-4">
            CDC Housing was born in 1995 from a simple but powerful belief — every family
            deserves a beautiful, well-built home. Starting with a single residential project
            in Ahmedabad, we have grown into one of Gujarat's most trusted real estate developers.
          </p>
          <p className="text-primary/60 leading-relaxed">
            Over three decades, we have delivered over 50 projects spanning luxury villas,
            affordable apartments, and landmark commercial complexes across Ahmedabad, Surat,
            Gandhinagar, Vadodara, and Rajkot.
          </p>
        </AnimatedSection>
        <AnimatedSection animation="fade-left" className="relative">
          <div className="overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
              alt="CDC Housing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-secondary p-8">
            <div className="font-serif text-4xl text-white font-bold">1995</div>
            <div className="text-white/70 text-xs tracking-widest uppercase mt-1">Founded</div>
          </div>
        </AnimatedSection>
      </div>

      <div className="bg-accent py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">What Drives Us</p>
            <h2 className="font-serif text-5xl text-primary">Our Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} animation="fade-up" delay={i * 100}>
                <div className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-8 h-px bg-secondary mb-6 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-serif text-2xl text-primary mb-4">{v.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <StatisticsSection />
    </>
  );
}