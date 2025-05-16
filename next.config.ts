import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pravatar.cc'],
  },
  experimental: {
    ppr: false, // ✅ Boolean, not a string
  },
  eslint: {
    // ✅ This disables ESLint from blocking the production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
