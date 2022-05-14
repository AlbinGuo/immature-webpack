### 2022/05/14 \* Plugin

- html-webpack-plugin
  > html-webpack-plugin 插件会在打包结束后，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中

```npm
npm install html-webpack-plugin@4.0.0 -D
```

### 2022/05/10 \* 静态资源文件打包

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
