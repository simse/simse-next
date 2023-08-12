/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    ...config.resolve.fallback,
                    fs: false,
                },
            };
        }

        config.module = {
            ...config.module,
            exprContextCritical: false,
        };
        return config;
    },
    images: {
        domains: [
            'www.notion.so',
            'notion.so',
            'images.unsplash.com',
            'pbs.twimg.com',
            's3.us-west-2.amazonaws.com'
        ],
        formats: ['image/avif', 'image/webp'],
        loader: 'custom',
        loaderFile: './src/imageLoader.js'
    }
}

module.exports = nextConfig
