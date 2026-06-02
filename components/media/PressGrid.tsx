"use client";
import { useState, useMemo } from "react";
import { pressReleases } from "@/data/press";
import PressCard from "./PressCard";

const months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const years = ["Year", "2026", "2025", "2024", "2023", "2022"];

export default function PressGrid() {
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");

  const filtered = useMemo(
    () =>
      pressReleases
        .filter((p) => !p.featured)
        .filter((p) => (month === "Month" ? true : p.month === month))
        .filter((p) => (year === "Year" ? true : p.year === year)),
    [month, year]
  );

  const selectClass =
    "border border-primary/20 text-primary/60 text-xs uppercase tracking-widest px-5 py-2.5 bg-transparent rounded-full cursor-pointer hover:border-secondary transition-colors duration-300 appearance-none";

  return (
    <div>
      <div className="flex justify-end gap-3 mb-10">
        <select value={month} onChange={(e) => setMonth(e.target.value)} className={selectClass}>
          {months.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} className={selectClass}>
          {years.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-primary/40 text-sm tracking-widest uppercase py-20">
          No press releases for this period.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" key={`${month}-${year}`}>
          {filtered.map((post, i) => (
            <PressCard key={post.id} post={post} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}