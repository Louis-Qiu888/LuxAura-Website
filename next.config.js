/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    // 移除 unoptimized，启用自动图片优化
    domains: [],
    formats: ['image/avif', 'image/webp'], // 优先使用AVIF，回退到WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 移动端设备尺寸
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 小图标尺寸
    minimumCacheTTL: 60 * 60 * 24 * 365, // 缓存1年
    qualities: [75, 85, 90], // 支持的图片质量等级
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 性能优化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // 输出文件追踪根目录（解决警告）
  outputFileTracingRoot: __dirname,

  // 优化页面切换速度
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // 安全 Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
