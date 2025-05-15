import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   images: {
    domains: ['i.pravatar.cc'],
   },
   experimental:{
    ppr:'incremental'
   },
};

export default nextConfig;
