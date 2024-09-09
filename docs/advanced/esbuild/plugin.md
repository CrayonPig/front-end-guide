---
sidebarDepth: 2
---
# 插件开发

插件开发其实就是基于原有的体系结构中进行`扩展`和`自定义`。 Esbuild 插件也不例外，通过 Esbuild 插件我们可以扩展 Esbuild 原有的路径解析、模块加载等方面的能力，并在 Esbuild 的构建过程中执行一系列自定义的逻辑。

esbuild 插件是一个带有`name`和`setup`函数的对象，当然很多时候，我们都会以函数的的方式返回这个对象。其中，`name` 的值是一个字符串，它表示你的插件名称 。 `setup` 的值是一个函数，它会被传入一个参数 `build`（对象）。

```javascript
export interface Plugin {
  name: string
  setup: (build: PluginBuild) => (void | Promise<void>)
}
```

`build` 对象上会暴露5个钩子函数：`onStart`、`onResolve` 、 `onLoad`、`onEnd`和`onDispose`。

## 插件运行机制

`build`对象上的5个钩子函数，其实就是`esbuild`构建过程中的几个阶段我们需要去扩展执行的内容

![image-20230815145208844](@assets/esbuild/image-20230815145208844.png)

## `onStart`、`onEnd`、`onDispose`

其中`onStart`、`onEnd`、`onDispose`的使用都很简单。`onStart`和`onEnd`两个钩子无非就是用来在构建开启和结束时执行一些自定义的逻辑，`onDispose`无非就是不再使用插件时执行清理。这三个钩子函数都有一个回调函数作为参数。其中onEnd的回调函数可以获取esbuild执行之后的返回值。

```javascript
/** Documentation: https://esbuild.github.io/plugins/#on-start */
onStart(callback: () =>
  (OnStartResult | null | void | Promise<OnStartResult | null | void>)): void
/** Documentation: https://esbuild.github.io/plugins/#on-end */
onEnd(callback: (result: BuildResult) =>
  (OnEndResult | null | void | Promise<OnEndResult | null | void>)): void
/** Documentation: https://esbuild.github.io/plugins/#on-dispose */
onDispose(callback: () => void): void
```

我们可以先来看一下这几个函数，然后就可以马上就能做出一些很简单的插件

```javascript
let testPlugin = () => ({
  name: "test-plugin",
  setup(build) {
    console.log(build.initialOptions)
    build.onStart(() => {
      console.log("===> onStart <===");
    });
    build.onEnd((result) => {
      console.log(result)
      console.log(`===> onEnd  <===`);
    });
    build.onDispose(() => {
      console.log("===> onDispose <===");
    });
  }
});
```

可以注意`build.initialOptions`和`build.onEnd`的回调函数参数打印的内容：

```javascript
{
  absWorkingDir: '/Users/yingside/work/demo/esbuild-demo',
  platform: 'browser',
  format: 'iife',
  assetNames: 'assets/[name]-[hash]',
  treeShaking: true,
  tsconfig: './tsconfig.json',
  logLevel: 'info',
  publicPath: '/',
  entryPoints: [ 'src/app.tsx', 'src/index.html' ],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: [ 'es2020', 'chrome58', 'firefox57', 'safari11' ],
  metafile: true,
  outdir: './dist/',
  loader: { '.html': 'copy', '.svg': 'dataurl', '.png': 'file' },
  plugins: [ { name: 'test-plugin', setup: [Function: setup] } ]
}
```



```javascript
{
  errors: [],
  warnings: [],
  outputFiles: undefined,
  metafile: {
    inputs: {
      'node_modules/react/cjs/react.development.js': [Object],
      'node_modules/react/index.js': [Object],
      'node_modules/scheduler/cjs/scheduler.development.js': [Object],
      'node_modules/scheduler/index.js': [Object],
      'node_modules/react-dom/cjs/react-dom.development.js': [Object],
      'node_modules/react-dom/index.js': [Object],
      'node_modules/react-dom/client.js': [Object],
      'src/components/comp.css': [Object],
      'node_modules/react/cjs/react-jsx-runtime.development.js': [Object],
      'node_modules/react/jsx-runtime.js': [Object],
      'src/components/Comp1.tsx': [Object],
      'src/assets/react.svg': [Object],
      'src/components/comps.module.css': [Object],
      'src/components/Comp2.tsx': [Object],
      'src/style.css': [Object],
      'src/assets/logo192.png': [Object],
      'src/app.tsx': [Object],
      'src/index.html': [Object]
    },
    outputs: {
      'dist/assets/logo192-3BFQN3OB.png': [Object],
      'dist/app.js.map': [Object],
      'dist/app.js': [Object],
      'dist/app.css.map': [Object],
      'dist/app.css': [Object],
      'dist/index.html': [Object]
    }
  },
  mangleCache: undefined
}
```

### 计算构建时间

```javascript
let time = () => ({
  name: "time",
  setup(build) {
    let time;
    build.onStart(() => {
      time = Date.now();
      console.log("===> Build Start <===");
    });
    build.onEnd((result) => {
      // console.log(result)
      if (result.errors.length > 0) { 
        return;
      }
      console.log(`===> Build ended:${Date.now() - time}ms  <===`);
    });
    build.onDispose(() => {
      console.log("===> Build Disposed <===");
    });
  }
});
export default time;
```

这个插件的功能很简单，就是计算构建时间，无非也就是在`onStart`开始设置一个时间，然后`onEnd`计算时间差

### 清除打包内容

```javascript
import { existsSync } from "fs";
import { rimraf } from "rimraf"

const clear = () => {
  return {
    name: "Clear",
    setup: (build) => {
      build.onStart(() => {
        const { outdir, outfile } = build.initialOptions;
        if (outdir && existsSync(outdir)) {
          rimraf.sync(outdir)
        }
        if (outfile && existsSync(outfile)) {
          rimraf.sync(outfile)
        }
      });
    },
  };
};
export default clear
```

这里删除文件直接使用了第三方包`rimraf`，可以安装一下这个第三方包直接使用

```javascript
npm i rimraf
```

### 实现 HTML 构建

我们之前简单的使用loader的copy功能构建了html页面，但是却很死板，必须在开始就定义好css，js的文件名，如果css，js要实现hash定义的话，就很麻烦了，我们可以通过自定义HTML构建来实现这个效果。

```javascript
import fs from "fs/promises";
import path from "path";

const development = "development" === process.argv[2];

const htmlPlugin = () => ({
  name: "html-plugin",
  setup(build) {
    build.onEnd(async (result) => {
      if (result.errors.length) {
        return;
      }
      // 获取 metafile
      const { metafile } = result;

      // 存放 script 和 link 标签
      const scripts = [];
      const links = [];

      if (metafile) {
        // 获取所有的输出文件,注意outputs是一个对象
        const { outputs } = metafile;
        const assets = Object.keys(outputs);

        assets.forEach((asset) => {
          //获取文件名
          asset = asset.substring(asset.lastIndexOf('/') + 1);
          if (asset.endsWith(".js")) {
            scripts.push(createScript(asset));
          } else if (asset.endsWith(".css")) {
            links.push(createLink(asset));
          }
        });
      }
      // 拼接 HTML 内容
      const templateContent = generateHTML(scripts, links);
      // HTML 写入
      const basePath = build.initialOptions.outdir ? build.initialOptions.outdir : process.cwd();
      const templatePath = path.join(basePath, "index.html");
      await fs.writeFile(templatePath, templateContent);
    });
  }
});

export default htmlPlugin;

const createScript = (src) => `<script type="module" src="${src}"></script>`;
const createLink = (src) => `<link rel="stylesheet" href="${src}"></link>`;
const generateHTML = (scripts, links) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  ${links.join("\n")}
</head>

<body>
  <div id="root"></div>
  ${scripts.join("\n")}
  ${development ? 
  `<script type="module">
    new EventSource('/esbuild').addEventListener('change', e => location.reload())
  </script>` : ""}
</body>

</html>
`;
```



## `onResolve` 和 `onLoad`

`onResolve` 和 `onLoad`是两个非常重要的钩子函数，分别**控制路径解析**和**模块内容加载**的过程。它们都需要传入 `Options`（选项）和 `CallBack`（回调）等 2 个参数。

```javascript
/** Documentation: https://esbuild.github.io/plugins/#on-resolve */
onResolve(options: OnResolveOptions, callback: (args: OnResolveArgs) =>
  (OnResolveResult | null | undefined | Promise<OnResolveResult | null | undefined>)): void

/** Documentation: https://esbuild.github.io/plugins/#on-load */
onLoad(options: OnLoadOptions, callback: (args: OnLoadArgs) =>
  (OnLoadResult | null | undefined | Promise<OnLoadResult | null | undefined>)): void
```

### onResolve钩子函数

`onResolve`将在 esbuild 构建的每个模块中的每个导入路径上运行。该回调可以自定义 esbuild 如何进行路径解析

其中，`Options` 是一个对象，它包含 `filter`（必须）和 `namespace` 等 2 个属性:

```javascript
/** Documentation: https://esbuild.github.io/plugins/#on-resolve-options */
export interface OnResolveOptions {
  filter: RegExp
  namespace?: string
}
```

`filter` 为必传参数，是一个正则表达式，它决定了要过滤出的特征文件。

> `filter` 正则是使用 Go 原生正则实现的，为了不使性能过于劣化，规则应该尽可能严格。同时它本身和 JS 的正则也有所区别，不支持前瞻(?<=)、后顾(?=)和反向引用(\1)这三种规则。

`namespace` 为选填参数，默认为file，一般在 `onResolve` 钩子中的回调参数返回`namespace`属性作为标识，我们可以在`onLoad`钩子中通过 `namespace` 将模块过滤出来。

而 `CallBack` 是一个回调函数。里面的参数**args: onResolveArgs**很重要，我们一般如果要操作onResolve钩子函数，一般都是在这个参数上做文章

```javascript
const myPlugin = () => {
  return {
    name: 'my-plugin',
    setup(build) {
      build.onResolve({ filter: /.*/ }, args => {
        console.log('---onResolve---')
        console.log(args);
      })
    },
  }
}
```

其实正则表达式`{ filter: /.*/ }`表示所有路径文件，因此这里会打印一堆内容，主要格式如下：

```javascript
{
  // 模块路径
  path: 'react-dom/client',
  // 父模块路径
  importer: '/xxx/work/demo/esbuild-demo/src/app.tsx',
  // namespace 标识,默认为file
  namespace: 'file',
  // 基准路径
  resolveDir: '/xxx/work/demo/esbuild-demo/src',
  // 导入方式，如 import-statement、require-call、entry-point
  kind: 'import-statement',
  // 额外绑定的插件数据
  pluginData: undefined
}
```

当然`onResolve`函数也可以有返回值：

```javascript
return {
    // 错误信息
    errors: [],
    // 将其设置为true将模块标记为external，这意味着它将不会包含在捆绑包中，而是会在运行时导入
    external: false;
    // namespace 标识
    namespace: 'xxx';
    // 模块路径,如果要设置path，如果要和onLoad结合使用，要处理为绝对路径
    path: args.path,
    // 额外绑定的插件数据
    pluginData: null,
    // 插件名称
    pluginName: 'xxx',
    // 设置为 false，如果模块没有被用到，模块代码将会在产物中会删除。否则不会这么做
    sideEffects: false,
    // 添加一些路径后缀，如`?xxx`
    suffix: '?xxx',
    // 警告信息
    warnings: [],
    // 仅仅在 Esbuild 开启 watch 模式下生效
    // 告诉 Esbuild 需要额外监听哪些文件/目录的变化
    watchDirs: [],
    watchFiles: []
}
```

如果仅仅就只是对路径做一些处理，我们也可以直接开发出一些比较有用的插件，比如，有时候某些依赖的模块使用了 `nodejs` 的原生模块，但是以 `node:` 开头的的写法，这会导致 esbuild 无法识别。我们可以通过插件修改一下这些路径，比如：

### 改用external引入外部CDN

比如现在已经引入了lodash的库，在打包的时候当然会打包lodash的内容，但是现在希望去掉打包内容改用外部external引入CDN，我们可以通过插件来实现这一步

```javascript
// 界面调用lodash
import _ from "lodash";

_.debounce(() => console.log("hello world"), 1000)();
```



```javascript
//esbuild-plugin-lodashExternal

const lodashExternal = () => {
  return {
    name: 'plugin-lodashExternal',
    setup(build) {
      build.onResolve({ filter: /(^lodash)/ }, (args) => ({
        path: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm',
        external: true
      }))
    },
  }
}
export default lodashExternal;
```

引入插件后，就将原来的lodash打包，转变为了CDN引入。

你可以通过插件打包metafile详情看到build打包信息

```javascript
const result = await esbuild.build(config);
const text = await esbuild.analyzeMetafile(result.metafile, {
  verbose:true
})
console.log(text);
```

其实，在esbuild配置中，我们可以直接配置external属性，写明哪些第三方包我们需要作为external引入

```javascript
const config = {
  //入口列表
  entryPoints: ['src/App.tsx'],
  //输出目录
  outdir: './dist',
  //外部引入
  external: ['lodash'],
  //...其他省略
};
```

然后删除界面的import语句，在html文件中添加script引入

```javascript
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
```



### onLoad钩子函数

`onLoad`函数的工作是返回模块的内容并告诉 esbuild 如何解释它

> **注意这里的关键点**：回模块的内容，并告诉esbuild如何解释他。

和`onResolve`一样，，`Options` 是一个对象，它包含 `filter`（必须）和 `namespace`  2 个属性:

```javascript
/** Documentation: https://esbuild.github.io/plugins/#on-load-options */
export interface OnLoadOptions {
  filter: RegExp
  namespace?: string
}
```

其中，这里的`namespace`主要是和`onResolve`函数定义的`namespace`进行对应的,当然也可以单独运行。

**args参数：**

```javascript
/** Documentation: https://esbuild.github.io/plugins/#on-load-arguments */
export interface OnLoadArgs {
  path: string //正则之后获取的路径，一般是绝对路径
  namespace: string //命名空间
  suffix: string  // 后缀信息
  pluginData: any // 额外的插件数据
}
```

**返回类型**

```javascript
/** Documentation: https://esbuild.github.io/plugins/#on-load-results */
export interface OnLoadResult {
  // 插件名称
  pluginName?: string
  
	// 错误信息
  errors?: PartialMessage[]
  // 警告信息
  warnings?: PartialMessage[]
  
	// 模块具体内容
  contents?: string | Uint8Array
  // 指定 loader，如`js`、`ts`、`jsx`、`tsx`、`json`等等
  loader?: Loader
  
  // 基准路径
  resolveDir?: string
  // 额外的插件数据
  pluginData?: any

  // 仅仅在 Esbuild 开启 watch 模式下生效
  // 告诉 Esbuild 需要额外监听哪些文件/目录的变化
  watchFiles?: string[]
  watchDirs?: string[]
}
```



### 以json格式读取txt文件内容

txt文件中的内容，以键值对的形式排列，我们希望将文件中的内容取到，并以json对象的格式在代码中输出

```javascript
// assets/word.txt
name=jack
age=19
score=100
```

希望可以在代码中像下面的方式获取到txt文件中的内容：

```javascript
import word from "../assets/word.txt"

console.log(word.name,word.age,word.score)
```

我们可以通过插件处理这种需求

```javascript
import fs from "fs/promises";
import path from "path";

const txtPlugin = () => ({
  name: 'txt-plugin',
  setup(build) {
    build.onLoad({ filter: /\.txt$/ }, async (args) => {
      console.log(args)
      let text = await fs.readFile(args.path, 'utf8')
      const arr = text.split(/\s+/);
      const obj = arr.reduce((result, item) => {
        const [key, value] = item.split("=");
        result[key] = value;
        return result;
      }, {});

      return {
        contents: JSON.stringify(obj),
        loader: 'json',
      }
    })
  }
});

export default txtPlugin;
```

> 当使用 `reduce()` 方法时，你需要传递一个回调函数和一个初始值作为参数。回调函数将在每次迭代中被调用，并接收四个参数：累积值（也称为结果值）、当前元素、当前索引和原始数组。
>
> ```javascript
> array.reduce(callback, initialValue);
> ```
>
> - `callback`：回调函数，用于对每个元素执行操作。它接收四个参数：
>   - `accumulator`：累积值，即上一次回调函数的返回值或初始值。
>   - `currentValue`：当前元素。
>   - `currentIndex`（可选）：当前元素的索引。
>   - `array`（可选）：原始数组。
>     回调函数应返回一个值，该值将作为下一次迭代的累积值。
> - `initialValue`：可选参数，作为第一次调用回调函数时的累积值（即第一个 `accumulator` 的值）。

当然我们其实可以`onResovle`和`onLoad`结合使用

```javascript
import fs from "fs/promises";
import path from "path";

const txtPlugin = () => ({
  name: 'txt-plugin',
 
  setup(build) {
    build.onResolve({ filter: /\.txt$/ }, (args) => {
      const basePath = path.join(args.resolveDir, args.path)
      console.log(basePath)
      return {
        path: basePath,
        namespace: 'txt-ns',
      }
    })
    build.onLoad({ filter: /.*/, namespace: 'txt-ns' }, async (args) => {
      let text = await fs.readFile(args.path, 'utf8')
      console.log(text);
      const arr = text.split(/\s+/);
      const contents = arr.reduce((result, item) => {
        const [key, value] = item.split("=");
        result[key] = value;
        return result;
      }, {});
      console.log(contents);
      return {
        contents: JSON.stringify(contents),
        loader: 'json',
      }
    })
  }
  
});

export default txtPlugin;
```

### 读取markdown文件内容

我们知道markdown文件格式的内容，可以轻松的转换成HTML内容

我们需要先引入markdown的转换插件库，[marked](https://marked.js.org/)

```javascript
npm install marked
npm install @types/marked //如果需要TS支持的话
```

```javascript
import path from "path";
import fs from "fs/promises";
import {marked} from "marked";

const markdownPlugin = () => ({ 
  name: 'markdown-plugin',
  setup(build) { 
    build.onResolve({ filter: /\.md$/ }, (args) => {
      if (args.resolveDir === "") return;

      return {
        path: path.isAbsolute(args.path)
          ? args.path
          : path.join(args.resolveDir, args.path),
        namespace: "markdown"
      };
    });
    build.onLoad({ filter: /.*/, namespace: "markdown" }, async (args) => {
      const markdownContent = await fs.readFile(args.path, "utf8")

      const markdownHTML = marked.parse(markdownContent);

      return {
        contents: JSON.stringify({
          html: markdownHTML,
          raw: markdownContent,
          filename: path.basename(args.path)
        }),
        loader: "json"
      };
    });
  }
})

export default markdownPlugin
```

我们可以直接在tsx的界面中使用

```javascript
import markdown from "../assets/readme.md";

// jsx
<div dangerouslySetInnerHTML={{ __html: markdown.html }}></div>
```

ts声明

```javascript
declare module '*.md' {
  const content: {
    html: string,
    raw: string,
    filename: string
  }
  export default content
}
```

