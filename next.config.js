/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: [
      // '{bucket_name}.s3.amazonaws.com',
      // 's3.amazonaws.com',
      '127.0.0.1',
      'localhost',
      'localhost:8000',
      // 'console.cloud.google.com',
      // 'storage.googleapis.com',
    ],
  },
  ...(process.env.APPLICATION_MODE === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
  staticPageGenerationTimeout: 1000,
};

module.exports = withPWA(nextConfig);
