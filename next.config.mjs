/** @type {import('next').NextConfig} */
// @ts-check
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  transpilePackages: ["three"],
  env: {
    NEXT_GITHUB_PROFILE: "HuannAnd",
    NEXT_GITHUB_API: "https://api.github.com",
    NEXT_GITHUB_API_KEY:
      "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",
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
};

export default withPlaiceholder(nextConfig);
