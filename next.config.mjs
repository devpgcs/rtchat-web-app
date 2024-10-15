/** @type {import('next').NextConfig} */
const nextConfig = {
  // To avoid many WS connections in dev mode we need to disable react strict mode
  reactStrictMode: false,
};

export default nextConfig;
