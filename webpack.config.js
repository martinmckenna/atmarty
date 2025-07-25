const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // minify css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // make html file from template
const FileManagerPlugin = require('filemanager-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    js: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, './src/styles/'), '/node_modules/'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin()
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'styles.min.css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ template: './dist/templates/index.html', minify: false }),
    new HtmlWebpackPlugin({
      template: './dist/templates/404.html',
      filename: '404.html',
      minify: false
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: 'dist/index.html',
              destination: './index.html',
            },
            {
              source: 'dist/404.html',
              destination: './404.html',
            },
            {
              source: 'dist/bundle.js',
              destination: './bundle.js',
            },
            {
              source: 'dist/styles.min.css',
              destination: './styles.min.css',
            },
          ],
          delete: [
            'dist/index.html', 
            'dist/404.html',
            'dist/bundle.js',
            'dist/styles.min.css'
          ]
        },
      }
    }),
  ],
};
