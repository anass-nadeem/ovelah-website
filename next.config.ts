import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/erp',
        destination: '/product',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;