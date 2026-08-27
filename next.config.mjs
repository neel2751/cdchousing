const nextConfig = {
  images: {
    // Required for `output: "export"`: the static host has no /_next/image
    // optimizer, so let next/image emit the plain file paths (e.g. /images/logo.png).
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
