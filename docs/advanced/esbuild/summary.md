# 调用总结

## transform API

`transform/transformSync` 对单个字符串进行操作，不需要访问文件系统。非常适合在没有文件系统的环境中使用或作为另一个工具链的一部分，它提供了两个参数：

```javascript
transform(str: string, options?: Config): Promise<Result>
transformSync(str: string, options?: Config): Result
```

1. `str`：字符串（必填），指需要转化的代码
2. `options`：配置项（可选），指转化需要的选项

常用配置：

```javascript
interface Config {
  define: object # 关键词替换
  format: string # js 输出规范（iife/cjs/esm）
  loader: string | object # transform API 只能使用 string
  minify: boolean # 压缩代码，包含删除空格、重命名变量、修改语法使语法更简练
  # 通过以下方式单独配置，上述功能
  minifyWhitespace: boolean # 删除空格
  minifyIdentifiers: boolean # 重命名变量
  minifySyntax: boolean # 修改语法使语法更简练
  sourcemap: boolean | string
  target: string[] # 设置目标环境，默认是 esnext（使用最新 es 特性）
}
```

```javascript
// transform.mjs

import * as esbuild from 'esbuild'
const code = `
interface User{
  name: string;
  age: number;
}
let x: number = 1;
const getUserInfo = (user: User) => {
  console.log(user.name);
  console.log(user.age);
}
getUserInfo({name: 'jack', age: 18});
`

let result = await esbuild.transform(code, {
  loader: 'ts',
  // minify: true,
  // minifyWhitespace: true,
  // sourcemap: true,

})
console.log(result)
```

## 命令行调用

```javascript
# 入口文件 esbuild xxx/index.ts
# --outfile=xxx/xxx/js 输出文件
# --outdir=xxx/ 输出目录
# --bundle 打包
# --minify 压缩
# --target=esnext
# --loader:.png=dataurl 将 png 转换成dataurl的形式
```

## JS代码调用



```javascript
Build API
const config = {};
await esbuild.build(config);
esbuild.buildSync(config); //同步方法
//esbuild.watch()
//esbuild.serve()
const ctx = await esbuild.context(config) esbuid v.0.17
//监听文件
await ctx.watch();
//开发服务器
await ctx.serve({});
//重新打包
await ctx.rebuild();
```





### build API



Build API调用对文件系统中的一个或多个文件进行操作。这使得文件可以相互引用，并被编译在一起（需要设置`bundle: true`）

```javascript
build(options?: Config): Promise<Result>
buildSync(options?: Config): Result
```

**常用配置：**

```javascript
// ./node_modules/esbuild/lib/main.d.ts

interface CommonOptions {
  absWorkingDir: string # 当前项目根目录，可通过process.cwd()设置
  bundle: boolean # 将所有源码打包到一起
  entryPoints: string[] | object # 入口文件，通过对象方式可以指定输出后文件名，和 webpack 类似
  outdir: string # 输出文件夹，不能和 outfile 同时使用；多入口文件使用 outdir
  outfile: string # 输出的文件名，，不能和 outdir 同时使用；单入口文件使用 outfile
  outbase: string # 每个入口文件构建到不同目录时使用
  define: object # define = {K: V}  在解析代码的时候用V替换K 
  platform: string # 指定输出环境，默认为 browser 还有一个值是 node，
  format: string # js 输出规范（iife/cjs/esm），如果 platform 为 browser，默认为 iife；如果 platform 为 node，默认为 cjs
  splitting: boolean # 代码分割(当前仅限 esm模式,还在迭代中...)
  loader: string | object # transform API 只能使用 string
  minify: boolean # 压缩代码，包含删除空格、重命名变量、修改语法使语法更简练。其实就是下面三个配置的整合体minifyWhitespace，minifyIdentifiers，minifySyntax
  minifyWhitespace: boolean # 删除空格
  minifyIdentifiers: boolean # 重命名变量
  minifySyntax: boolean # 修改语法使语法更简练
  sourcemap: boolean | string
  target: string[] # 设置目标环境，默认是 esnext（使用最新 es 特性）
  jsxFactory: string # 指定调用每个jsx元素的函数
  jsxFragment: string # 指定聚合一个子元素列表的函数
  assetNames: string # 静态资源输出的文件名称（默认是名字加上hash）
  chunkNames: string # 代码分割后输出的文件名称
  entryNames: string # 入口文件名称
  treeShaking: boolean # 默认为true
  tsconfig: string # 指定 tsconfig 文件
  publicPath: string # 公共路径
  write: boolean # 默认 false，对于cli和js API，默认是写入文件系统中，设置为 true 后，写入内存缓冲区
  inject: string[] # 将数组中的文件导入到所有输出文件中
  metafile: boolean # 生成依赖图 
}
```

### 加载器(loader)

esbuild加载器的作用与webpack中loader作用类似，都是对于某种类型的文件进行编译

#### 1. [js-loader](https://esbuild.github.io/content-types/#javascript)

这个加载器默认用于.js、.cjs和.mjs文件。.cjs扩展名被node用于CommonJS模块，而.mjs扩展名被node用于ECMAScript模块，尽管esbuild并没有对这两者进行区分。

esbuild支持所有现代JavaScript语法。然而，较新的语法可能不被旧的浏览器所支持，所以你可能想配置目标选项，告诉esbuild将较新的语法转换为适当的旧语法。

> esbuild并不支持ES5的转换，目前还不支持将ES6+语法转换为ES5。

#### 2. [ts-loader](https://esbuild.github.io/content-types/#typescript)

`.ts`默认情况下为、`.tsx`、`.mts`和文件启用此加载器`.cts`，这意味着 esbuild 内置支持解析 TypeScript 语法并丢弃类型注释。但是，esbuild*不*执行任何类型检查

#### 3. [jsx-loader](https://esbuild.github.io/content-types/#jsx)

[JSX是 JavaScript 的类似 XML 的语法扩展，是为](https://facebook.github.io/jsx/)[React](https://github.com/facebook/react)创建的。它旨在由您的构建工具转换为普通的 JavaScript。每个 XML 元素都成为一个普通的 JavaScript 函数调用。例如，以下 JSX 代码：

```javascript
import Button from './button'
let button = <Button>Click me</Button>
render(button)
```

将被转换为以下 JavaScript 代码：

```javascript
import Button from "./button";
let button = React.createElement(Button, null, "Click me");
render(button);
```

> .jsx和.tsx会默认开启此loader，如果你的文件是.js结尾的，那么必须手动声明loader，比如：loader: { '.js': 'jsx' },

#### 4. [json-loader](https://esbuild.github.io/content-types/#json)

对于.json文件，这个加载器是默认启用的。它在构建时将JSON文件解析成一个JavaScript对象，并将该对象作为默认导出

#### 5. [css-loader](https://esbuild.github.io/content-types/#css)

#### 6. [text-loader](https://esbuild.github.io/content-types/#text)

#### 7. [binary-loader](https://esbuild.github.io/content-types/#binary)

#### 8. [Base64-loader](https://esbuild.github.io/content-types/#base64)

#### 9. [dataurl-loader](https://esbuild.github.io/content-types/#data-url)

#### 10. [file-loader](https://esbuild.github.io/content-types/#file)

#### 11. [copy-loader](https://esbuild.github.io/content-types/#copy)

该加载程序会将文件复制到输出目录，并重写导入路径以指向复制的文件。

## Context API

context API 是[**esbuild v0.17.0**](https://github.com/evanw/esbuild/releases/tag/v0.17.0)版本新加入的API，此版本不向后兼容。context函数本身可以配置`interface CommonOptions`中的所有内容

context API 主要替换了之前可以直接使用esbuild对象调用的`serve`，`watch`等函数。现在`serve`，`watch`等函数要通过context函数调用之后的对象获取，并且他们都已**异步**的。

- [**Watch mode**](https://esbuild.github.io/api/#watch) 简单来说就是监听模式，当我们修改源文件的时候，会自动帮我们重建
- [**Serve mode**](https://esbuild.github.io/api/#serve) 启动本地开发服务器，提供最新构建的结果。注意，Serve mode会自动帮我们构建打包源文件，但是并不支持热重载
- [**Rebuild mode**](https://esbuild.github.io/api/#rebuild) 允许手动调用构建。当将 esbuild 与其他工具集成时这非常有用。

而且在以前，esbuild是不支持`serve`，`watch`函数一起使用的，这个版本之后，允许同时使用这两个功能。主要目的，其实就是为了**live load**，当文件系统上的文件发生更改时，浏览器会自动重新加载页面

esbuild是通过[服务器发送事件](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)来实现的**live load**,**服务器发送事件**是一种将单向消息从服务器异步传递到客户端的简单方法。服务模式现在提供一个`/esbuild`带有`change`事件的端点，每次 esbuild 的输出更改时都会触发该事件。因此，您现在可以实现简单的“实时重新加载”（即在编辑和保存文件时重新加载页面），如下所示：

```javascript
new EventSource('/esbuild').addEventListener('change', () => location.reload())
```

## 完整案例

**package.json**

```javascript
{
  ......其他省略
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "node ./esbuild.config.js production",
    "start": "node ./esbuild.config.js development"
  },
  "type":"module"
}

```

**esbuild.config.js**

```javascript
import esbuild from "esbuild";

//process是一个全局对象，argv返回的是一组包含命令行参数的数组。
//第一项为”node”，
//第二项为执行的js的完整路径，
//后面是附加在命令行后的参数
//console.log(process)

const productionMode = "development" !== process.argv[2];

//console.log(productionMode);

const ctx = await esbuild.context({
  // 当前项目根目录
  absWorkingDir: process.cwd(),
  // 输出环境 `node` 或 `browser`, 默认为 `browser`
  platform: "browser",
  // 模块格式，包括`esm`、`commonjs`和`iife`
  // 如果 platform 为 browser，默认为 iife；如果 platform 为 node，默认为 cjs
  format: "esm",
  // 静态资源名称,可以搭配loader使用，比如 ".png": "file"
  assetNames: "assets/[name]-[hash]",
  // 入口文件名称
  // entryNames: '[dir]/[name]-[hash]',
  // 摇树优化,
  treeShaking: true,
  // 指定 tsconfig 文件
  tsconfig: "./tsconfig.json",
  // 日志级别 `silent`(默认)、`verbose`、`debug`、`info`、`warning`、`error`
  logLevel: "info",
  publicPath: "/",
  //esbuild 在构建之前编辑源代码以删除某些构造,比如常见的debugger和console
  //目前esbuild也仅仅提供了这两个选项
  drop: productionMode ? ['debugger', 'console'] : [],
  // 入口文件列表，为一个数组
  entryPoints: ["src/app.tsx", "src/index.html"],
  // 是否需要打包，一般设为 true
  bundle: true,
  // 是否进行代码压缩
  minify: false,
  // 是否生成 SourceMap 文件
  sourcemap: true,
  // 指定语言版本和目标环境
  target: ["es2020", "chrome58", "firefox57", "safari11"],
  // 是否生成打包的元信息文件
  metafile: true,
  // 指定输出文件
  outdir: productionMode ? "./public/dist/" : "./dist/",
  // 指定loader
  loader: {
    ".html": "copy",
    ".svg": "dataurl",
    ".png": "file",
    // ".module.css": "local-css",
  },
});

if (productionMode) {
  ctx.rebuild();
  //释放资源
  ctx.dispose();
}
else { 
  await ctx.watch();
  await ctx.serve({
    port: 3000,
    host: "localhost",
    servedir: "./dist",
  }).then((server) => {
    console.log(`server: ${server.host}:${server.port}`)
  }).catch((err) => process.exit(1));
}
```

