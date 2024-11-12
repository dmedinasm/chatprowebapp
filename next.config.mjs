/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'

      },
      {
        protocol: 'https',
        hostname: 'media4.giphy.com'
      },
      {
        protocol: 'https',
        hostname: 'media0.giphy.com'
      }
    ]
  }
}

export default nextConfig
