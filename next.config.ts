import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = 'joyfulhome';
let assetPrefix = `/${repo}/`;
let basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubActions ? assetPrefix : undefined,
  basePath: isGithubActions ? basePath : '',
};

export default nextConfig;
