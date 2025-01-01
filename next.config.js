const withNextIntl = require('next-intl/plugin')(
  './i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true
    }
  },
}

module.exports = withNextIntl(nextConfig);
