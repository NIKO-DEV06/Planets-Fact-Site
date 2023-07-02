/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mercury",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
