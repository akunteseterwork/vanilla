module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next',
                    name: 'static/media/[name].[ext]',
                },
            },
        });

        return config;
    },
};
