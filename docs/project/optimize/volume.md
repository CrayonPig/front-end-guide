# 体积优化
前端体积优化指的是通过各种手段，减小前端资源（如JavaScript、CSS、图片等）的体积，从而提高页面的加载速度和用户体验。前端体积优化的重要性在于，随着前端技术的发展和用户对速度的要求越来越高，前端资源的体积已经成为影响页面性能的重要因素之一。

## 统计工具
同样的，针对于体积优化，也需要先利用统计插件来分析出构建结果中每个模块依赖的体积。开源社区提供了[webpack-bundle-analyzer
](https://www.npmjs.com/package/webpack-bundle-analyzer)作为分析工具。

Webpack Bundle Analyzer 是一个 Webpack 插件，可以帮助你分析打包后的代码包，可视化地展示各个模块的大小、占比等信息，帮助你找出代码包中的冗余代码、过大的模块等问题，进而优化你的代码。

使用 Webpack Bundle Analyzer 非常简单，只需要按照以下步骤即可：

1. 安装依赖
```bash
npm install --save-dev webpack-bundle-analyzer
```
2. 在 Webpack 的配置文件中引入该插件并添加到插件列表中：
```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```
3. 执行webpack命令，可以显示模块分析的结果

![分析结果](@assets/webpack-bundle-analyzer.gif)

图中模块所占面积越大，代表文件越大，每个模块内部又有需要小模块组成，只需要分析上图，找到体积大的模块分析，进行对应的优化即可减小代码体积。

除了以上简单使用方法外，Webpack Bundle Analyzer 还提供了丰富的配置选项，可以用来定制化你的分析报告。例如，你可以通过 analyzerMode 配置项来指定分析模式，有三种模式可供选择：
- server：启动一个 HTTP 服务器，以可视化的方式展示分析报告。
- static：生成一个 HTML 文件，以可视化的方式展示分析报告。
- disabled：禁用插件，默认为禁用。

你还可以通过其他配置选项来指定输出文件名、自定义报告标题、忽略某些文件等。具体配置方法请参考[官方文档](https://www.npmjs.com/package/webpack-bundle-analyzer)

## 资源压缩
浏览器在渲染页面之前需要从服务端拉取文件资源，文件体积越小，白屏等待时间就越短。为了提高资源传输速度，服务端在传输时会使用GZIP等压缩算法对资源进行压缩，从而减少网络传输时间。开发人员也可对文件中的内容进行压缩，例如，删除注释、消除无意义的换行和空格、删除console.log()等。
### webpack压缩
如果需要开启webpack的默认压缩功能，只需要将mode配置为production。
```js
module.exports = {
  mode: 'production'
};
```
webpack也提供了`optimization.minimizer`和`terser-webpack-plugin`让开发人员自定义压缩逻辑。
```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ...其他配置
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            // 在删除无用代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌已定义但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
          },
          output: {
            // 是否保留代码中所有注释
            comments: false,
          },
        },
      }),
    ],
  },
};

```


### HTML压缩
html-webpack-plugin是webpack中一个非常常用的插件，用于生成HTML文件，并自动引入webpack打包后的js和css资源。在此基础上，可以通过配置来实现对生成的HTML文件中引入的js、css、图片等资源进行压缩。

具体来说，可以通过html-webpack-plugin中的minify选项来配置资源压缩。该选项的默认值为false，需要手动设置为true才能开启资源压缩。同时，该选项还提供了一系列的子选项来实现对不同类型资源的压缩设置，如下所示：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...其他配置
  plugins: [
    new HtmlWebpackPlugin({
      // ...其他配置
      minify: {
        // 压缩HTML文件中的JS代码
        minifyJS: true,
        // 压缩HTML文件中的CSS代码
        minifyCSS: true,
        // 移除HTML文件中的注释
        removeComments: true,
        // 合并多余的空格
        collapseWhitespace: true,
        // 移除属性值中的引号
        removeAttributeQuotes: true,
        // 移除标签属性中多余的空格
        removeRedundantAttributes: true,
        // 简化布尔属性值
        useShortDoctype: true,
        // 移除空的属性
        removeEmptyAttributes: true,
        // 从style和link标签中移除type属性
        removeStyleLinkTypeAttributes: true,
        // 保留一个空格作为HTML标签的分隔符
        keepClosingSlash: true,
        // 在文档头部插入meta标签
        inject: true
      }
    })
  ]
};
```
### css压缩
css-minimizer-webpack-plugin 是一个用于压缩 CSS 的 Webpack 插件，可以与 optimize-css-assets-webpack-plugin 插件结合使用。在 Webpack 5 中，css-minimizer-webpack-plugin 已经成为了 Webpack 内置的压缩 CSS 的工具
```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
  },
};
```
### 图片压缩
image-webpack-loader是一个Webpack加载器，它可以将PNG、JPEG、GIF和SVG图像进行压缩处理。它可以用于Webpack的module.rules中，以便在打包时自动优化图像。
```js
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  // ...其他配置
  plugins: [
  // ...其他配置
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          // 压缩gif
          ['gifsicle', { interlaced: true }],
          // 压缩jpeg
          ['jpegtran', { progressive: true }],
          // 压缩png
          ['optipng', { optimizationLevel: 5 }],
          // 压缩svg
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false, // 设置为 true 会禁用 image-webpack-loader
            },
          },
        ],
      },
    ],
  },
};
```
在上面的示例中，我们使用了image-webpack-loader对图片进行了压缩处理。这里我们用到了image-minimizer-webpack-plugin插件来执行图片压缩的任务。在webpack配置文件中，我们通过配置ImageMinimizerPlugin实例来传递插件参数，其中minimizerOptions.plugins数组中的四个元素分别代表了对应的图片格式压缩方式，分别是gifsicle、jpegtran、optipng和svgo。

在module.rules数组中，我们针对png、jpeg、gif和svg格式的图片文件，使用了type为asset/resource的资源模块类型，并使用image-webpack-loader对图片进行了压缩处理。其中generator.filename属性指定了最终生成的图片文件名及路径，这里设置为images/[name][ext]表示将图片文件放在images目录下，并保留原始文件名及扩展名。

需要注意的是，由于图片压缩是一个比较耗费时间的过程，如果在开发环境中频繁修改图片文件，建议将image-webpack-loader的disable选项设置为true来禁用图片压缩，以提高开发效率。

## 提取公共代码
在前端开发中，我们通常会引入各种第三方库和框架，这些库和框架可能被多个模块所依赖。如果每个模块都将这些库和框架打包进去，那么就会造成代码冗余，导致代码体积增大，影响网站的加载速度。

提取公共代码是指将多个模块中相同的部分提取出来，打包成一个公共的文件，供多个模块共享使用。这样可以减小代码体积，提高网站的加载速度。

在webpack4之前，官方推荐使用CommonsChunkPlugin抽离公共依赖，从Webpack4开始，官方移除了CommonsChunkPlugin，改为内置公共模块抽离功能，并提交使用`optimization.splitChunks`。此处以optimization.splitChunks为例描述。

### 提取第三方库
第三方库是指由外部提供的公共库或框架，如jquery、react等。这些库往往比较大，而且会被多个模块所依赖，因此将它们单独打包是比较有意义的。
```js
// webpack.config.js
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};
```
其中，test 指定了匹配的文件路径，这里使用了正则表达式匹配了 node_modules 下的 react 和 react-dom。

name 指定了生成的 chunk 的名称，这里命名为 vendor。

chunks 制定了在哪些 chunk 中引入的模块才能被提取出来，这里使用了 'all' 表示所有 chunk 都可以引用。

通过以上配置，我们就可以将 React 和 ReactDOM 提取为公共库，并分离打包到单独的文件中了。

### 提取公共业务代码
业务代码中也可能存在相同的部分，如公共的工具函数、公共的样式等。将这些公共业务代码提取出来也可以减小代码体积。
```js
// webpack.config.js
module.exports = {
  // ...其他配置
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]src[\\/]js[\\/]/,
          name: 'commons',
          chunks: 'all',
        },
      },
    },
  },
};
```
在上述配置中，cacheGroups属性下的commons属性用于配置要提取的公共业务代码。

test属性指定了匹配的规则，这里使用正则表达式匹配src/js目录下的所有模块。

name属性指定了提取出来的chunk的名称，这里为commons。

chunks属性指定了需要提取公共代码的范围，这里为'all'表示提取所有chunk中符合规则的模块。

配置完成后，在打包时，webpack将会自动提取src/js目录下的所有模块，将它们打包到名为commons的chunk中。


需要注意的是，optimization.splitChunks配置项是用于提取公共代码的，而optimization.runtimeChunk配置项是用于提取运行时代码的。在生产环境中，为了利用浏览器的缓存机制，可以将运行时代码单独提取出来，避免重复加载。配置如下：
```js
module.exports = {
  // ...其他配置
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]src[\\/]js[\\/]/,
          name: 'commons',
          chunks: 'all',
        },
      },
    },
  },
};
```
在上述配置中，runtimeChunk属性用于配置提取运行时代码的规则，这里将运行时代码打包到名为runtime的chunk中。

## Tree Shaking
Tree Shaking 是指在构建时去除 JavaScript 中未使用的代码，可以大幅度减少打包后的文件体积，提高应用的加载速度。

在 Webpack 中，Tree Shaking 是通过静态分析代码的方式实现的。只有被引用过的代码才会被保留，未被引用的代码将被标记为无效代码，被 Webpack 剔除。而这种方式依赖于 ES6 模块化的静态结构，因为 ES6 模块化是静态的，所以可以进行静态分析，剔除未使用的代码。

```js
// math.js
export const square = n => n * n;
export const cube = n => n * n * n;

// index.js
import { cube } from './math.js';
console.log(cube(3));
```

在上面的示例中，我们只引入了 cube 函数，那么 square 函数就会被标记为无效代码，最终被 Webpack 剔除，只保留了引入的 cube 函数。

使用 Tree Shaking 需要注意以下几点：

- Tree Shaking 只支持 ES6 模块化的静态引入方式，对于动态引入的代码无法进行分析。
- Webpack 会对所有代码进行处理，包括引入的第三方库。如果第三方库使用了 CommonJS 规范导出，就不能进行 Tree Shaking。解决办法是使用 sideEffects 字段将其标记为副作用代码。
- 在使用 Webpack 4 及以上版本时，不需要再进行额外配置，因为默认开启了 Tree Shaking。
- 在使用 Webpack 3 或更早版本时，需要配置 UglifyJSPlugin 插件进行 Tree Shaking。在配置 UglifyJSPlugin 插件时，需要设置 uglifyOptions.compress.warnings: false，否则会出现一些警告信息。

## Scope Hoisting
Scope Hoisting是Webpack 3引入的一项功能，用于优化Javascript打包后的代码体积和性能。它通过静态分析模块依赖关系，将具有依赖关系的模块打包到同一个函数作用域中，消除模块之间的闭包包装代码，从而减少了打包后的代码量，提高了性能。

在Webpack 4及以上版本中，Scope Hoisting已经成为默认功能，不需要进行额外的配置。

## WebP
WebP是一种由谷歌推出的图片格式，可以有效地减小图片的体积，从而提升网站的加载速度。WebP的压缩率比PNG和JPEG更高，因此可以显著地减小图片文件的大小，同时不会影响到图片的质量。此外，WebP支持透明度和动画，也可以在各种环境下使用，包括Web、Android和iOS等移动端平台。

与JPEG相比，WebP可以减小图片文件大小高达40%，而且可以保持相同的视觉质量。与PNG相比，WebP可以减小文件大小高达30%，同样可以保持相同的视觉质量。这意味着，使用WebP格式的图片可以使网站更快地加载，提高用户的体验，尤其是在移动端设备上。

目前，WebP格式已经被广泛地应用于各种网站和应用程序中。大多数现代浏览器都支持WebP格式，包括Chrome、Firefox、Opera和Edge等，同时也有一些工具和库可以用于将图片转换为WebP格式，例如cwebp和sharp等。