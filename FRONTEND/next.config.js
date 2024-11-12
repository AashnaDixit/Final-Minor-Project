/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/dashboard',
          destination: '/dashboard/index.html',
          permanent: true,
        },
        {
          source: '/dashboard/notifications',
          destination: '/dashboard/notifications.html',
          permanent: true,
        },
        {
          source: '/dashboard/profile',
          destination: '/dashboard/profile.html',
          permanent: true,
        },
        {
          source: '/dashboard/threatscore',
          destination: '/dashboard/threatscore.html',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  