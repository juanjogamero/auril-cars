/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/auril-cars' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};
module.exports = nextConfig;
