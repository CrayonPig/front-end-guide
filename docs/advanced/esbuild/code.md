# 代码调用

当我们需要传递很多参数的时候，更推荐使用 `esbuild` 的 `JavaScript API`， 也就是代码调用的方式

`esbuild` 对外暴露了一系列的 API，主要包括两类: `Build API` 和 `Transform API`，我们可以在 `Nodejs` 代码中通过调用这些 API 来使用 `esbuild` 的各种功能。

## Build API

`Build API` 主要用来进行项目打包，包括 `build`、 `buildSync` 和 `context` 三个方法。

`build` 和 `buildSync` 都是用来执行构建操作的，它们的区别主要在于是否异步执行。`build` 适用于大多数场景, 尤其是那些需要异步处理或在并发任务中使用时。比如在 Node.js 中编写复杂的构建脚本时，你可能会希望异步处理多个任务，以提高效率。`buildSync` 适用于那些需要同步执行构建任务的场景，通常是在脚本简单、希望一步完成且不需要处理异步任务的情况下使用。在实际使用中，建议使用`build`，通过异步提高性能。

在项目根目录下创建 `esbuild.config.mjs` 文件来进行处理

```javascript
import esbuild from "esbuild";

esbuild.build({
  // 入口文件列表，为一个数组
  entryPoints: ['./src/App.tsx'],
  // 是否需要打包，一般设为 true
  bundle: true,
  // 是否进行代码压缩
  minify: false,
  // 是否生成 SourceMap 文件
  sourcemap: true,
  // 指定语言版本和目标环境
  target: ['es2020', 'chrome58', 'firefox57', 'safari11'],
  //输出目录
  outdir: './dist',
  // 指定loader
  loader: {
    ".svg": "dataurl",
  }
})
```
我们重新组织下之前的代码，增加其复杂度

```javascript
// src/App.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

const App = () => (<div>
  <h1>Hello World!</h1>
  <Comp1 />
  <Comp2 />
</div>);

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(<App />)
```

```javascript
// components/Comp1.tsx
import React from 'react';
export default () => { 
  return (<>
    <h1>Comp1</h1>
    <ul>
      <li>vite</li>
      <li>esbuild</li>
      <li>rollup</li>
    </ul>
  </>)
}
```

```javascript
// components/Comp2.tsx
import React from 'react';
import logo from "../assets/react.svg"

export default () => { 
  return (<>
    <h1>Comp2</h1>
    <img src={logo} />
  </>)
}
```

然后我们利用`node`进行构建

```javascript
node esbuild.config.mjs
```

构建完成后，可以看到新增了一个`dist`文件夹，里面有两个构建好的文件

```
dist
├── App.js
└── App.js.map
```
为了验证构建好的文件，我们可以用 `index.html` 去调用对应的js文件即可

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script src="dist/app.js"></script>
</body>
</html>
```

利用`http-server`运行一下

```javascript
 npx http-server -o -c-1
// -o 立即打开浏览器
// -c-1 清空http-server缓存
```

### 引入css

基础构建功能完成后，我们尝试引入 `css`，首先在目录中增加 `style.css` 文件

```javascript
// src/style.css
body{
  color:red;
  font-size:26px;
}
.title{
  color:blue;
  font-size:40px;
}
```

然后在 `App.tsx` 中引入


```javascript
// App.tsx
import "./style.css"

const App = () => (<div>
  <h1 className="title">Hello World!!</h1>
  <Comp1 />
  <Comp2 />
</div>);
```

然后重新运行构建命令，查看构建后的文件

```
dist
├── App.css
├── App.css.map
├── App.js
└── App.js.map
```

> 最后打包出来的css文件名和app组件同名，所以最好css的名字不要和组件同名。

同样的，我们将 `css` 文件，挂载到 `html` 中

```html
<link rel="stylesheet" href="dist/app.css">
```

如果是在其他组件内引入的css，一样会打包到app.css中，比如在`Comp1.tsx`中引入css

```javascript
// components/comp.css
ul{
  list-style: none;
}
li{
  border: 1px solid #ccc;
}

// components/Comp1.tsx
import React from 'react';
import "./comp.css"

export default () => { 
  return (<>
    <h1>Comp1</h1>
    <ul>
      <li>vite</li>
      <li>esbuild</li>
      <li>rollup</li>
    </ul>
  </>)
}
```

我们也可以引入CSS modules预处理器，以便组件的css样式与全局css样式冲突

```javascript
// components/comps.module.css
.title{
  color:yellow;
}

// components/Comp2.tsx
import React from 'react';
import logo from "../assets/react.svg"
import comps from "./comps.module.css";

export default () => { 
  return (<>
    <h1 className={comps.title}>Comp2</h1>
    <img src={logo} />
  </>)
}
```


需要在配置中加上`css module` 的`loader`加载器

```javascript
loader: {
	".module.css": "local-css",
},
```

### 引入Html

之前都是直接将html写死在打包好的文件夹中，其实也可以直接打包已有的html文件

在src目录下创建index.html文件

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="./App.css" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
</body>
<script src="./App.js"></script>
</html>
```

```javascript
import esbuild from 'esbuild';
esbuild.build({
  // 入口文件列表，为一个数组
  entryPoints: ['src/App.tsx','src/index.html'],
  // 是否需要打包，一般设为 true
  bundle: true,
  // 是否进行代码压缩
  minify: false,
  // 是否生成 SourceMap 文件
  sourcemap: true,
  // 指定语言版本和目标环境
  target: ['es2020', 'chrome58', 'firefox57', 'safari11'],
  // 是否生成打包的元信息文件
  metafile: true,
  // 指定输出文件
  outdir: './dist',
  // 指定loader
  loader: {
    ".html": "copy",
    ".module.css": "local-css",
    ".svg": "dataurl"
  }
})
```


### [插件](https://esbuild.github.io/plugins/#finding-plugins)

Esbuild 的时候难免会遇到一些需要加上自定义插件的场景，并且 Vite 依赖预编译的实现中大量应用了 Esbuild 插件的逻辑，你可以到[现有 esbuild 插件列表](https://github.com/esbuild/community-plugins)中去查找已有的esbuild插件，比如，之前对于图片和css的处理。[内联图像插件](https://github.com/natrim/esbuild-plugin-inline-image)，[css插件](https://github.com/Inqnuam/esbuild-plugin-class-modules)

```javascript
// 导入
npm install -D esbuild-plugin-inline-image
npm install -D esbuild-plugin-class-modules

// 使用
import inlineImage from "esbuild-plugin-inline-image";
import classModules from "esbuild-plugin-class-modules";

esbuild.build({
  ...
  plugins: [
    ...
    inlineImage(),
    classModules()
  ]
  ...
});
```

### 元数据分析

`esbuild.build`是一个异步函数，我们还可以拿到这个函数的返回值，根据这个返回值，我们还能进行元数据的分析

```javascript
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
(async () => { 
  const result = await esbuild.build({
    // 入口文件列表，为一个数组
    entryPoints: ['src/app.tsx'],
    // 是否需要打包，一般设为 true
    bundle: true,
    // 是否进行代码压缩
    minify: false,
    // 是否生成 SourceMap 文件
    sourcemap: true,
    // 指定语言版本和目标环境
    target: ['es2020', 'chrome58', 'firefox57', 'safari11'],
    // 是否生成打包的元信息文件
    metafile: true,
    // 指定输出文件
    outfile: './public/dist/app.js',
    // 指定loader
    // loader: {
    //   ".svg": "dataurl",
    // },
    plugins: [
      inlineImage()
    ]
  })

  console.log(result);

  // 打印详细的元信息
  const text = await esbuild.analyzeMetafile(result.metafile, {
    verbose: true, 
  });

  console.log(text);
})();
```

### context

在项目打包方面，除了`build`和`buildSync`，Esbuild 还提供了另外一个比较强大的 API——`context`

`context`为我们提供了三种可以增量构建的API，注意`context`和下面的API**都是异步的**

- [**Watch mode**](https://esbuild.github.io/api/#watch) 简单来说就是监听模式，当我们修改源文件的时候，会自动帮我们重建
- [**Serve mode**](https://esbuild.github.io/api/#serve) 启动本地开发服务器，提供最新构建的结果。注意，Serve mode会自动帮我们构建打包源文件，但是并不支持热重载
- [**Rebuild mode**](https://esbuild.github.io/api/#rebuild) 允许手动调用构建。当将 esbuild 与其他工具集成时这非常有用。

```javascript
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import classModules from "esbuild-plugin-class-modules";

(async () => {
  const ctx = await esbuild.context({
    // 入口文件列表，为一个数组
    entryPoints: ["src/app.tsx","src/index.html"],
    // 是否需要打包，一般设为 true
    bundle: true,
    // 是否进行代码压缩
    minify: false,
    // 是否生成 SourceMap 文件
    sourcemap: true,
    // 指定语言版本和目标环境
    target: ["es2020", "chrome58", "firefox57", "safari11"],
    // 指定输出文件
    // outfile: "./dist/app.js",
    outdir: "./dist",
    loader: {
      ".html": "copy",
    },
    plugins: [inlineImage(),classModules()],
  });

  // await ctx.watch();

  ctx
    .serve({
      servedir: "./dist",
      port: 8000,
      host: "localhost",
    })
    .then((server) => {
      console.log(`server is running at ${server.host}:${server.port}`);
    });
})();
```

### Live reload

实时重新加载是一种开发方法，您可以在浏览器与代码编辑器同时打开并可见。当您编辑并保存源代码时，浏览器会自动重新加载，并且重新加载的应用程序版本包含您的更改。这意味着您可以更快地迭代，因为您不必在每次更改后手动切换到浏览器、重新加载，然后切换回代码编辑器。

不过，esbuild并没有给我们提供实时重新加载的API，但是可以通过组合[监视模式Watch mode](https://esbuild.github.io/api/#watch)（和[服务模式Serve mode](https://esbuild.github.io/api/#serve)加上少量客户端 JavaScript 来构建实时重新加载仅在开发期间添加到应用程序的代码。

配置代码还是之前的不变，只是`watch()`和`serve()`函数同时打开，然后只需要在客户端html中加入下面的js代码即可

```javascript
<script type="module">
	new EventSource('/esbuild').addEventListener('change', () => location.reload())
</script>
```

## Transform API

`Transform` API 的核心是 `transform` 方法，它可以将一段代码从一种格式转换为另一种格式，或者应用特定的编译器选项。下面是如何使用它的基本示例。

```javascript
const esbuild = require('esbuild');

const code = `
  import { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
`;

esbuild.transform(code, {
  loader: 'jsx',
  // 指定目标 ECMAScript 版本
  target: 'es2015',
  // 启用代码压缩
  minify: true,
}).then(result => {
  console.log(result.code);
}).catch(() => process.exit(1));
```

上述代码执行后，会输出转换和压缩后的代码

```
import{useState as o}from"react";function e(){const[t,n]=o(0);return React.createElement("button",{onClick:()=>n(t+1)},t)}
```
