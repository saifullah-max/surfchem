import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["blob.v0.dev", "firebasestorage.googleapis.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
