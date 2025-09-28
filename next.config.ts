import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    turbopack: {
        root: __dirname, // absolute path to the root of your project
    },
};

export default nextConfig;
