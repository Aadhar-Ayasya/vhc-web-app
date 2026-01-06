import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://images.unsplash.com/photo-1550831107-1553da8c8464"),
    ],
  },
};

export default nextConfig;
