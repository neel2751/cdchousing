import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/animations.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/shared/CursorFollower";
import LoadingScreen from "@/components/shared/LoadingScreen";
import PageTransition from "@/components/shared/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "CDC Housing — Premium Real Estate Gujarat",
    template: "%s | CDC Housing",
  },
  description: "Building aspirations into reality across Gujarat since 1995. Luxury, residential and commercial developments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LoadingScreen />
        <CursorFollower />
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}