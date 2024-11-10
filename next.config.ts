import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ghpages",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
