"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import NrbFaq from "@/components/nrb/NrbFaq";

const services = [
  { num: "01", title: "Custom Home Build", desc: "Design and build your luxury house or apartment from the ground up on your own plot in Bangladesh — fully managed remotely.", tag: "Most Popular" },
  { num: "02", title: "Joint Venture Development", desc: "Have land in Bangladesh? Partner with CDC Housing to develop it into a high-value residential project and receive your agreed allocation.", tag: "Great for landowners" },
  { num: "03", title: "Buy a Ready Apartment", desc: "Browse and purchase from our completed and upcoming residential developments — fully finished and ready for occupation or rental.", tag: "Fast option" },
  { num: "04", title: "Property Management", desc: "Already own a property in Bangladesh? We can maintain, secure, and manage it on your behalf while you remain abroad.", tag: "Peace of mind" },
  { num: "05", title: "Interior & Fit-Out", desc: "Full interior design and fit-out service to turn your new apartment or home into a ready, beautiful living space — to your exact taste.", tag: "Turnkey" },
  { num: "06", title: "Legal & Documentation", desc: "Comprehensive legal support including title deed verification, registration, power of attorney, and NRB-specific documentation guidance.", tag: "Essential" },
];

const steps = [
  { n: "1", title: "Free Consultation", desc: "Book a call with your dedicated NRB advisor to share your vision, budget, and location preferences." },
  { n: "2", title: "Design & Planning", desc: "Our architects create bespoke 3D designs and structural plans aligned with your requirements." },
  { n: "3", title: "Legal & Agreement", desc: "Full legal documentation, title verification, and construction agreement signed securely." },
  { n: "4", title: "Build & Updates", desc: "Construction begins with regular video updates, photo reports, and milestone confirmations." },
  { n: "5", title: "Handover", desc: "Your completed home is handed over — whether you collect the keys in person or through a trusted representative." },
];

const regions = [
  { name: "United Kingdom", desc: "Our largest NRB community. Dedicated UK-based coordinator available in your time zone.", cities: "London · Birmingham · Manchester · Leeds" },
  { name: "United Arab Emirates", desc: "Serving the large Bangladeshi community across Dubai, Abu Dhabi, and Sharjah.", cities: "Dubai · Abu Dhabi · Sharjah" },
  { name: "Saudi Arabia", desc: "Supporting NRBs across the Kingdom with dedicated Arabic and Bangla-speaking support.", cities: "Riyadh · Jeddah · Dammam" },
  { name: "Europe", desc: "Italy, Germany, France, Portugal and beyond — serving all European NRBs.", cities: "Italy · Germany · France · Portugal" },
];

const whyCards = [
  { title: "European Standards", desc: "Materials, structural planning, and finishing quality aligned with European benchmarks." },
  { title: "Full Remote Access", desc: "Regular video updates, progress reports, and live site access — managed from wherever you are." },
  { title: "Legal Protection", desc: "Transparent documentation, legal compliance, and secure title registration fully handled." },
  { title: "Luxury Design", desc: "Bespoke architectural design tailored to your vision — modern, elegant, and built to last." },
];

const trust = [
  { strong: "European Standard", rest: "construction quality" },
  { strong: "Transparent", rest: "payments & legal support" },
  { strong: "Full remote", rest: "project management" },
  { strong: "Dedicated", rest: "NRB relationship manager" },
];

export default function NrbPage() {
  const rotatingPlaces = ["United Kingdom", "Middle East", "Europe", "America", "Spain", "Italy", "Saudi Arabia", "UAE"];
  const [placeIndex, setPlaceIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPlaceIndex((i) => (i + 1) % rotatingPlaces.length);
        setVisible(true);
      }, 450);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-6 overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Area-View-CDC-Housing.jpg"
            alt="Luxury home in Bangladesh"
            className="w-full h-full object-cover"
          />
          {/* dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-primary/10" />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <AnimatedSection animation="fade-right">
            <div className="inline-flex items-center gap-2.5 border border-secondary/30 bg-secondary/10 px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-secondary text-[11px] font-semibold tracking-widest uppercase">
                Non-Resident Bangladeshi Services
              </span>
            </div>
            <h1 className="font-serif text-white leading-[1.1] mb-6" style={{ fontSize: "clamp(2.6rem, 5vw, 4.25rem)" }}>
              Luxury living in Bangladesh<br />
              <span className="text-secondary">crafted to your vision</span><br />
              from{" "}
              <span
                className="text-secondary inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {rotatingPlaces[placeIndex]}.
              </span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
              You have built your life abroad. Now build your legacy at home. CDC Housing helps NRBs
              across Europe and the Middle East develop luxury apartments, flats, and houses in
              Bangladesh — seamlessly, securely, and to European standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-secondary text-white text-sm tracking-widest px-8 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500">
                Start Your Journey
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center border border-white/30 text-white text-sm tracking-widest px-8 py-4 rounded-full hover:border-secondary hover:text-secondary transition-all duration-500">
                View Projects
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="font-serif text-4xl text-secondary mb-1">25+</h3>
                <p className="text-white/65 text-sm">Completed projects delivered to proud homeowners</p>
              </div>
              <div className="bg-primary/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="font-serif text-4xl text-secondary mb-1">100%</h3>
                <p className="text-white/65 text-sm">Remote management — build without being in Bangladesh</p>
              </div>
              <div className="bg-primary/40 backdrop-blur-md border border-white/20 rounded-xl p-6 col-span-2">
                <p className="text-white/55 text-xs uppercase tracking-widest mb-3">Serving NRBs in</p>
                <div className="flex flex-wrap gap-2.5">
                  {["United Kingdom", "UAE", "Saudi Arabia", "Italy", "Germany", "+ more"].map((c) => (
                    <span key={c} className="bg-white/15 border border-white/20 px-3.5 py-2 rounded-full text-white/80 text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CDC */}
      <section className="bg-light py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection animation="fade-right">
            <p className="text-secondary text-xs tracking-widest uppercase mb-3.5">Why CDC Housing</p>
            <h2 className="font-serif text-primary leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Design &amp; Build your dream home in Bangladesh with <span className="text-secondary">CDC Housing</span>
            </h2>
            <div className="w-12 h-0.5 bg-secondary mb-6" />
            <p className="text-primary/60 text-base leading-relaxed mb-4">
              Being abroad shouldn&apos;t mean your dream of owning a beautiful home in Bangladesh has to
              wait. CDC Housing was founded with a European planning mindset — bringing the same standards
              of quality, transparency, and accountability to Bangladesh that you expect in your life abroad.
            </p>
            <p className="text-primary/60 text-base leading-relaxed">
              We understand the unique challenges NRBs face — distance, trust, legal complexity, and
              communication barriers. Our dedicated NRB programme is designed to eliminate every one of them.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={150}>
            <div className="relative w-full overflow-hidden rounded-xl shadow-xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BYP6AfIQgx4?autoplay=1&mute=1&loop=1&playlist=BYP6AfIQgx4&controls=0&modestbranding=1&rel=0"
                title="CDC Housing"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-primary py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div>
                <p className="text-secondary text-xs tracking-widest uppercase mb-3.5">Our NRB Services</p>
                <h2 className="font-serif text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                  Complete property solutions<br />
                  <span className="text-secondary">from land to handover.</span>
                </h2>
                <div className="w-12 h-0.5 bg-secondary mt-5" />
              </div>
              <p className="text-white/60 text-base leading-relaxed max-w-md">
                Whether you want to build on your own land, buy a flat, or develop a full residential
                project — we manage every step so you don&apos;t have to.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-xl overflow-hidden">
            {services.map((s, i) => (
              <AnimatedSection key={s.num} animation="fade-up" delay={i * 60}>
                <div className="group bg-[#1a1a1a] hover:bg-secondary/10 h-full p-9 transition-colors duration-300">
                  <div className="font-serif text-5xl text-secondary/25 leading-none mb-5">{s.num}</div>
                  <h3 className="font-serif text-xl text-white mb-3">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-secondary text-[11px] tracking-widest uppercase font-medium">{s.tag}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-accent py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center">
            <p className="text-secondary text-xs tracking-widest uppercase mb-3.5">How It Works</p>
            <h2 className="font-serif text-primary leading-tight max-w-xl mx-auto mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Your journey from <span className="text-secondary">abroad to home.</span>
            </h2>
            <div className="w-12 h-0.5 bg-secondary mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 mt-14">
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} animation="fade-up" delay={i * 80} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-secondary flex items-center justify-center font-serif text-xl text-secondary mb-5">
                  {s.n}
                </div>
                <h4 className="font-serif text-base text-primary mb-2">{s.title}</h4>
                <p className="text-primary/55 text-xs leading-relaxed">{s.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="bg-light py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-widest uppercase mb-3.5">Where We Serve</p>
            <h2 className="font-serif text-primary leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Serving NRBs <span className="text-secondary">around the world</span>
            </h2>
            <div className="w-12 h-0.5 bg-secondary mt-5 mb-5" />
            <p className="text-primary/60 text-base leading-relaxed max-w-xl">
              No matter where you are in the world, our NRB team is just a call or WhatsApp away.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {regions.map((r, i) => (
              <AnimatedSection key={r.name} animation="fade-up" delay={i * 80}>
                <div className="group border border-primary/10 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-secondary transition-all duration-300 h-full">
                  <div className="bg-accent px-6 py-5">
                    <h3 className="font-serif text-xl text-primary">{r.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-primary/55 text-sm leading-relaxed">{r.desc}</p>
                    <p className="text-secondary text-[11px] font-medium tracking-widest uppercase mt-3">{r.cities}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-accent py-20 md:py-28 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection animation="fade-right">
            <p className="text-secondary text-xs tracking-widest uppercase mb-3.5">Common Questions</p>
            <h2 className="font-serif text-primary leading-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
              Everything you need<br />to <span className="text-secondary">know.</span>
            </h2>
            <div className="w-12 h-0.5 bg-secondary mb-8" />
            <NrbFaq />
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={150} className="lg:sticky lg:top-28">
            <div className="bg-primary rounded-xl p-10 md:p-12">
              <h3 className="font-serif text-3xl text-white leading-snug mb-4">
                Ready to build your home <span className="text-secondary">in Bangladesh?</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-7">
                Speak with our dedicated NRB advisor today. We&apos;ll answer all your questions and guide
                you through every option available to you.
              </p>
              <div className="space-y-3.5 mb-8">
                <a href="tel:+8801772206985" className="block text-white/80 text-sm hover:text-secondary transition-colors">+880 1772-206985</a>
                <a href="https://wa.me/8801716776543" target="_blank" rel="noreferrer" className="block text-white/80 text-sm hover:text-secondary transition-colors">WhatsApp: +880 1716-776543</a>
                <a href="mailto:contact@cdchousing.com" className="block text-white/80 text-sm hover:text-secondary transition-colors">contact@cdchousing.com</a>
              </div>
              <Link href="/contact" className="block w-full text-center bg-secondary text-white text-sm tracking-widest px-8 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500">
                Book a Free Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary py-20 md:py-28 px-5 md:px-6 text-center">
        <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
          <h2 className="font-serif text-white leading-tight mb-4" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
            Your dream home in Bangladesh<br />
            starts with <span className="text-secondary">one conversation.</span>
          </h2>
          <p className="text-white/60 text-base mb-10">
            Join hundreds of NRBs who have trusted CDC Housing to build their legacy back home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-secondary text-white text-sm tracking-widest px-8 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500">
              Get Started Today
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center border border-white/30 text-white text-sm tracking-widest px-8 py-4 rounded-full hover:border-secondary hover:text-secondary transition-all duration-500">
              View Our Projects
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}