export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-px bg-secondary animate-pulse" />
        <p className="text-primary/40 text-xs tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}