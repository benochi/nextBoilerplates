/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable TypeScript support
  typescript: {
    enabled: true,
  },
  // Enable PostCSS support
  postcss: {
    plugins: [require('tailwindcss')],
  },
};

export default nextConfig;