'use strict';

var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnext = require('postcss-cssnext');
var postcssImport = require('postcss-import');

module.exports = {
    devtool: 'eval',

    entry: './src/client/index.js',

    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new ExtractTextPlugin('main.css')
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel?presets[]=react,presets[]=stage-0,presets[]=es2015']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css!postcss')
        }]
    },

    postcss: function () {
        return [postcssImport, cssnext]
    }
};
