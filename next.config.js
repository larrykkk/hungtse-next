/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? "/hungtse-next": '',
  assetPrefix: isProd ? '/hungtse-next/' : '',
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
