"use client";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

const posts = [
  {
    title: "CDC Housing Unveils New Bashundhara Residential Development",
    excerpt: "Dhaka, 18 May 2026: CDC Housing announces its latest residential project, bringing European standard planning and bespoke design to Bashundhara R/A…",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
  },
  {
    title: "Partnering with Landowners to Build Tomorrow's Dhaka",
    excerpt: "Dhaka, 17 April 2026: CDC Housing expands its landowner partnership programme, helping plot owners transform their land into high-quality developments…",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    title: "Designing for Comfort: Our Approach to Modern Living",
    excerpt: "Dhaka, 11 April 2026: A look at how CDC Housing blends contemporary architecture with everyday comfort to create homes built for long-term value…",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
  },
];

export default function MediaBlogs() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <AnimatedSection animation="fade-up" className="flex justify-center mb-8">
          <span className="inline-block border border-secondary text-secondary text-xs tracking-widest uppercase px-6 py-2.5 rounded-full">
            Media &amp; Blogs
          </span>
        </AnimatedSection>

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