import LandownerForm from "@/components/landowner/LandownerForm";
import BlockRevealTitle from "@/components/landowner/BlockRevealTitle";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Landowner" };

const reasons = [
  {
    title: "Faster Execution of Projects",
    points: [
      "Proper planning & usage of the latest technologies",
      "Experienced, proven & skilled construction team",
      "Handover before committed deadlines",
    ],
  },
  {
    title: "Elegant Design",
    points: ["Contemporary vernacular architecture", "Quality space design"],
  },
  {
    title: "Living Standard Upgradation",
    points: ["Sumptuous amenities", "Benchmark materials"],
  },
  {
    title: "Value for Money",
    points: [
      "Luxury at a reasonable worth",
      "Across the most promising locations",
      "Property value appreciates over time",
    ],
  },
];

const assurances = [
  "Total Quality Control",
  "Unparalleled Customer Service",
  "Dedicated after-sales service & facility management",
];

export default function LandownerPage() {
  return (
    <>
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800"
          alt="CDC Housing development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-6 pb-16 md:pb-20">
          <BlockRevealTitle
            text="LANDOWNER"
            coverColor="#ffffff"
            textColor="#ffffff"
            className="font-serif text-5xl md:text-7xl tracking-tight"
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <BlockRevealTitle
              text="LANDOWNERS"
              coverColor="#1f2d4a"
              textColor="#1f2d4a"
              className="font-serif text-3xl md:text-5xl tracking-tight mb-8"
            />
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-primary/60 leading-relaxed mb-6">
                CDC Housing brings European standard planning with bespoke architectural design to
                develop high quality residential and commercial spaces in Bangladesh. We partner with
                landowners to transform plots into thoughtfully designed developments built for
                quality, comfort and long term value.
              </p>
              <p className="text-primary/60 leading-relaxed">
                When you partner with us, your land becomes the foundation of a development crafted to
                international standards — and a long-term asset that appreciates over time.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {assurances.map((a) => (
                  <span
                    key={a}
                    className="border border-primary/20 text-primary/60 text-xs tracking-widest uppercase px-4 py-2 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => (
                <div key={r.title} className="bg-accent p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-secondary text-xl">0{i + 1}</span>
                    <h3 className="font-serif text-lg text-primary leading-snug">{r.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-primary/60 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-accent">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center mb-14">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Get Started</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Submit Your Land Details</h2>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
            <p className="text-primary/60 mt-6 leading-relaxed">
              Share a few details about your land and our team will get in touch to discuss a
              partnership tailored to your plot.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <AnimatedSection animation="fade-up" delay={100}>
            <LandownerForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}