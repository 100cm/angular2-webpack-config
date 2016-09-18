/**
 * Created by icepoint1999 on 7/10/16.
 */
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers/helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('/dist/dev'),
        publicPath: 'http://localhost:9000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        changeOrigin: true,
        historyApiFallback: true,
        proxy: {
            '/open/*': {
                target: 'http://localhost:3000',
            },

            '/v1/*': {
                target: 'http://localhost:3000',
            },
            '/v2/*': {
                target: 'http://localhost:3000',
            }
            ,
            '/pc/*': {
                target: 'http://localhost:3000',
            }
        }

    },
});