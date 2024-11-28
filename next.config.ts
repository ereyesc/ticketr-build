import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'handsome-tern-44.convex.cloud', protocol: 'https' },
    ],
  },
};

export default nextConfig;
