const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // minify css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // make html file from template
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    js: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
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
    new HtmlWebpackPlugin({ template: './dist/templates/index.html' }),
    new HtmlWebpackPlugin({
      template: './dist/templates/404.html',
      filename: '404.html',
    })
  ],
};
