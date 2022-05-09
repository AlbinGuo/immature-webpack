const path = require('path')

module.exports = {
  mode: 'development',    // 不压缩代码：development、压缩代码：production
  entry: {
    main: './src/index.js'  // 入口文件
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/, // 打包的文件是以png结尾的
      use: [{         // 使用loader打包图片
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',    // placeholder占位符
          outputPath: 'images/',             // 打包后的图片存放的路径
        }
      }]
    }]
  },
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 打包后的路径：__dirname代表根目录
  }

}