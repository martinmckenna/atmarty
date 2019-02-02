const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // minify css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minimize css
const HtmlWebpackPlugin = require('html-webpack-plugin'); // make html file from template
const FileManagerPlugin = require('filemanager-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        js: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "./src/styles/"),
                    "/node_modules/"
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles.min.css",
            chunkFilename: "[id].css"
          }),
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.optimize\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: {
        //         discardComments: {
        //             removeAll: true
        //         }
        //     },
        //     canPrint: true
        // }),
        new HtmlWebpackPlugin({ template: './dist/templates/index.html' }),
        new HtmlWebpackPlugin({ template: './dist/templates/404.html', filename: '404.html' }),
        new FileManagerPlugin({
            onEnd: {
                move: [
                    {
                        source: 'dist/index.html',
                        destination: './index.html'
                    }, {
                        source: 'dist/404.html',
                        destination: './404.html'
                    }, {
                        source: 'dist/bundle.js',
                        destination: './bundle.js'
                    }, {
                        source: 'dist/styles.min.css',
                        destination: './styles.min.css'
                    }
                ]
            }
        })
    ]
};