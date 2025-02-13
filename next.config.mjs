import NextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

/** @type {import("next").NextConfig} */
const config = {};

export default withBundleAnalyzer(config);
