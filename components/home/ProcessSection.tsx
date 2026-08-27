"use client";
import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Img from "@/components/shared/Img";

const steps = [
  {
    number: "01",
    title: "Vision & Planning",
    description: "Every project begins with a thorough understanding of the land, location, and community needs. Our architects and planners craft a vision that balances aesthetics with functionality.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "Our award-winning design team translates vision into detailed architectural plans. Every element — from structural engineering to interior design — is meticulously considered.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    number: "03",
    title: "Construction",
    description: "Using premium materials and advanced construction techniques, our skilled workforce brings designs to life with precision. Quality audits at every stage ensure zero compromise.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
  {
    number: "04",
    title: "Possession & Handover",
    description: "We ensure seamless handover with complete documentation, interior fit-outs as promised, and dedicated after-sales support. Your journey with CDC doesn't end at possession.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  },
];

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-28 bg-accent">
      <div className="max-w-7xl mx-auto px-6">

        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">How We Build</p>
          <h2 className="font-serif text-5xl text-primary">Our Process</h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-right">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-6 border-l-2 transition-all duration-500 ${
                    activeTab === i
                      ? "border-secondary bg-white shadow-sm"
                      : "border-transparent hover:border-secondary/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`font-mono text-xs mt-1 transition-colors duration-300 ${
                      activeTab === i ? "text-secondary" : "text-primary/30"
                    }`}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className={`font-serif text-xl transition-colors duration-300 ${
                        activeTab === i ? "text-primary" : "text-primary/50"
                      }`}>
                        {step.title}
                      </h3>
                      {activeTab === i && (
                        <p
                          className="text-primary/60 text-sm leading-relaxed mt-2"
                          style={{ animation: "fadeUp 0.5s ease forwards" }}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" className="relative overflow-hidden aspect-square">
            {steps.map((step, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: activeTab === i ? 1 : 0,
                  transform: activeTab === i ? "scale(1)" : "scale(1.04)",
                }}
              >
                <Img
                  src={step.image}
                  alt={step.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="font-mono text-secondary text-4xl font-bold opacity-60">
                    {step.number}
                  </span>
                </div>
              </div>
            ))}
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}