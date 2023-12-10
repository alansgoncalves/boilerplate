/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
