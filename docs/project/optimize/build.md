# 构建优化
前端构建速度优化是一个非常重要的主题，因为随着前端应用程序的复杂性增加，构建时间也会变得越来越长。

## 统计工具
既然要优化构建速度，那么第一步就是分析出每个流程构建花费的时间，从而找到当前构建速度的性能瓶颈。开源社区提供了[speed-measure-webpack-plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin)作为分析工具。

`speed-measure-webpack-plugin` 是一个用于测量 webpack 打包时间的插件。它能够帮助开发者分析 webpack 打包过程中每个 loader 和 plugin 所花费的时间，以及每个阶段的耗时情况。

使用该插件，可以快速找到打包速度慢的原因，并针对性地进行优化。同时，它还可以帮助开发者比较不同构建配置的打包速度，从而选取最优的构建配置。
1. 安装speed-measure-webpack-plugin插件：
```bash
npm install --save-dev speed-measure-webpack-plugin
```
2. 在webpack.config.js中添加插件：

```js
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
  // webpack 配置
});

module.exports = webpackConfig;
```
3. 运行Webpack打包命令，观察命令行输出的构建时长分析结果，根据结果进行优化。
![speed-measure-webpack-plugin](@assets/speed-measure-webpack-plugin.png)

在上述示例中，SpeedMeasurePlugin 的 wrap 方法会返回一个新的 webpack 配置，该配置会在构建过程中记录每个阶段的耗时，并输出详细的统计信息。

除了测量 webpack 打包时间之外，speed-measure-webpack-plugin 还支持以下功能：
- 测量插件和 loader 的性能；
- 输出详细的统计信息；
- 支持与其他 webpack 插件和工具链集成。

::: tip
由于 speed-measure-webpack-plugin 本身会增加一定的运行时开销，因此在生产环境中建议禁用该插件。
:::

## 避免无意义解析
避免无意义的解析可以提高 Webpack 的构建速度。在 Webpack 构建过程中，需要遍历整个依赖关系图，对每个模块进行解析和编译，这个过程是比较耗时的。如果存在无意义的解析，就会造成不必要的时间浪费。

例如，如果某些文件没有发生改变，但是仍然被解析了，这个过程就是无意义的解析。在构建大型项目时，这种无意义的解析会极大地降低构建速度，因此我们需要尽可能地避免无意义的解析。

### noParse与IgnorePlugin
在 webpack 中，当使用模块时，webpack 会分析每个模块的依赖关系，如果依赖的模块也需要被打包进去，那么 webpack 会递归地分析和打包它们。然而，对于某些模块，由于它们很大而且已经打包好了，所以再次打包它们是没有意义的，这时候可以使用 noParse 和 IgnorePlugin 两个配置项来避免对它们的无意义解析。

noParse 配置项告诉 webpack 在解析时跳过对某些模块的递归解析和分析，即使它们是被 require 或 import 的，例如 jQuery 和 React 这些已经打包好的库文件。
```js
const webpack = require('webpack');

module.exports = {
  // ...
  module: {
    noParse: /jquery/,
    rules:[]
  }
};
```
IgnorePlugin 插件告诉 webpack 忽略某些特定的模块或目录，这些模块或目录将不会被打包进最终的构建结果中，可以在构建时提高速度和减小文件大小。例如不需要多语言时，忽略 moment.js 中的 locale 目录
```js
const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
```
需要注意的是，noParse 和 IgnorePlugin 都只能避免对特定模块的无意义解析，但不能避免对其他模块的解析和打包。另外，使用 noParse 和 IgnorePlugin 时需要注意其使用的条件和时机，否则可能会出现一些意外的问题。

### 优化resolve

Webpack 中 resolve 配置用于配置 Webpack 如何寻找模块所对应的文件，即解析模块请求的过程。在实际应用中，由于模块文件的数量庞大，当解析模块请求时，Webpack 可能会花费大量的时间来查找模块，从而导致构建速度变慢。因此，优化 resolve 配置是提高 Webpack 构建性能的一种方式。

下面是几种优化 resolve 配置的方法：

1. 减少 resolve.modules 配置项中的目录数量：配置模块查找路径的时候，尽量少指定绝对路径，减少路径查找次数。例如，我们可以将所有的模块都放在项目根目录下的 src 目录中，然后在 resolve.modules 配置项中只指定 src 目录，Webpack 会自动在 src 目录下查找模块。
2. 减少 resolve.extensions 配置项中的后缀名数量：当解析模块请求时，Webpack 会根据 resolve.extensions 中的配置尝试使用这些后缀名来查找模块文件。因此，如果 resolve.extensions 中配置的后缀名过多，Webpack 在查找模块时可能需要遍历很多不必要的文件，从而导致构建速度变慢。建议在 resolve.extensions 中只配置项目中实际使用的后缀名。
3. 减少 resolve.alias 配置项中的路径数量：如果我们在代码中经常使用一些路径比较长的模块，可以通过在 resolve.alias 配置项中设置别名的方式来缩短这些路径。这样可以减少 Webpack 查找模块时需要遍历的文件数量，从而提高构建速度。

```js
module.exports = {
  //...
  resolve: {
    extensions: ['.js', '.jsx'], // 指定导入时可省略的文件后缀名
    alias: {
      '@': path.resolve(__dirname, 'src'), // 配置别名加速导入
    },
    modules: [
      'node_modules', // 指定node_modules目录，减少搜索范围
      path.resolve(__dirname, 'src'), // 指定src目录，减少搜索范围
    ],
  },
  //...
}
```

###  DllPlugin 和 DllReferencePlugin
`DllPlugin` 和 `DllReferencePlugin` 是 Webpack 中用于优化打包速度的插件。

`DllPlugin` 插件用于把第三方库（如 React、Vue 等）单独打包成一个或多个动态链接库（Dynamic Link Library, DLL），这些 DLL 包可以在项目打包时不需要再次被编译，从而加快了打包速度。通常情况下，第三方库很少变动，将其单独打包成 DLL 可以减少不必要的编译时间，提高项目的构建效率。

`DllReferencePlugin` 插件用于在项目打包时引用已经生成的 DLL 文件。使用该插件可以避免在项目构建时重新编译第三方库，从而减少构建时间。
下面是一个使用 DllPlugin 和 DllReferencePlugin 的示例：

1. 在 webpack 配置文件中添加 DllPlugin 插件配置：
```js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    // 将所有需要单独打包的第三方库都写在一个数组中
    vendors: ['react', 'react-dom', 'lodash'],
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name].dll.js',
    // 使用 DLLPlugin 时必须要制定一个全局变量的名字，该变量对应的是动态链接库中的模块变量
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'dll/[name].manifest.json'),
    }),
  ],
};
```
2. 在项目打包时，使用 DllReferencePlugin 引用已经生成的 DLL 文件：

```js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dll/vendors.manifest.json'),
    }),
  ],
};
```
在项目打包时，DllReferencePlugin 会先去查找对应的 vendors.manifest.json 文件，然后根据该文件中的映射关系，将需要引用的 DLL 文件添加到打包文件中。

需要注意的是，使用 DllPlugin 和 DllReferencePlugin 插件也需要考虑一些问题，例如 DLL 文件的版本更新、动态链接库的引用顺序等。


## 使用缓存
在webpack中，通过使用缓存可以有效地优化构建速度。
### 全局缓存
Webpack内置了缓存机制，可以缓存打包过程中的模块依赖、编译过程等内容，从而加快重新构建的速度。在webpack5中，可以使用cache选项来开启缓存。
```js
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    // 缓存目录，可选
    cacheDirectory: path.resolve(__dirname, '.webpack_cache'),
  },
};
```
其中，type选项可以选择使用何种类型的缓存，目前支持memory和filesystem两种类型，默认为memory。filesystem类型的缓存会把缓存内容存储到磁盘上，可以避免由于内存不足导致缓存失效的问题。

另外，在使用webpack-dev-server时，也可以开启缓存。可以在启动命令中添加--cache选项，如下所示：
```bash
webpack-dev-server --cache
```
这样就会开启缓存，加速开发过程中的热更新。

### loader缓存
在webpack构建过程中，有些loader会消耗大量的时间。针对这一情况，开源社区将[cache-loader](https://www.npmjs.com/package/cache-loader)作为解决方案。

cache-loader是webpack中的一个loader，它可以在构建过程中缓存模块的编译结果，提高构建速度。
1. 安装cache-loader包：
```bash
npm install cache-loader --save-dev
```
2. 在webpack配置文件中，为需要使用缓存的loader添加cache-loader
```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['cache-loader', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
```
在上述代码中，cache-loader被放置在了babel-loader之前。这样，在使用babel-loader时，cache-loader会先检查是否有缓存结果，如果有，则直接返回结果，如果没有，则执行babel-loader的编译过程，并将结果缓存下来。

注意，为了更好地使用缓存，需要在cache-loader后面添加babel-loader等非纯函数的loader。

::: tip
在保存和读取缓存文件时，cache-loader自身也有额外的性能开销，所以建议只对性能开销较大的loader使用此loader
:::

### TypeScript 增量编译模式
TypeScript增量编译模式（incremental mode）是指在一次编译中只编译发生变化的文件，而不是重新编译整个项目，从而提高编译速度。在增量编译模式下，TypeScript会根据不同文件之间的依赖关系来判断哪些文件需要重新编译。

增量编译模式需要在tsconfig.json中进行配置，通过设置"incremental": true来启用。启用增量编译模式后，TypeScript会生成一个.tsbuildinfo文件来记录每个文件的编译状态，以便下次编译时进行增量编译。
```json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./.tsBuildInfo",
    "outDir": "./dist",
    "rootDir": "./src",
    "module": "commonjs",
    "target": "es5"
  }
}
```
::: tip
增量编译模式只适用于本地文件系统，不适用于远程文件系统或网络文件系统，因为这些系统无法保证文件的修改时间。
:::

## 并行构建
### webpack4以下
在 webpack以下版本中，并行构建需要使用第三方插件[HappyPack](https://www.npmjs.com/package/happypack)等，以实现多线程处理。

HappyPack可以将一个耗时的Loader的处理过程交给Worker线程池处理，从而实现多线程处理任务。HappyPack的配置比较简单，只需要对需要多线程处理的Loader进行一些简单的配置即可。
```js
const HappyPack = require('happypack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'happypack/loader?id=js',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'js',
      loaders: ['babel-loader?cacheDirectory=true'],
      threads: 4 // 设置4个worker线程
    })
  ]
};
```
::: tip
HappyPack仅适用于对计算密集型任务进行并行处理的场景，对于I/O密集型任务（如读写文件）效果不明显。此外，HappyPack会占用额外的内存和CPU资源，如果Worker线程池数量过多，也会导致性能下降。因此在使用HappyPack时需要注意合理调整线程池数量，根据具体场景进行优化。
:::

### webpack4
由于HappyPack作者对js的兴趣逐步丢失，所以之后维护将变少，webpack4.27.0及之后推荐使用[thread-loader](https://www.npmjs.com/package/thread-loader)

thread-loader 是一个用于 Webpack 的 loader，它会将其他 loader 的执行分配到一个 worker pool 中的线程池中，从而实现并行构建。和 HappyPack 相比，thread-loader 更加轻量级，因为它只是一个 loader 而不是一个 plugin。

```js 
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'thread-loader',
          'babel-loader'
        ],
        // 控制并发数，根据电脑配置调整
        options: {
          workers: 2
        }
      }
    ]
  }
};
```
在上面的配置中，thread-loader 会将所有 .js 文件的处理分配给一个 worker pool 中的线程池，同时可以通过 options 选项控制并发数。
::: tip
并不是所有的 loader 都能够并行处理。只有耗时较长、不涉及 I/O 操作的 loader 才适合进行并行处理，如 babel-loader、ts-loader 等。

另外，由于并行处理可能会占用过多的 CPU 资源，因此在使用时需要根据实际情况进行配置，以避免对系统造成影响。
:::
### webpack5 

Webpack 5除`thread-loader`之外提供了`parallel-webpack`插件实现并行构建，可以提高构建速度。

`parallel-webpack`可以在不同进程中运行webpack以加快构建速度。安装该插件后只需将mode选项设置为parallel即可开启并行构建。

```js
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
  mode: 'parallel',
  plugins: [
    new ParallelUglifyPlugin({
      // 选项
    })
  ]
};
```
::: tip
由于parallel-webpack的worker本身也存在性能开销。所以并不适用于所有项目，当项目非常小且构建时间很短时，并行构建反而会降低构建速度。同时，该插件也不支持所有webpack插件，需要进行测试和适配。
:::