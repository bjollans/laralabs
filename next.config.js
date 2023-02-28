/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
