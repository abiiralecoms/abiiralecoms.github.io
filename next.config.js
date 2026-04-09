/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static GitHub Pages hosting
  basePath: '/abiiralecoms.github.io',
  assetPrefix: '/abiiralecoms.github.io', 
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;