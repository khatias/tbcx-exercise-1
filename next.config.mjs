// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   distDir: './dist',
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   // Remove the webpack config for now
// };

// export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);