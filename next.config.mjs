import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["blackcomet-storage.s3.us-east-2.amazonaws.com"],
  },
  async rewrites() {
    return [
      {
        source: "/products",
        destination: "/products/1",
      },
    ];
  },
};

export default withPayload(nextConfig);
