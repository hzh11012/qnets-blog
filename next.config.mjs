import NextBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
});

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'http',
                hostname: 'localhost'
            }
        ]
    }
};

export default withBundleAnalyzer(config);
