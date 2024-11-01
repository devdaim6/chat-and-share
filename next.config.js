/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {

    remotePatterns: [

      {

        protocol: 'http',

        hostname: 'localhost',

        port: '3001',

        pathname: '/images/**',

      },

    ],

  },

  reactStrictMode: true,

  webpack: (config, { isServer }) => {

    // Add any necessary webpack configurations here

    return config;

  },

};



module.exports = nextConfig; 
