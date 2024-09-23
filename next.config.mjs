import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["coin-images.coingecko.com"],
  },
};

export default withNextIntl(nextConfig);
