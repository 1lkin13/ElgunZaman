/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Geçici olarak Strict Mode devre dışı bırakıldı
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
