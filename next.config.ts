import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "is.gd",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
