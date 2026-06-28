import AnimatedSection from "@/components/shared/AnimatedSection";

const youtubeVideos = [
  "BYP6AfIQgx4",
  "XIILIoV_-RY",
  "b08h_VyWR8k",
];

const facebookReels = [
  "https://www.facebook.com/reel/884553967429357",
  "https://www.facebook.com/reel/4308361572820594",
];

export default function MediaBlogs() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <AnimatedSection animation="fade-up" className="flex justify-center mb-8">
          <span className="inline-block border border-secondary text-secondary text-xs tracking-widest px-6 py-2.5 rounded-full">
            Media &amp; Blogs
          </span>
        </AnimatedSection>

        {/* YouTube videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {youtubeVideos.map((id, i) => (
            <AnimatedSection key={id} animation="scale" delay={i * 100}>
              <div className="relative w-full overflow-hidden rounded-lg shadow-sm" style={{ aspectRatio: "16/9" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`CDC Housing video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Facebook reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facebookReels.map((url, i) => (
            <AnimatedSection key={url} animation="scale" delay={i * 100}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-white shadow-sm hover:shadow-lg transition-shadow duration-500 p-6 rounded-lg"
              >
                <div>
                  <p className="text-secondary text-xs tracking-widest uppercase mb-2">Facebook Reel</p>
                  <h3 className="font-serif text-lg text-primary">Watch on Facebook</h3>
                </div>
                <span className="text-secondary text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}