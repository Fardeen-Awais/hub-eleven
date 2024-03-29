/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'maley.digital',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
    },
}

module.exports = nextConfig
