/**
 * Created by Administrator on 2017/9/4.
 */

const  webpack =  require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const __dir = path.resolve(__dirname,"..");

module.exports = {
  context:path.resolve(__dir,"./"),
  entry:{
    vendor: [],
    build:"./src/app.jsx",
  },
  output:{
    filename:"[name].js",
    path:path.resolve(__dir, "./dist"),
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: [[
              "import", {                //antd
                "libraryName": "antd",
                "style": true,           // or 'css'
              }]]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader:"url-loader",
            options:{
              limit:8192,
            },
          }
        ]
      },
      // {
      //   test: /.*$/,
      //   use: [
      //     {
      //       loader:"file-loader",
      //       options:{
      //         name:"[name][hash].[ext]",
      //         outputPath: 'lib'
      //       },
      //     }
      //   ]
      // }
    ]
  },
  resolve:{
    alias:{
      "__src":path.resolve(__dir,"/src/")
    }
  },
  devtool:"soure-map",
  plugins:[
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/static/vendor-[hash].js',
    }),
    new HtmlWebpackPlugin({
      template:  path.join( __dir ,"/src/index.html")
      //template: 'index.html'
    }),
    // new UglifyJSPlugin({
    //   compress: {
    //     warnings: true
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),
    // 拷贝文件夹到相应目录
    new CopyWebpackPlugin([
      {from: __dir + '/src/static/*', to: __dir + '/dist/src/static'}
    ]),
  ]
};
