import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, '../utils'),
    };
    return config;
  },
};

export default nextConfig;
