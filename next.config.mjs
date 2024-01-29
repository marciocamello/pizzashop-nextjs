/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
