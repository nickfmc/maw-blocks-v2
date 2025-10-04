/**
 * WordPress scripts handles most of the webpack config,
 * but we need to customize entry points for our multi-block structure
 */

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...defaultConfig,
    entry: {
        'blocks/video/index': './blocks/video/index.js',
        'blocks/video/style': './blocks/video/style.scss',
        'blocks/video/editor': './blocks/video/editor.scss',
        'blocks/video/frontend': './blocks/video/frontend.js',
        'blocks/slider/index': './blocks/slider/index.js',
        'blocks/slider/style': './blocks/slider/style.scss',
        'blocks/slider/editor': './blocks/slider/editor.scss',
        'blocks/slider/frontend': './blocks/slider/frontend.js',
        'blocks/testimonial-slider/index': './blocks/testimonial-slider/index.js',
        'blocks/testimonial-slider/style': './blocks/testimonial-slider/style.scss',
        'blocks/testimonial-slider/editor': './blocks/testimonial-slider/editor.scss',
        'blocks/testimonial-slider/frontend': './blocks/testimonial-slider/frontend.js',
        'editor': './assets/scss/editor.scss'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        ...defaultConfig.plugins.filter(
            plugin => !(plugin instanceof MiniCssExtractPlugin)
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};

