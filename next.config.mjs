/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're deploying to a subdirectory (e.g., username.github.io/portfolio)
  // uncomment and update the following line:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;
