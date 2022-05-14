https://webpack.js.org

### 环境变量的使用

### Shimming

### Webpack 与浏览器缓存

### css 文件的代码分割

### 打包分析，preLoading, preFetching

```javascript
···
splitChunks: {
  splitChunks: {
    chunks: 'async'
  }
}
···
```

- 魔法注释【带宽空闲时会偷偷的加载<font style='color:red;'>魔法注释</font>的代码】

```javascript
/*webpackPrefetch: true*/
document.addEventListener('click', () => {
  import(/*webpackPrefetch: true*/'./click.js').then((default: func) => {
    func()
  })
})
```

### Lazy Loading 懒加载

### splitChunksPlugin

```javascript
...
optimization: {
    usedExports: true, // 开启tree-shaking : 对没有被使用的模块进行删除【development模式下】
    splitChunks: {
      chunks: 'all', // 对所有的模块进行拆分
      minSize: 30000, // 模块大于30k就拆分
      maxSize: 50000, // 模块大于0k就拆分; eg. 如果引入的包大小是1M，则拆分成20个50k的子包
      minChunks: 1, // 当文件被引用1次时，进行拆分
      maxAsyncRequests: 5, // 拆分前最大的并行请求数
      maxInitialRequests: 3, // 拆分前最大的初始请求数
      automaticNameDelimiter: '~', // 拆分后的文件名之间的连接符
      name: true, // 拆分后的文件名
      cacheGroups: { // 缓存组
        vendors: { // 将node_modules中的模块拆分出来
          test: /[\\/]node_modules[\\/]/, // 如果是从mode_modules引入的包，则打包到vendors.js中
          priority: -10,    // 打包优先级
          filename: 'vendors.js'
        },
        default: { // 默认缓存组
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,   // 如果之前打包过了，不在打包，使用之前已经打包过的文件
          filename: 'common.js'
        }
      }

    }
  },
...
```

### Code Spliting 代码分割

- 同步代码分割

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

- 异步代码分割

```javascript
function getComponent() {
  return import('loadsh').then(({ default: _ }) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['aa', 'bb', 'cc'], '~')
    return element
  })
}

getComponent().then((element) => {
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
