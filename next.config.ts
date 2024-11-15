import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.iqonic.design",
      },
    ],
  },
};

export default nextConfig;
