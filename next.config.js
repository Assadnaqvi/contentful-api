/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: 'p8xd6ihnje4d',
    CONTENTFUL_ENVIRONMENTS:"master",
  },
}

module.exports = nextConfig
