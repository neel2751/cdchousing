import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/animations.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/shared/CursorFollower";

export const metadata: Metadata = {
  title: {
    default: "CDC Housing — Premium Real Estate Gujarat",
    template: "%s | CDC Housing",
  },
  description: "Building aspirations into reality across Gujarat since 1995. Luxury, residential and commercial developments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorFollower />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}