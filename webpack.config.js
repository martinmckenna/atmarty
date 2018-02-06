const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // compile css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minimize css
const HtmlWebpackPlugin = require('html-webpack-plugin'); // make html file from template
const FileManagerPlugin = require('filemanager-webpack-plugin');
const webpack = require('webpack');

module.exports = {
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.min.css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),
        new webpack
            .optimize
            .UglifyJsPlugin({include: /\.min\.js$/, minimize: true}),
        new HtmlWebpackPlugin({title: 'AtMarty - Home', template: './dist/templates/index.html'}),
        new FileManagerPlugin({
            onEnd: {
                move: [
                    {
                        source: 'dist/index.html',
                        destination: './index.html'
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