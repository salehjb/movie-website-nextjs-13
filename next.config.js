/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["moviesapi.ir"]
  }
}

module.exports = nextConfig
