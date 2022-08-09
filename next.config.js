/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";

const nextConfig = {
  basePath: isProd && isStatic ? "/hungtse-next" : "",
  assetPrefix: isProd && isStatic ? "/hungtse-next/" : "",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
