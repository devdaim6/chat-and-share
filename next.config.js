/** @type {import('next').NextConfig} */

const nextConfig = {
 

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "chat.tail11bb2d.ts.net",
        port: "3000",
        pathname: "/images/**",
      },
    ],
    domains: ["localhost", "chat.tail11bb2d.ts.net"],
  },

  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    return config;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin", 
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
