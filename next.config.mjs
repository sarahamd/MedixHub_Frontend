// import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  // Dont forget to comment the following
  //   eslint: {
  //     ignoreDuringBuilds: true,
  //   },
  // ///////////////////////////////////
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "media.istockphoto.com/id",
  //         port: "",
  //         pathname: "/**",
  //         search: "",
  //       },
  //     ],
  //   },
};

// const nextConfig: NextConfig = {};
// export default nextConfig;
export default withNextIntl(nextConfig);
