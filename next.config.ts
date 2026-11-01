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
      {
        source: '/solutions/job-management',
        destination: '/platform',
        permanent: true,
      },
      {
        source: '/solutions/quotation-billing',
        destination: '/platform',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;