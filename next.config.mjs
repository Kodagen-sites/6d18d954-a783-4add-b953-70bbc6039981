/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "**.supabase.in" },
      { protocol: "https", hostname: "stream.mux.com" },
    ],
  },
  async headers() {
    return [
      {
        // Disable edge / CDN / browser caching on non-static routes so
        // per-project previews always serve the latest build.
        source: "/((?!_next/static|_next/image|frames|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
