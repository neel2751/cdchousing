"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import ImageCarousel from "./ImageCarousel";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  project: Project;
}

const galleryTabs = ["All", "Reception", "Exterior", "Interior"];

const nearby = {
  Entertainment: [
    { time: "10 Minutes", place: "City Centre & Shopping Mall" },
    { time: "12 Minutes", place: "Riverside Promenade" },
    { time: "15 Minutes", place: "Central Park & Lake" },
  ],
  Schools: [
    { time: "10 Minutes", place: "International School" },
    { time: "15 Minutes", place: "British Standard School" },
    { time: "15 Minutes", place: "Grammar & Junior College" },
  ],
  Clinics: [
    { time: "10 Minutes", place: "General Hospital" },
    { time: "15 Minutes", place: "Specialist Medical Centre" },
    { time: "15 Minutes", place: "Diagnostic Clinic" },
  ],
};

const faqs = [
  { q: "What is a snagging inspection?", a: "A pre-handover review where any defects or unfinished items are identified and logged for the developer to resolve before you take possession." },
  { q: "What are maintenance and service fees?", a: "Recurring charges that cover upkeep of shared facilities, security, and common-area services. The amount depends on the project and unit size." },
  { q: "Will my unit be identical to the show unit?", a: "Layout and specifications match what's contracted. Show-unit styling and loose furnishings are for presentation only." },
  { q: "Can I make changes to my property or unit?", a: "Approved modifications are possible after handover, subject to building guidelines and any required permissions." },
  { q: "Can I rent out my property after handover?", a: "Yes. Once handover and registration are complete, the property is yours to occupy, rent, or resell." },
  { q: "What is the process for taking possession of my unit?", a: "You'll receive a handover schedule, a final walkthrough and snagging inspection, full documentation, and the keys once noted items are resolved." },
];

export default function ProjectDetailView({ project }: Props) {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [galleryTab, setGalleryTab] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiry: "General Inquiry" });

  const amenitiesRef = useRef<HTMLDivElement>(null);

  const openCarousel = (index: number) => {
    setStartIndex(index);
    setCarouselOpen(true);
  };

  const scrollAmenities = (dir: number) => {
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  const field =
    "w-full bg-transparent border-b border-primary/20 pb-2 text-primary outline-none focus:border-secondary transition-colors text-sm";

  return (
    <>
      {/* TITLE HEADER */}
      <div className="bg-white pt-28 md:pt-36 pb-8 md:pb-10">
        <div className="max-w-6xl mx-auto px-5 md:px-6 text-left">
          <p className="text-primary/40 text-xs tracking-widest uppercase mb-4">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="mx-1.5">/</span>
            <Link href="/projects" className="hover:text-secondary transition-colors">Projects</Link>
            <span className="mx-1.5">/</span>
            <span>{project.name}</span>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-primary leading-tight">{project.name}</h1>
          <p className="text-primary/60 text-sm mt-3 inline-flex items-center gap-1.5">
            <span className="text-secondary">📍</span>{project.location}
          </p>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9" }}>
        <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover" />
      </div>

      {/* PROJECT OVERVIEW */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="flex items-center justify-between gap-6 mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Project Overview</h2>
            {/* <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-3 border border-primary text-primary text-xs tracking-widest uppercase px-6 py-3 hover:bg-primary hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              Download Brochure →
            </Link> */}
          </div>
          <p className="text-primary/50 text-sm mb-5">{project.name} by CDC Housing</p>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-5">
            {project.description}
          </p>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden cursor-pointer group relative"
                style={{ aspectRatio: "16/11" }}
                onClick={() => openCarousel(i)}
              >
                <img
                  src={img}
                  alt={`${project.name} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM AMENITIES */}
      <section className="bg-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Premium Amenities</h2>
            <div className="hidden sm:flex gap-3">
              <button
                onClick={() => scrollAmenities(-1)}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-primary/20 text-primary/60 hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={() => scrollAmenities(1)}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-primary/20 text-primary/60 hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={amenitiesRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {project.features.map((feature, i) => (
              <div
                key={feature}
                className="relative shrink-0 overflow-hidden group"
                style={{ width: "260px", aspectRatio: "3/4" }}
              >
                <img
                  src={project.images[i % project.images.length]}
                  alt={feature}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 text-white text-xs tracking-widest uppercase">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT LOCATION */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="flex items-center justify-between gap-6 mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Project Location</h2>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(project.location)}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-3 border border-primary text-primary text-xs tracking-widest px-6 py-3 hover:bg-primary hover:text-white transition-all duration-500 whitespace-nowrap"
            >
              See Location On Maps →
            </a>
          </div>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-12 max-w-3xl">
            Perfectly positioned in {project.location}, {project.name} offers easy access to the
            city's key destinations — combining urban convenience with calm, comfortable living.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-primary/10 pt-10">
            {Object.entries(nearby).map(([cat, items]) => (
              <div key={cat}>
                <p className="text-primary/40 text-xs tracking-widest uppercase mb-6">{cat}</p>
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.place}>
                      <p className="text-primary text-sm font-medium tracking-wide">{item.time}</p>
                      <p className="text-primary/60 text-sm mt-0.5">{item.place}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden border border-primary/10" style={{ aspectRatio: "21/9" }}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(project.location)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${project.name} location`}
            />
          </div>
        </div>
      </section>

      {/* TWO TEXT BLOCKS */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <p className="text-primary/50 text-sm mb-3">A Thoughtfully Curated Residential Experience</p>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed">
            Every element of {project.name} has been carefully considered to support balanced daily
            living. Residences blend wellness-oriented amenities with efficient layouts and refined
            interiors — a composed environment focused on calm design and quiet sophistication.
          </p>
        </div>
      </section>
      <section className="bg-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <p className="text-primary/50 text-sm mb-3">A Long-Term Residential and Investment Offering</p>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed">
            {project.name} forms part of CDC Housing's growing portfolio of well-positioned
            developments. For homeowners it offers a high-quality living experience in a prime
            location; for investors, a future-ready asset backed by design integrity and lasting appeal.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-12">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-primary/15 self-start w-full">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs md:text-sm tracking-wide uppercase text-primary/80">{item.q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full border border-primary/30 flex items-center justify-center text-primary/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 15l6-6 6 6" />
                      </svg>
                    </span>
                  </button>
                  <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isOpen ? "320px" : "0" }}>
                    <p className="text-primary/55 text-sm leading-relaxed px-5 pb-5">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <div className="bg-accent/60 p-8 md:p-14">
            <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-10">
              Get In Touch With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-xs tracking-widest uppercase text-primary/40 mb-2">Your Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-primary/40 mb-2">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-primary/40 mb-2">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+880 XXXXXXXXXX" className={`${field} placeholder:text-primary/30`} />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-primary/40 mb-2">Inquiry Type</label>
                <select value={form.inquiry} onChange={(e) => setForm({ ...form, inquiry: e.target.value })} className={`${field} cursor-pointer`}>
                  <option>General Inquiry</option>
                  <option>Buying a Property</option>
                  <option>Site Visit</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => console.log("Enquiry:", form, project.name)}
                className="inline-flex items-center gap-3 border border-primary text-primary text-xs tracking-widest uppercase px-10 py-4 hover:bg-primary hover:text-white transition-all duration-500"
              >
                Submit →
              </button>
            </div>
          </div>
        </div>
      </section>

      {carouselOpen && (
        <ImageCarousel
          images={project.images}
          startIndex={startIndex}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </>
  );
}