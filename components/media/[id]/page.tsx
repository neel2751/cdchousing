import { pressReleases } from "@/data/press";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: { id: string } }

export function generateStaticParams() {
  return pressReleases.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = pressReleases.find((p) => p.id === params.id);
  return { title: post?.title ?? "Press Release" };
}

export default function PressDetailPage({ params }: Props) {
  const post = pressReleases.find((p) => p.id === params.id);
  if (!post) return notFound();

  const more = pressReleases.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <div className="pt-36 md:pt-44 pb-10 bg-light">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-primary/50 text-xs tracking-widest uppercase hover:text-secondary transition-colors duration-300 mb-6"
            >
              <span>←</span> All Press Releases
            </Link>
            <p className="text-secondary text-xs tracking-widest uppercase mb-4">{post.date}</p>
            <h1 className="font-serif text-3xl md:text-5xl text-primary leading-tight">{post.title}</h1>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-6 py-12 md:py-16">
        <AnimatedSection animation="fade-up">
          <div className="overflow-hidden aspect-video mb-12">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose max-w-none">
            <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed mb-8">{post.excerpt}</p>
            <div className="w-12 h-px bg-secondary mb-8" />
            <p className="text-primary/60 leading-relaxed mb-6">
              CDC Housing continues to deliver European standard planning and bespoke architectural
              design across its residential and commercial portfolio. This announcement reinforces the
              company&apos;s commitment to building thoughtfully designed spaces that improve everyday
              living and contribute to a better future for Bangladesh.
            </p>
            <p className="text-primary/60 leading-relaxed">
              For media enquiries and further information, please contact the CDC Housing
              communications team at{" "}
              <a href="mailto:contact@cdchousing.com" className="text-secondary hover:underline">
                contact@cdchousing.com
              </a>
              .
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="bg-accent py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-10 text-center">More Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((p) => (
              <Link key={p.id} href={`/media/${p.id}`} className="group bg-white shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className="overflow-hidden aspect-video">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <p className="text-secondary text-xs tracking-widest uppercase mb-3">{p.date}</p>
                  <h3 className="font-serif text-lg text-primary leading-snug line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}