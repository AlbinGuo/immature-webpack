const path = require('path')

module.exports = {
  mode: 'development',    // 不压缩代码：development、压缩代码：production
  entry: {
    main: './src/index.js'  // 入口文件
  },
  module: {
    rules: [{
      test: /\.png$/, // 打包的文件是以png结尾的
      use: [{         // 使用loader打包图片
        loader: 'file-loader',
        options: {
          // placeholder占位符
          name: '[name]-[hash].[ext]'
        }
      }]
    }]
  },
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 打包后的路径
  }

}