import type { NextConfig } from "next";

// Automatically use the correct base path when deploying to test-joyfulhome
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = repoName === 'test-joyfulhome' ? '/test-joyfulhome' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
