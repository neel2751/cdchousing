"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Can I build a property in Bangladesh while living abroad?",
    a: "Absolutely. CDC Housing is designed specifically for NRBs. We handle everything on the ground in Bangladesh — from legal paperwork to construction management — while keeping you fully informed through regular updates.",
  },
  {
    q: "How do I ensure my investment is legally protected?",
    a: "We provide full legal support including land title verification, registration documents, power of attorney arrangements, and transparent contractual agreements. All documentation is provided in both Bengali and English.",
  },
  {
    q: "How will I monitor the progress of my build?",
    a: "You receive regular progress reports, construction photos, and video walkthroughs at every key milestone. Your dedicated project manager is always reachable via WhatsApp, phone, or video call.",
  },
  {
    q: "Can I send money from abroad for construction payments?",
    a: "Yes. We guide you through the approved remittance channels compliant with Bangladesh Bank regulations. All payments are milestone-based and transparently documented with receipts.",
  },
  {
    q: "What if I already own land in Bangladesh?",
    a: "Perfect — our Joint Venture Development programme is ideal for you. We develop your land into a quality residential project and allocate agreed apartments or floors back to you upon completion.",
  },
];

export default function NrbFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-primary/10">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex justify-between items-center gap-4 py-5 text-left"
            >
              <h4 className="font-display text-lg text-primary leading-snug">{f.q}</h4>
              <span
                className={`w-7 h-7 shrink-0 rounded-full border flex items-center justify-center text-base transition-all duration-300 ${
                  isOpen
                    ? "bg-secondary text-white border-secondary"
                    : "border-primary/20 text-secondary"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "240px" : "0px" }}
            >
              <p className="text-primary/60 text-sm leading-relaxed pb-5">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}