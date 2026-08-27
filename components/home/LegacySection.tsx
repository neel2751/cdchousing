import AnimatedSection from "@/components/shared/AnimatedSection";
import Img from "@/components/shared/Img";

export default function LegacySection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <AnimatedSection animation="fade-right">
              <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Our Legacy</p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={100}>
              <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-6">
                Three Decades of
                <span className="italic text-secondary"> Trust</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="w-16 h-px bg-secondary mb-8" />
              <p className="text-primary/60 leading-relaxed mb-6">
                Founded in 1995, CDC Housing has been at the forefront of Gujarat's real
                estate transformation. With over 50 completed projects and 10,000+ happy
                families, our legacy is built on trust, quality, and innovation.
              </p>
              <p className="text-primary/60 leading-relaxed">
                Every project we undertake carries the promise of enduring craftsmanship —
                structures that don't just house lives but elevate them. From affordable
                homes to ultra-luxury residences, we build for every dream.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={300}>
              <a
                href="/about"
                className="inline-flex items-center gap-3 text-sm text-primary tracking-widest uppercase mt-10 group"
              >
                <span className="w-8 h-px bg-primary transition-all duration-500 group-hover:w-16 group-hover:bg-secondary" />
                <span className="group-hover:text-secondary transition-colors duration-300">
                  Read Our Story
                </span>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" delay={150} className="relative">
            <div className="relative overflow-hidden aspect-4/5">
              <Img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800"
                alt="CDC Housing Legacy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 border border-secondary/20" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-secondary/30 -z-10" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-primary p-8 shadow-2xl">
              <div className="font-serif text-4xl text-secondary font-bold">30+</div>
              <div className="text-white/60 text-xs tracking-widest uppercase mt-1">Years Experience</div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}