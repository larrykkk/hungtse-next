/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  // assetPrefix: "/larrykkk/",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
