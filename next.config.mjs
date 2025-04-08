/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  generateBuildId: () => 'build',
};

// Disable telemetry during the build
process.env.NEXT_TELEMETRY_DISABLED = '1';

export default nextConfig;

