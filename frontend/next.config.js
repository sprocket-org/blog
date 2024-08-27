/** @type {import('next').NextConfig} */

let protocol = process.env.NEXT_PUBLIC_STRAPI_API_PROTOCOL || "http";
const hostname = process.env.NEXT_PUBLIC_STRAPI_API_URL || "localhost";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol,
        hostname,
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
}

module.exports = nextConfig
