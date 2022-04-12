/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/birthday/1',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
