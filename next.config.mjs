/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow fetching from Google Sheets
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }],
      },
    ];
  },
};

export default nextConfig;
