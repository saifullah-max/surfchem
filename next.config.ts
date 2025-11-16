import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["blob.v0.dev"], // Add any other domains you need too
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
