/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/larrykkk",
  assetPrefix: "/larrykkk/",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
