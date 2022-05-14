module.exports = {
  entry: {
    main: './src/index.js',  // 入口文件,output不指定文件名，默认输出main.js
    // sub: './src/index.js' // ./src/sub.js
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/, // 打包的文件是以png结尾的
      use: {                   // 使用loader打包图片
        //loader: 'file-loader',  // file-loader是一个内置的loader
        loader: 'url-loader',   // url-loader会把图片转成base64的字符串放入js文件中
        options: {
          name: '[name]-[hash].[ext]',    // placeholder占位符
          outputPath: 'images/',          // 打包后的图片存放的路径
          limit: 10240                   // 图片大小小于10k就会转成base64放入bundle.js, 大于10k就会打包到images文件夹下
        }
      }
    },
    {
      test: /\.(ttf|woff|woff2)$/, // 打包字体文件
      use: { 
        loader: 'file-loader',    // 打包至dist目录
        options: {
          name: '[name].[ext]',    // placeholder占位符
          outputPath: './font/',          // 打包后的图片存放的路径
        }
      }
    },
    {
      // test: /\.css$/,           // 打包css文件
      test: /\.scss$/,           // 打包scss文件
      use: [
        'style-loader',         // style-loader@0.23.1 [将style挂载到html中]
        {
          loader: 'css-loader',           // css-loader@2.0.0  [解析css文件，合并css文件]
          options: {
            // importLoaders: 2,     // 在css-loader之前，先执行下面两个loader【从下到上执行】 - 适用于scss内部嵌入@import时
            // modules: true,         // 
          }
        },
        'sass-loader',           // sass-loader [ 对scss文件进行编译 ]
        'postcss-loader'        // 自动添加厂商前缀 -webkit- -moz- -o- -ms- -ie- [ npm i autoprefixer ]
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html', // 指定打包html文件参照的模板
      filename: 'index.html', // 生成的html文件名
      inject: true, // 是否将js放入head中 , 或者直接写 inject: 'head'
    }),
    new CleanWebpackPlugin(), // 打包前先清空dist目录
    new webpack.HotModuleReplacementPlugin(), // 热更新
  ],
}