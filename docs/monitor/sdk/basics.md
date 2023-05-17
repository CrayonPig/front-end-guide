# 基础搭建

基于此前 我们分析的监控系统的[SDK架构](../framework-sdk.md) ，我们决定采用`Lerna`作为管理多包工具，`Rollup`作为构建工具，当然，其他常用的基础配置也是少不了的 `TypeScript` + `ESLint` + `Husky` + `ESModule`等

## Lerna

[Lerna](https://www.lernajs.cn/) 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。

### 初始化项目

建议将Lerna 安装到全局环境中

```sh
npm install -g lerna
```

我这里安装完后，lerna版本是V6.6.2，接下来我们使用lerna进行初始化项目

```sh
mkdir beaconify && cd beaconify
lerna init
```

你的目录结构应该是如下结构：

```txt
- beaconify/
  - packages/
  - package.json
  - lerna.json
```

- `packages` 是 存放子包的目录，由 package.json 中的 workspaces 字段指定路径，也可以在`lerna.json` 中指定，默认为 packages

- `lerna.json`  是 lerna 项目的配置文件，它包含了多个子包的配置信息。
  - `$schema`：SON Schema 的一个关键字，用于指定当前 JSON 文件的架构（schema）文件。
  - `packages`：指定存放子包的目录，默认为 packages。
  - `version`：指定版本号的格式，默认为 independent，表示每个子包可以有独立的版本号。当设为 fixed 时，所有子包的版本号都必须一致。
  - `npmClient`：指定使用的 npm 客户端，默认为 npm。
  - `command`：指定执行命令的方式，默认为 run，表示使用 npm script 的方式来执行命令。
  - `useWorkspaces`：指定是否启用 yarn workspaces 特性，默认为 false。如果设置为 true，则不需要再使用 lerna bootstrap 安装依赖，而是直接使用 yarn install 安装即可。
  - `npmClientArgs`：指定传递给 npm 客户端的额外参数。
  - `ignore`：指定忽略的文件或目录，支持 glob 匹配。

### 添加子包

为方便后续环境的搭建，我们这里先新建两个子包 `core` 和 `utils`，以 `core`包为例，先执行命令

```sh
lerna create core
```

会出现提示让你填写一些资料，我们可以一路回车创建完毕后，手动在子包的 `package.json`中更改，也可以在创建过程中填写

```sh
# 填写包名
package name: (core) @beaconify/core 
# 版本号
version: (0.0.0) 0.0.1
# 描述
description: 
# 关键词 
keywords: 
# 主页
homepage: 
# 开源协议
license: (ISC) MIT
# 入口文件
entry point: (lib/index.js) 
# 绑定的git仓库
git repository: (https://github.com/CrayonPig/beaconify.git) 
```

创建完毕后，目录结构如下

```sh
- packages
  - core
    - __tests__ # 测试用例
      - core.test.js
    - lib # 代码目录
      - core.js # 入口
    - package.json
    - README.md
- lerna.json
- package.json
```

同样的，我们创建`utils` 子包，并lib下的文件都对应`package.json` 中的 `main` 入口文件字段的内容，将文件名重命名为index.js

```sh
- packages
  - core
    - __tests__ # 测试用例
      - core.test.js
    - lib # 代码目录
      - index.js # 入口
    - package.json
    - README.md
  - utils
    - __tests__ # 测试用例
      - utils.test.js
    - lib # 代码目录
      - index.js # 入口
    - package.json
    - README.md
- lerna.json
- package.json
```

### 子包调用

我们接下来使用 `core` 调用 `utils`的方法，首先在根目录下为 `core`安装依赖

```sh
lerna add @beaconify/utils --scope=@beaconify/core
```

表示为 @beaconify/core 的子包中安装 @beaconify/utils 包作为运行时依赖项。

安装成功后，在根目录中会出现 node_modules ， 里面有 @beaconify/utils 包

::: tip
当你在一个子包中安装依赖时，Lerna 会自动将该依赖项添加到根目录下的 package.json 文件中，并将该依赖项安装到根目录下的 node_modules 目录中。同时，Lerna 还会在当前子包中创建一个名为 node_modules 的符号链接，指向根目录下的 node_modules 目录。
:::

将 `core/lib/index.js` 修改为如下内容

```js
const utils = require('@beaconify/utils')

function core() {
  utils();
  console.log('Hello from core');
}

core()

module.exports = core;
```

将 `utils/lib/index.js` 修改为如下内容

```js
function utils() {
  console.log('Hello from utils');
}

module.exports = utils;
```

然后通过node执行 `core/lib/index.js`，成功打印两个日志后，代表引用成功

## Rollup

[Rollup](https://www.rollupjs.com/)是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用。常见的如`Vue.js`和`React.js`均是由 Rollup 打包构建的。

### 使用ESModule

 使用 ESModule 可以提供更好的模块化支持、静态代码分析、明确的依赖管理、命名空间隔离、动态导入和类型检查等优势。这些好处有助于提高代码的可读性、可维护性和性能，并提供更好的开发体验。除此之外，`Rollup`本身支持 ESModule，并且支持[`Tree-Shaking`](https://www.rollupjs.com/#tree-shaking)，可以对代码进行静态分析，将实际未使用用到的代码剔除。

  1. 将根目录的 package.json 文件的 type 属性改为 [module](../utils/package.html#type)
  2. 将 core 和 utils 包内容改为 ESModule 形式

### 添加执行脚本

1. 在项目中安装 Rollup, 我这里版本号是 `3.21.7`

  ```sh
  npm install rollup --save-dev
  ```

2. 根目录创建 scripts 文件夹，并创建 `rollup.dev.js` 文件
  
  ```js
    export default {
      input: 'packages/core/lib/index.js', // 入口文件
      output: {
        file: './dist/bundle.js', // 出口文件
        format: 'iife', // 生成文件格式，为方便调试暂时先写 iife，意为输出后bundle为自执行函数，适用于 <script> 标签
        name: 'beaconify', // 全局变量名
      },
    }
  ```

3. 根目录 package.json 添加一个 dev 命令， `-c, --config` 命令是制定配置文件，如果没有指定，则默认根目录 `rollup.config.js`
  
  ```js
  "scripts": {
    "dev": "rollup --config ./scripts/rollup.dev.js"
  },
  ```

接下来我们执行 `npm run dev` 命令，可以发现，在根目录下的dist中的确生成 `bundle.js` 文件，内容如下

```js
import { utils } from '@beaconify/utils';

function core() {
  utils();
  console.log('Hello from core');
}

export { core as default };
```

跟我们想象的不太一样， `@beaconify/utils` 包内的内容并没有被导出，只是做了一个引用。这是因为 `Rollup` 默认只会对 node_modules 目录中的文件做引用，如果需要导出，要使用额外插件 [`@rollup/plugin-node-resolve`](https://www.npmjs.com/package/@rollup/plugin-node-resolve)，至于[为什么不将 node-resolve 作为内置功能？](https://www.rollupjs.com/guide/faqs#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%B0%86-node-resolve-%E4%BD%9C%E4%B8%BA%E5%86%85%E7%BD%AE%E5%8A%9F%E8%83%BD)

``` sh
npm install @rollup/plugin-node-resolve --save-dev
```

修改 `rollup.dev.js` 文件

``` js
import resolve from '@rollup/plugin-node-resolve';

export default {
  input:'packages/core/lib/index.js', // 入口
  output: {
    file:'./dist/bundle.js', // 出口
    format: 'iife',
    name:'beaconify',
  },
  plugins: [resolve()]
}
```

再次执行 `npm run dev` 命令，看到输出文件变成了

```js
function utils() {
  console.log('Hello from utils');
}

function core() {
  utils();
  console.log('Hello from core');
}

export { core as default };
```

虽然我们已经定好标准使用 ESModule ，但我们无法保证项目中使用的所有的第三方库都是 ESModule，为了支持 Commonjs，需安装插件@rollup/plugin-commonjs

``` sh
npm install @rollup/plugin-commonjs --save-dev
```

在 `rollup.dev.js` 中添加

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'packages/core/lib/index.js', // 入口
  output: {
    file: './dist/bundle.js', // 出口
    format: 'iife',
    name: 'beaconify',
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
```

### 热更新

为了提高效率，在开发的时候，我们希望 rollup能自动监听文件的改动，并且因为我们 SDK 场景是用于浏览器，所以我们希望能像 webpack 一样，打开页面供我们调试。

针对监听文件的改动，Rollup 为我们提供了命令 `-w/--watch`, 表示监听 bundle 中的文件并在文件改变时重新构建

```js
"scripts": {
  "dev": "rollup -w --config ./scripts/rollup.dev.js"
},
```

打开页面调试，我们需要借助 `rollup-plugin-serve` 和 `rollup-plugin-livereload`, 这两个插件常常一起使用，`rollup-plugin-serve` 用于启动一个服务器，`rollup-plugin-livereload` 用于文件变化时，实时刷新页面

```sh
npm install rollup-plugin-serve --save-dev
npm install rollup-plugin-livereload --save-dev
```

修改 `rollup.dev.js` 文件

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'packages/core/lib/index.js', // 入口
  output: {
    file: './dist/bundle.js', // 出口
    format: 'iife',
    name: 'beaconify',
  },
  plugins: [
    resolve(),
    commonjs(),
    serve({
      open: true,
      contentBase: ['example', 'dist'],  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
      port: 8020   //端口号，默认10001
    }),    
    livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面
  ]
}
```

同时 根目录创建`example`文件夹，并添加`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<script src="./bundle.js"></script>
<body>
  
</body>
</html>
<script>
  beaconify()
</script>
```

最后执行 `npm run dev` 命令，可以发现可以自动打开浏览器，并且 控制台已经有输出

![控制台输出](@/assets/monitor/hotout.png)

我们手动更改 `core` 或 `utils` 的内容后，控制台的输出也会随之改变

<!-- ## TypeScript

为了提高代码维护性和可读性，我们将引入 `TypeScript`，此项功能依赖 `typescirpt`、`tslib`、`rollup-plugin-typescript2`

```sh
npm install rollup-plugin-typescript2 typescript tslib --save-dev
``` -->