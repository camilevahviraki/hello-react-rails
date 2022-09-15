const path    = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode: mode,
  optimization: {
    moduleIds: 'hashed',
  },
  entry: {
    // application: [
    //   './app/assets/javascripts/application.js',
    //   './app/assets/stylesheets/application.scss',
    // ],
    application: './app/javascript/app.js',
    // custom: './app/assets/stylesheets/custom.scss',

  },
  output: {
    filename: "application.js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, '..', '..', 'app/assets/builds'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.(js|jsx|ts|tsx|)$/,
        exclude: /node_modules/
      },
      {
        test: /\.(?:sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|eot|woff2|woff|ttf|svg)$/i,
        use: 'file-loader',
      },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
}
