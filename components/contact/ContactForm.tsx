"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
            placeholder="Rajesh Mehta"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
            placeholder="rajesh@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">Interest</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border-b border-primary/20 pb-3 text-primary bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
          >
            <option value="">Select Project Type</option>
            <option>Luxury Residential</option>
            <option>Affordable Housing</option>
            <option>Commercial</option>
            <option>General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm resize-none"
          placeholder="Tell us about your dream home..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="group flex items-center gap-4 bg-primary text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-secondary transition-all duration-500 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : status === "success" ? "Message Sent ✓" : "Send Message"}
        {status === "idle" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        )}
      </button>

      {status === "success" && (
        <p className="text-green-700 text-sm">
          Thank you! We'll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}