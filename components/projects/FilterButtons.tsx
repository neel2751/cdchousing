"use client";

const categories = ["all", "residential", "commercial", "luxury", "affordable"];

interface Props {
  activeFilter: string;
  onFilter: (cat: string) => void;
}

export default function FilterButtons({ activeFilter, onFilter }: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-14 md:mb-16">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`text-xs tracking-widest uppercase px-6 py-3 rounded-full border transition-all duration-500 ${
            activeFilter === cat
              ? "bg-secondary text-white border-secondary"
              : "border-primary/20 text-primary/60 hover:border-secondary hover:text-secondary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}