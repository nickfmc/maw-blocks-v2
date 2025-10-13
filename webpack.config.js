/**
 * WordPress scripts handles most of the webpack config,
 * but we need to customize entry points for our multi-block structure
 */

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

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
        'blocks/logo-carousel/index': './blocks/logo-carousel/index.js',
        'blocks/logo-carousel/style': './blocks/logo-carousel/style.scss',
        'blocks/logo-carousel/editor': './blocks/logo-carousel/editor.scss',
        'blocks/logo-carousel/frontend': './blocks/logo-carousel/frontend.js',
        'blocks/number-counter/index': './blocks/number-counter/index.js',
        'blocks/number-counter/style': './blocks/number-counter/style.scss',
        'blocks/number-counter/editor': './blocks/number-counter/editor.scss',
        'blocks/number-counter/frontend': './blocks/number-counter/frontend.js',
        'blocks/masonry/index': './blocks/masonry/index.js',
        'blocks/masonry/style': './blocks/masonry/style.scss',
        'blocks/masonry/editor': './blocks/masonry/editor.scss',
        'blocks/masonry/frontend': './blocks/masonry/frontend.js',
        'blocks/icon-list/index': './blocks/icon-list/index.js',
        'blocks/icon-list/style': './blocks/icon-list/style.scss',
        'blocks/icon-list/editor': './blocks/icon-list/editor.scss',
        'blocks/icon-list/frontend': './blocks/icon-list/frontend.js',
        'editor': './assets/scss/editor.scss'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    }
};

