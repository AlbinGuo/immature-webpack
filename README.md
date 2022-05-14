https://webpack.js.org

### Code Spliting 代码分割
* 同步代码分割
```javascript
 ...
 optimization: {
    usedExports: true, 
    splitChunks: {
      chunks: 'all', // 对所有的模块进行拆分
    }
  },
  ...
```
* 异步代码分割
```javascript
function getComponent() {
  return import('loadsh').then(({default: _}) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['aa', 'bb', 'cc'], '~')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})
```

### webpack-merge

```javascript
webpack.common.js
合并
webpack.dev.js
webpack.prod.js
```

### Tree-shaking

- development 模式

```JavaScript
...
 mode: 'development',
 devtool: 'cheap-moudle-eval-source-map',
optimization: {
    usedExports: true, // 开启tree-shaking : 对没有被使用的模块进行删除【development模式下】
  }
  ...
```

- production 模式

```JavaScript
...
 mode: 'production',
 devtool: 'cheap-moudle-source-map'
 // 不需要配置optimization
  ...
```

### \* Hot Moudle Replacement [HMR]

```javascript
...
devServer: {
  hot: true, // 热更新 HMR
  hotOnly: true, // 即使HMR不生效，也不跳转
}
...

...
plugins:[
  new webpack.HotModuleReplacementPlugin(), // 热更新
]
...
```

```javascript
if (module.hot) {
  module.hot.accept('./hmr/number', () => {
    const num = document.getElementById('number')
    document.body.removeChild(num)
    number()
  })
}
```

### \* WebpackDevServer

```JavaScript
devServer: {    // 执行webpack-dev-server
    contentBase: './dist', // 告诉服务器从哪里提供内容，只有在想要提供静态文件时才需要
    open: true, // 自动打开浏览器
    hot: true, // 热更新 HMR
    hotOnly: true, // 即使HMR不生效，也不跳转
    // port: 3000 // 设置端口
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //   }
    // }
  },
```

### \* source-map

- devtool
  > 1. none : 不开启 source-map
  > 2. source-map : 开启 source-map，会显示 source-map 文件
  > 3. inline-source-map : 不显示 source-map 文件，该文件已经被打包至 bundle.js 中
  > 4. cheap-moudle-eval-source-map 【适用于 mode: development 环境】
  > 5. cheap-moudle-source-map 【适用于 mode: product 环境】

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
