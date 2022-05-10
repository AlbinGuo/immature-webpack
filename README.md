### 2022/05/10 [样式打包]

* 使用 loader 打包静态资源（css 样式）& 自动添加样式前缀-webkit-等
* 打包字体文件、xml、csv等格式的文件
```npm
npm install --save-dev csv-loader xml-loader
```
```json
{
  test: /\.(csv|tsv)$/i,
  use: ['csv-loader'],
},
{
  test: /\.xml$/i,
  use: ['xml-loader'],
},
```