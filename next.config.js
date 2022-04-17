/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/birthday',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
