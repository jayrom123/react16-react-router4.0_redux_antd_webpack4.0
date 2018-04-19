/**
 * Created by Administrator on 2017/9/4.
 */

const  webpack =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
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
            plugins: [
              'transform-runtime',
              require('babel-plugin-transform-object-rest-spread'),
              ["import", {                //antd  
                "libraryName": "antd",
                "style": true,           // or 'css'
              }]
            ]
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
      "__src":path.resolve(__dir,"./src/")
    }
  },
  devtool:"source-map",
  plugins:[
    new HtmlWebpackPlugin({
      template: __dir + '/src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('../css/[name].min.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    // new UglifyJSPlugin({
    //   compress: {
    //     warnings: true
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),
    //拷贝文件夹到相应目录
    // new CopyWebpackPlugin([
    //   {from: __dir + '/src/static/lib/*', to: __dir + '/dist/'}
    // ]),
  ],
  devServer: {
    proxy: {          // proxy URLs to backend development server
      '/api': 'http://localhost:4000'
    },
    port: 3000,
    open: true,
    contentBase: './',
    clientLogLevel: 'none',
    disableHostCheck:true,
    historyApiFallback:true,   //开发环境浏览器路由
    hot: true,
    compress:false,
    lazy: false
  },
};

