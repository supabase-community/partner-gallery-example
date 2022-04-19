/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.SUPABASE_HOSTNAME],
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
