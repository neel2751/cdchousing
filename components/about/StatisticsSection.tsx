import CounterAnimation from "@/components/shared/CounterAnimation";
import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { target: 50, suffix: "+", label: "Projects Completed" },
  { target: 10000, suffix: "+", label: "Happy Families" },
  { target: 30, suffix: "+", label: "Years Experience" },
  { target: 15, suffix: "+", label: "Awards Won" },
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Numbers Speak</p>
          <h2 className="font-serif text-5xl text-white">Our Impact</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <CounterAnimation
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}