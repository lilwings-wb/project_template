'use strict';

const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',

    entry: { main: './src/es6/index.js' },
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        library: "bundleJS"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src'],
                        interpolate: true
                    }
                }
            }
        ]
    }
};
