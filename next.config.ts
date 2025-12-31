import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Set the basePath to /personal-webpage only in production (GitHub Pages)
  // This allows local development (npm run dev) to work at the root /
  basePath: isProd ? '/personal-webpage' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
