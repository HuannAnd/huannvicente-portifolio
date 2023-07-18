/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  env: {
    NEXT_GITHUB_PROFILE: "HuannAnd",
    NEXT_GITHUB_API: "https://api.github.com",
    NEXT_GITHUB_API_KEY:
      "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",
  },
};

module.exports = nextConfig;
