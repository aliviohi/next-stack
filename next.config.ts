import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./configs/i18n/request.ts');

const nextConfig: import('next').NextConfig = {
  output: 'standalone',
};

export default withNextIntl(nextConfig);
