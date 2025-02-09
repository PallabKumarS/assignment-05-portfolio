import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.microlink.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
