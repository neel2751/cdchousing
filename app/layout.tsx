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
      <head>
        {/* Open the font sockets while the HTML is still streaming. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@300..700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        />
        {/* Team photos and press art still come from Unsplash. */}
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <CursorFollower />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}