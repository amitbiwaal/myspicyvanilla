/**
 * Deployed on Vercel as a normal Next.js app (not a static export): public pages are
 * prerendered and refreshed on demand when a post is saved; the CMS lives at /admin.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // Preserve the original site's directory-style URLs (e.g. /ai-fanfiction-generator/)
  // and trailing-slash canonicals, so already-indexed URLs keep working unchanged.
  trailingSlash: true,
  poweredByHeader: false,
  async headers() {
    const noindex = [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }];
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      // The CMS, its API and draft previews must never be indexed.
      { source: '/admin/:path*', headers: noindex },
      { source: '/api/:path*', headers: noindex },
      { source: '/preview/:path*', headers: noindex },
    ];
  },
};

export default nextConfig;
