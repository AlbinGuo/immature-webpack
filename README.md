### \* entry 与 output 配置

```javascript
...
entry: {
    main: './src/index.js',
    sub: './src/sub.js'
  },

output: {
  publicPath: 'http://cdn.gugouo.com', // 在html中引入CDN的地址，打包之后script会自动拼接上该地址
  filename: '[name].js', // '[hash].js', // 打包后的文件名
  path: path.resolve(__dirname, 'dist') // 打包后的路径：__dirname代表根目录
}
...
```

### \* Plugin

- html-webpack-plugin
  > html-webpack-plugin 插件会在<font color="red">打包结束后</font>，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中

```npm
npm install html-webpack-plugin@4.0.0 -D
```

- clean-webpack-plugin
  > clean-webpack-plugin 插件会在<font color="red">打包之前</font>删除 dist 目录下的所有内容
  > `new CleanWebpackPlugin(['dist'])`

```npm
npm install html-webpack-plugin@4.0.0 -D
```

### \* 静态资源文件打包

- 使用 loader 打包静态资源（css 样式）& 自动添加样式前缀-webkit-等
- 打包字体文件、xml、csv 等格式的文件

```npm
npm install --save-dev csv-loader xml-loader
```

```javascript
{
  test: /\.(csv|tsv)$/i,
  use: ['csv-loader'],
},
{
  test: /\.xml$/i,
  use: ['xml-loader'],
},
```
