const { repositoryName } = require("./slicemachine.config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: `https://${repositoryName}.prismic.io`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
