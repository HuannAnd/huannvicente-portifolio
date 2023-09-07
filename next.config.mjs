/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  transpilePackages: ["three"],
  env: {
    NEXT_GITHUB_PROFILE: "HuannAnd",
    NEXT_GITHUB_API: "https://api.github.com",
    NEXT_GITHUB_API_KEY:
      "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",
  },
  webpack: (config, { webpack }) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.externals["node:fs"] = "commonjs node:fs";
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      })
    );

    return config;
  },
};

export default withPlaiceholder(nextConfig);
