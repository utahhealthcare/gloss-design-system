module.exports = {
    plugins: [
        require('postcss-replace')({
            pattern: /uk-/g,
            data: {
                replaceAll: 'gls-',
            },
        }),
        require('postcss-import')({
            path: 'src/css',
        }),
        require('postcss-inline-svg')({
            removeFill: true,
        }),
        require('postcss-preset-env')({
            browsers: '> 0.2% and not dead',
            stage: 1,
            features: {
                'color-mod-function': {
                    unresolved: 'ignore',
                },
            },
        }),
    ],
};
