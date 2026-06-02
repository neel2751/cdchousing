import HeroSection from "@/components/home/HeroSection";
import FoundationTimeline from "@/components/home/FoundationTimeline";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignPartner from "@/components/home/DesignPartner";
import MediaBlogs from "@/components/home/MediaBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDC Housing — European Standards, Bespoke Design, Built in Bangladesh",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FoundationTimeline />
      <FeaturedProjects />
      <DesignPartner />
      <MediaBlogs />
    </>
  );
}