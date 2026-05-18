import type { NextConfig } from "next";

// GitHub project pages: https://<user>.github.io/<repo>/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
