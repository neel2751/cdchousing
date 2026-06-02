"use client";
import { useState } from "react";

const features = ["Lakeside", "Corner Plot", "Park View", "Main Road", "Others"];

export default function LandownerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (f: string) =>
    setSelectedFeatures((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-secondary text-2xl">✓</span>
        </div>
        <h3 className="font-serif text-2xl text-primary mb-3">Thank you</h3>
        <p className="text-primary/60 max-w-md mx-auto">
          Your land details have been received. Our team will reach out to you shortly to discuss the
          next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 space-y-12">

      <div>
        <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-8">Land Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-field">
            <label className="form-label">Category</label>
            <select className="form-select" required defaultValue="">
              <option value="" disabled>Select category</option>
              <option>Freehold</option>
              <option>Leasehold</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Land Size</label>
            <input type="text" className="form-input" placeholder="e.g. 5 katha" />
          </div>
          <div className="form-field">
            <label className="form-label">Location</label>
            <input type="text" className="form-input" placeholder="Area / district" required />
          </div>
          <div className="form-field">
            <label className="form-label">Road Width</label>
            <input type="text" className="form-input" placeholder="e.g. 20 ft" />
          </div>
        </div>

        <div className="mt-8">
          <label className="form-label">Attractive Features (if any)</label>
          <div className="flex flex-wrap gap-3 mt-3">
            {features.map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => toggleFeature(f)}
                className={`text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedFeatures.includes(f)
                    ? "bg-secondary text-white border-secondary"
                    : "border-primary/20 text-primary/60 hover:border-secondary hover:text-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10 pt-12">
        <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-8">Landowner Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-field">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-input" placeholder="Your phone number" required />
          </div>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="Your email" />
          </div>
          <div className="form-field">
            <label className="form-label">Address</label>
            <input type="text" className="form-input" placeholder="Your address" />
          </div>
          <div className="form-field md:col-span-2">
            <label className="form-label">Message</label>
            <textarea rows={3} className="form-textarea" placeholder="Anything else we should know?" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="group flex items-center justify-center gap-3 w-full sm:w-auto border border-secondary text-secondary text-xs tracking-widest uppercase px-10 py-4 rounded-full hover:bg-secondary hover:text-white transition-all duration-500"
      >
        Submit Details
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}