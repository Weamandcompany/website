/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: "AIzaSyDqrB2H420D4qRFyr4n6eaorYzEPW-y4U8", // Replace this API key when the website goes live
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
