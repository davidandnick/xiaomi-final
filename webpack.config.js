const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  // 用于开发环境的调试和测试的工具
  devtool: 'inline-source-map',
  // 建立一个简单的服务器，可以自动编译代码
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      // 支持在webpack中使用vue单文件组件的开发
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 支持JavaScript模块中import一个 CSS 文件
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 支持less预处理器
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // 支持加载背景和图标等图片文件
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/'
            }
          }
        ]
      },
      // 支持加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // 开启 HMR 的时候使用该插件会显示模块的相对路径
    new webpack.NamedModulesPlugin(),
    // 开启模块热加载HMR，允许在运行时更新各种模块，而无需进行完全刷新
    new webpack.HotModuleReplacementPlugin(),
    // 将定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin()
  ]
};