const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../main.js'),
    output: {
        path: '/dist',
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {}
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: './index.html',
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        minimize: false,
        minimizer: []
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        port: 8008,
        publicPath: '/',
        hot: true
    }
}