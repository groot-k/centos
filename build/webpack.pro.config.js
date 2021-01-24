const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'production',
    devtool: false,
    entry: path.resolve(__dirname, '../main.js'),
    output: {
        path:  path.resolve(__dirname, '../dist'),
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
        new CleanWebpackPlugin(),
        new InlineManifestWebpackPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [

        ],
    }
}