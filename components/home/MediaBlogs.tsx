"use client";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

const posts = [
  {
    date: "18 May 2026",
    title: "Sobha Realty and Keeta Drone Sign Strategic MoU, la…",
    excerpt: "Dubai, 18th May 2026: Sobha Realty, a leading global luxury real estate developer renowned for…",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
  },
  {
    date: "17 Apr 2026",
    title: "Emirates NBD and Sobha Realty partner to offer inte…",
    excerpt: "Dubai, UAE, 6 April 2026: Emirates NBD, a leading banking group in the Middle East, North Africa…",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
  {
    date: "11 Apr 2026",
    title: "'Sobha City': Abu Dhabi's New Nature-Led Waterfront…",
    excerpt: "Abu Dhabi, 11 April 2026: Leading luxury property developer Sobha Realty has announced its entry…",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
  },
];

export default function MediaBlogs() {
  return (
    <section className="py-24 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <AnimatedSection animation="fade-up" className="flex justify-center mb-8">
          <span className="inline-block border border-secondary text-secondary text-xs tracking-widest uppercase px-6 py-2.5 rounded-full">
            Media &amp; Blogs
          </span>
        </AnimatedSection>

        <div className="flex justify-end gap-3 mb-10">
          <select className="border border-primary/20 text-primary/60 text-xs uppercase tracking-widest px-4 py-2 bg-transparent rounded-full">
            <option>Month</option>
            <option>January</option>
            <option>February</option>
          </select>
          <select className="border border-primary/20 text-primary/60 text-xs uppercase tracking-widest px-4 py-2 bg-transparent rounded-full">
            <option>Year</option>
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={i} animation="scale" delay={i * 100}>
              <article className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 group">
                <div className="overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-secondary text-xs tracking-widest uppercase mb-3">{post.date}</p>
                  <h3 className="font-serif text-lg text-primary leading-snug mb-3">{post.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <Link
                    href="/projects"
                    className="text-xs tracking-widest uppercase text-secondary hover:text-secondary/70 transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}