"use client";
import { useState } from "react";

export default function ProjectsContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "General Inquiry",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = () => {
    console.log("Enquiry:", form);
  };

  const field =
    "w-full bg-transparent border-b border-primary/20 pb-2 text-primary outline-none focus:border-secondary transition-colors";
  const label =
    "block text-xs tracking-widest uppercase text-primary/40 mb-2";

  return (
    <section className="py-20 md:py-28 bg-light">
      <div className="max-w-3xl mx-auto px-5 md:px-6">
        <div className="bg-accent/60 p-8 md:p-14">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-10">
            Get In Touch With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label className={label}>Your Name</label>
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label className={label}>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={field}
              />
            </div>
            <div>
              <label className={label}>Phone</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+880 XXXXXXXXXX"
                className={`${field} placeholder:text-primary/30`}
              />
            </div>
            <div>
              <label className={label}>Inquiry Type</label>
              <select
                value={form.inquiry}
                onChange={(e) => update("inquiry", e.target.value)}
                className={`${field} cursor-pointer`}
              >
                <option>General Inquiry</option>
                <option>Buying a Property</option>
                <option>Landowner / Joint Venture</option>
                <option>Careers</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={submit}
              className="inline-flex items-center gap-3 border border-primary text-primary text-xs tracking-widest uppercase px-10 py-4 hover:bg-primary hover:text-white transition-all duration-500"
            >
              Submit →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}