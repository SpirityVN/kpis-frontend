// craco.config.js
const path = require('path')

module.exports = {
    webpack: {
        configure: (webpackConfig, { paths }) => {
            paths.appBuild = webpackConfig.output.path = path.resolve('dist')
            return webpackConfig // Important: return the modified config
        },
        alias: {
            '@': path.resolve('src'),
            src: path.resolve('src'),
            assets: path.resolve('src/assets'),
            components: path.resolve('src/components'),
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'style-loader' }, // to inject the result into the DOM as a style block
                        { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
                        { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                        { loader: 'sass-loader' }, // to convert SASS to CSS
                    ],
                },
                { test: /\.tsx?$/, loader: 'ts-loader' },
            ],
        },
    },
    babel: {
        presets: ['@emotion/babel-preset-css-prop'],
    },
    devServer: {},
}