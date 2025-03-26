/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
      domains: ['localhost'],
    },
    // Enable Turbopack for development
    experimental: {
      turbo: true,
    },
    // Optimize for Next.js 15
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
  };
  
export default nextConfig;