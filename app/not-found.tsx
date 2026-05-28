import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
      <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Error</p>
      <h1 className="font-serif text-8xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.1)" }}>
        404
      </h1>
      <p className="text-white/50 mb-10">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="border border-secondary text-secondary text-xs tracking-widest uppercase px-8 py-4 hover:bg-secondary hover:text-white transition-all duration-500"
      >
        Back to Home
      </Link>
    </div>
  );
}