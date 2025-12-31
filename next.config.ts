import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: 'export',
    trailingSlash: true,

    basePath: '/opencode-website',
    assetPrefix: '/opencode-website/',
  }),
  
  experimental: {
    optimizePackageImports: ['@heroicons/react', '@headlessui/react'],
  },
  
  images: {
    ...(isGithubPages && { unoptimized: true }),
    formats: ['image/webp', 'image/avif'],
    domains: ['images.unsplash.com', 'tailwindui.com', 'tailframes.com'],
  },
  
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)()
      );
      return config;
    },
  }),
};

export default nextConfig;
