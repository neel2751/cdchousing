"use client";
import { useState } from "react";

export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/naim@cdc.construction"
      method="POST"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="hidden" name="submit_through" value="contactus" />
        <input
          type="hidden"
          name="_subject"
          value="CDC Housing website New submission!"
        />
        {/* <input
          type="hidden"
          name="_blacklist"
          value="spammy pattern, banned term, phrase"
        /> */}
        {/* <input type="text" name="_honey" style={{ display: "none" }} /> */}
        <input type="hidden" name="_template" value="table" />
        {/* <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thanks"
        /> */}
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
            placeholder="Email Address"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
            Interest
          </label>
          <select
            name="subject"
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
        <label className="block text-xs tracking-widest uppercase text-primary/50 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border-b border-primary/20 pb-3 text-primary placeholder-primary/30 bg-transparent focus:outline-none focus:border-secondary transition-colors duration-300 text-sm resize-none"
          placeholder="Tell us about your dream home..."
        />
      </div>

      <button
        type="submit"
        className="group flex items-center gap-4 bg-primary text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-secondary transition-all duration-500 disabled:opacity-60"
      >
        Submit
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
