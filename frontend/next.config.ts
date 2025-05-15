import type { NextConfig } from 'next';
const nextConfig = {
  output: 'standalone', // Para deploy en Vercel
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Si usas rutas estáticas
  trailingSlash: true,
};

module.exports = nextConfig;
