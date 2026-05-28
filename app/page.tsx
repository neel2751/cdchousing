import HeroSection from "@/components/home/HeroSection";
import LegacySection from "@/components/home/LegacySection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import StatisticsSection from "@/components/about/StatisticsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDC Housing — Building Legacies Across Gujarat",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <ProcessSection />
      <FeaturedProjects />
      <StatisticsSection />
    </>
  );
}