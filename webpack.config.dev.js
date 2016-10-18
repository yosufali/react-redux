
import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  //devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index' // <<refers to index,js, this order is important
    //path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //tells webpack we're using browser, this could also be set to 'node'
  output: { //where webpack should create our devbundle
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: { // tells webpack's dev server where our code is
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [ //enhances webpack's power
    new webpack.HotModuleReplacementPlugin(), //enables us to replace modules without having to do a ful browser refresh
    new webpack.NoErrorsPlugin() // keeps errors from breaking our hot reloading experience, get browser message instead
  ],
  module: { // tell webpack the types of files we want it to handle
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
