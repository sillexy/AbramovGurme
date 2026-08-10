import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "./",
  images: { unoptimized: true },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
