/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/",
        destination: "/smart-homes",
        permanent: true,
      },
      {
        source: "/home-automation/",
        destination: "/smart-homes",
        permanent: true,
      },
      {
        source: "/contact/request-a-quote/",
        destination: "/request-a-quote",
        permanent: true,
      },
      {
        source: "/contact/request-service-call/",
        destination: "/request-service-call",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
