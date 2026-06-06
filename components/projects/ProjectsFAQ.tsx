"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What makes CDC Housing's planning 'European standard'?",
    a: "Our layouts, light, ventilation, and shared-space planning follow European residential principles — prioritising livability, efficiency, and long-term comfort over maximised plot coverage.",
  },
  {
    q: "Where are your projects located?",
    a: "CDC Housing develops residential and commercial projects across Bangladesh, with a current focus on Dhaka and its key growth corridors.",
  },
  {
    q: "Do you offer bespoke architectural design?",
    a: "Yes. Every development is designed bespoke in collaboration with our design partners, rather than reusing a standard template across sites.",
  },
  {
    q: "What is the process for taking possession of my unit?",
    a: "On completion you'll receive a handover schedule, a final walkthrough and snagging inspection, full documentation, and the keys once any noted items are resolved.",
  },
  {
    q: "Will my unit be identical to the show unit?",
    a: "Layout and specifications match what's contracted. Show-unit styling and loose furnishings are for presentation; the delivered finish follows your agreed specification.",
  },
  {
    q: "What are maintenance and service fees?",
    a: "These cover upkeep of shared facilities, security, and common-area services. The exact amount depends on the project and unit size and is shared before purchase.",
  },
  {
    q: "Can I rent out my property after handover?",
    a: "Yes. Once handover and registration are complete, the property is yours to occupy, rent, or resell.",
  },
  {
    q: "What documents are required for registration?",
    a: "Typically your identification, the sale agreement, and payment records. Our team guides you through the full list and the registration steps.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. A dedicated team handles post-handover queries, defect resolution within the warranty period, and ongoing community management.",
  },
  {
    q: "How can I schedule a site visit?",
    a: "Use the enquiry form below or contact our Dhaka office, and we'll arrange a visit to the project of your choice.",
  },
];

export default function ProjectsFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-12 md:mb-16">
          FAQs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-primary/15 self-start w-full">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs md:text-sm tracking-wide uppercase text-primary/80">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border border-primary/30 flex items-center justify-center text-primary/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 15l6-6 6 6" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "320px" : "0" }}
                >
                  <p className="text-primary/55 text-sm leading-relaxed px-5 pb-5">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}