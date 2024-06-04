import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["blackcomet-storage.s3.us-east-2.amazonaws.com"],
  },
};

export default withPayload(nextConfig);
