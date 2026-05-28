"use client";

const categories = ["all", "residential", "commercial", "luxury", "affordable"];

interface Props {
  activeFilter: string;
  onFilter: (cat: string) => void;
}

export default function FilterButtons({ activeFilter, onFilter }: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-400 ${
            activeFilter === cat
              ? "bg-primary text-white border-primary"
              : "border-primary/20 text-primary/60 hover:border-primary hover:text-primary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}