/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        permanent: false,
        source: '/',
        destination: '/partners/integrations',
      },
      // Have integrations as the default partners page
      {
        permanent: false,
        source: '/partners',
        destination: '/partners/integrations',
      },
    ]
  },
}
