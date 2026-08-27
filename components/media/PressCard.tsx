"use client";
import Link from "next/link";
import { PressRelease } from "@/data/press";
import Img from "@/components/shared/Img";

interface Props {
  post: PressRelease;
  index: number;
}

export default function PressCard({ post, index }: Props) {
  return (
    <Link href={`/media/${post.id}`}>
      <article
        className="group bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col"
        style={{
          opacity: 0,
          transform: "translateY(50px)",
          animation: `fadeUp 0.8s ${index * 0.1}s cubic-bezier(0.16,1,0.3,1) forwards`,
        }}
      >
        <div className="overflow-hidden aspect-video">
          <Img
            src={post.image}
            alt={post.title}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="text-secondary text-xs tracking-widest uppercase mb-3">{post.date}</p>
          <h3 className="font-serif text-lg text-primary leading-snug mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-primary/60 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">{post.excerpt}</p>
          <span className="text-xs tracking-widest uppercase text-secondary inline-flex items-center gap-2">
            Read More <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}