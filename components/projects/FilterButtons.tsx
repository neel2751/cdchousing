"use client";

interface Props {
  active: "ongoing" | "completed";
  onChange: (f: "ongoing" | "completed") => void;
}

export default function FilterButtons({ active, onChange }: Props) {
  const base =
    "text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-300";

  return (
    <div className="flex gap-3">
      <button
        onClick={() => onChange("ongoing")}
        className={`${base} ${
          active === "ongoing"
            ? "bg-primary text-white border-primary"
            : "bg-transparent text-primary/60 border-primary/20 hover:border-primary hover:text-primary"
        }`}
      >
        On Going
      </button>
      <button
        onClick={() => onChange("completed")}
        className={`${base} ${
          active === "completed"
            ? "bg-primary text-white border-primary"
            : "bg-transparent text-primary/60 border-primary/20 hover:border-primary hover:text-primary"
        }`}
      >
        Completed
      </button>
    </div>
  );
}