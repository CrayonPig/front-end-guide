---
sidebarDepth: 2
---
# 插件机制

## Rollup插件概述

> Rollup 插件是一个对象，具有 [属性](https://cn.rollupjs.org/plugin-development/#properties)、[构建钩子](https://cn.rollupjs.org/plugin-development/#build-hooks) 和 [输出生成钩子](https://cn.rollupjs.org/plugin-development/#output-generation-hooks) 中的一个或多个，并遵循我们的 [约定](https://cn.rollupjs.org/plugin-development/#conventions)。插件应作为一个导出一个函数的包进行发布，该函数可以使用插件特定的选项进行调用并返回此类对象。

简单来说，rollup插件一般会做成一个函数，函数返回一个对象，返回的对象中包含一些属性和不同阶段的钩子函数。

### 约定

插件应该有一个明确的名称，并以`rollup-plugin-`作为前缀。

### 属性

name：插件的名称，用于在警告和错误消息中标识插件。

version：插件的版本

## 钩子函数的特点

- 钩子函数区分不同的调用时机
- 钩子函数是有执行顺序的
- 钩子函数有不同的执行方式
- 钩子函数也可以是对象的形式
- 对象形式的钩子函数可以改变钩子的执行，让不同插件的同名钩子函数获取不通的执行先后

### 钩子函数的调用时机

这里的调用时机，其实就是以我们上面的API，build和output两大工作流的不同阶段进行分类。根据这两个不同阶段，rollup提供的不同的函数让我们调用

- const bundle = await rollup.rollup(inputOptions) 执行期间的构建钩子函数 - [build-hooks](https://cn.rollupjs.org/plugin-development/#build-hooks)
- await bundle.generate(outputOptions)/write(outputOptions) 执行期间的输出钩子函数-[output-generation-hooks](https://cn.rollupjs.org/plugin-development/#output-generation-hooks)

### 钩子函数的执行方式

除了上面简单的划分为两个阶段的调用时机之外，我们还可以以钩子函数的执行方式来分类。

- `async/sync`：异步/同步钩子，async标记的钩子可以返回一个解析为相同类型的值的 Promise；否则，该钩子被标记为 `sync`。
- `first`：如果有多个插件实现此钩子，则钩子按顺序运行，直到钩子返回一个不是 `null` 或 `undefined` 的值。
- `sequential`：如果有多个插件实现此钩子，则所有这些钩子将按指定的插件顺序运行。如果钩子是 `async`，则此类后续钩子将等待当前钩子解决后再运行。
- `parallel`：如果有多个插件实现此钩子，则所有这些钩子将按指定的插件顺序运行。如果钩子是 `async`，则此类后续钩子将并行运行，而不是等待当前钩子。

### 钩子函数也可以是对象

除了函数之外，钩子也可以是对象。在这种情况下，实际的钩子函数（或 `banner/footer/intro/outro` 的值）必须指定为 `handler`。这允许你提供更多的可选属性，以改变钩子的执行：

- order: "pre" | "post" | null

如果有多个插件实现此钩子，则可以先运行此插件（`"pre"`），最后运行此插件（`"post"`），或在用户指定的位置运行（没有值或 `null`）。

```javascript
export default function resolveFirst() {
	return {
		name: 'resolve-first',
		resolveId: {
			order: 'pre',
			handler(source) {
				console.log(source);
				return null;
			}
		}
	};
}
```

### 构建钩子执行顺序

![image-20230919180002325](@assets/rollup/image-20230919180002325.png)

1. 通过 `options` 钩子读取配置，并进行配置的转换，得到处理后的配置对象
2. 调用 `buildStart` 钩子，考虑了所有 `options`钩子配置的转换，包含未设置选项的正确默认值，正式开始构建流程
3. 调用 `resolveId` 钩子解析模块文件路径。rollup中模块文件的id就是文件地址，所以，类似resolveId这种就是解析文件地址的意思。从`inputOption`的`input`配置指定的入口文件开始，每当匹配到引入外部模块的语句(如：`import moudleA from './moduleA'`)便依次执行注册插件中的每一个 `resolveId` 钩子，直到某一个插件中的 `resolveId` 执行完后返回非 `null` 或非 `undefined` 的值，将停止执行后续插件的 `resolveId` 逻辑并进入下一个钩子
4. 调用`load`钩子加载模块内容，`resolveId`中的路径一般为相对路径，load中的路径为处理之后的绝对路径
5. 接着判断当前解析的模块是否存在缓存，若不存在则执行所有的 `transform` 钩子来对模块内容进行进行自定义的转换；若存在则判断`shouldTransformCachedModule`属性，true则执行所有的 `transform` 钩子，false则进入`moduleParsed`钩子逻辑
6. 拿到最后的模块内容，进行 `AST` 分析，调用 `moduleParsed` 钩子。如果内部没有`imports`内容，进入`buildEnd`环节。如果还有`imports`内容则继续，如果是普通的 `import`，则执行`resolveId` 钩子，继续回到**步骤3-调用resolveId**；如果是动态 `import`，则执行`resolveDynamicImport` 钩子解析路径，如果解析成功，则回到**步骤4-load**加载模块，否则回到步骤3通过 `resolveId` 解析路径
7. 直到所有的 `import` 都解析完毕，`Rollup` 执行`buildEnd`钩子，Build阶段结束

```javascript
// rollup-plugin-example.js

export default function myExample () {
  return {
    name: 'my-example',
    options (options) {
      console.log("🎉 -- options:", options)
    },
    buildStart (options) {
      console.log("✨ -- buildStart:", options)
    },
    resolveId (source,importer) {
      console.log("🚀 -- resolveId(source):", source)
      console.log("🚀 -- resolveId(importer):", importer)
      return null; 
    },
    load (id) {
      console.log("🌈 ~ id:", id)
      return null; 
    },
    transform(code,id) { 
      console.log("🌟 -- transform");
      console.log("---",code)
      console.log("---",id)
    },
    moduleParsed (info) {
      console.log("⭐️ -- moduleParsed:", info)
    },
    buildEnd() { 
      console.log("😁 -- buildEnd");
    }
  };
}
```



#### 调用虚拟模块插件示例

```javascript
const virtualModuleId = 'virtual-module';
// rollup约定插件使用“虚拟模块”，使用\0前缀模块 ID。这可以防止其他插件尝试处理它。
const resolvedVirtualModuleId = '\0' + virtualModuleId;
export default function virtualModule() {
  return {
    name: 'virtual-module', 
    resolveId (source) {
      if (source === 'virtual-module') { 
        return resolvedVirtualModuleId; // 告诉Rollup，这个ID是外部模块，不要在此处查找它
      }
      return null; // 其他ID应按通常方式处理
    },
    load (id) {
      console.log("🌈 - id:", id)
      if (id === resolvedVirtualModuleId) { 
        // return 'export default "This is virtual!"'; // 告诉Rollup，如何加载此模块
        return 'export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }'
      }
      return null; // 其他ID应按通常方式处理
    },
  };
}
```

**界面调用**

```javascript
import fib from "virtual-module";
console.log(fib(10))
```

#### JSON插件示例

rollup默认是不能直接读取json文件的内容的，我们自己写一个插件处理一下，不过写这个插件之前，有一些小知识点需要补充一下

[@rollup/pluginutils](https://github.com/rollup/plugins/tree/master/packages/pluginutils) rollup官方提供的工具插件,里面有一些制作插件常用的方法

**安装**

```javascript
pnpm add @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/pluginutils -D
```

[插件上下文](https://cn.rollupjs.org/plugin-development/#plugin-context)

这个其实也是插件中很常用的一些api，可以通过 `this` 从大多数[钩子](https://cn.rollupjs.org/plugin-development/#build-hooks)中访问一些实用函数和信息位

**rollup-plugin-json**

```javascript
import { createFilter,dataToEsm } from '@rollup/pluginutils';
import path from 'path';

export default function myJson(options = {}) {
  // createFilter 返回一个函数，这个函数接收一个id路径参数，返回一个布尔值
  // 这个布尔值表示是否要处理这个id路径
  // rollup 推荐每一个 transform 类型的插件都需要提供 include 和 exclude 选项，生成过滤规则
  const filter = createFilter(options.include, options.exclude);
  return {
    name: 'rollup-plugin-json',
    transform: {
      order: "pre",
      handler(code, id) {
        if (!filter(id) || path.extname(id) !== '.json') return null;
        try {
          const parse = JSON.stringify(JSON.parse(code));
          return {
            // dataToEsm 将数据转换成esm模块
            // 其实就是 export default "xxx"
            code: dataToEsm(parse), 
            map: { mappings: '' }
          };
        } catch (err) { 
          const message = 'Could not parse JSON file';
          this.error({ message, id, cause: err });
          return null;
        }
      }
    }
  };
}
```

**界面调用**

```javascript
import pkg from "../package.json";
import test from "../test.json"; // 错误json格式演示
console.log(pkg.name)
```



#### [插件上下文](https://cn.rollupjs.org/plugin-development/#plugin-context)

```javascript
import { createFilter } from '@rollup/pluginutils';

export default function customPlugin(options) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'custom-plugin',

    transform(code, id) {
      if (!filter(id)) {
        return null;
      }

      const parsedCode = this.parse(code); // 解析代码,获取AST

      const source = `${code}\n\n${JSON.stringify(parsedCode, null, 2)}`;
      
      const fileName = id.split('/').pop();

      if (options.emitFile) {
        this.emitFile({
          type: 'asset',
          fileName: fileName + '.txt',
          source,
        });
      }
    },
  };
}
```

#### 图片读取

```javascript
import { createFilter,dataToEsm } from "@rollup/pluginutils";
import { extname,resolve,basename,relative,normalize,sep } from "path";
import fs from "fs";
import svgToMiniDataURI from "mini-svg-data-uri";

const defaults = {
  fileSize: 1024 * 4,
  target: "./dist",
  include: null,
  exclude: null,
}

const mimeTypes = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".avif": "image/avif"
}

const getDataUri = ({ format, isSvg, mime, source }) =>
  isSvg ? svgToMiniDataURI(source) : `data:${mime};${format},${source}`;


const ensureDirExists = async (dirPath) => { 
  try {
    await fs.promises.access(dirPath);
    return true;
  } catch (err) { 
    // 文件夹不存在就创建文件夹
    try {
      await fs.promises.mkdir(dirPath, { recursive: true });
      return true;
    }
    catch (err) { 
      console.error(err);
      return false;
    }
    
  }
}

export default function myImage(opts = {}) { 
  const options = Object.assign({}, defaults, opts);
  const filter = createFilter(options.include, options.exclude);
  return {
    name: "my-image",
    async transform(code, id) { 
      if (!filter(id)) return null;
      
      // 获取后缀
      const ext = extname(id);
      // 判断是否是图片
      if(!mimeTypes.hasOwnProperty(ext)) {
        return null;
      }

      // 获取图片的mime类型
      const mime = mimeTypes[ext];
      // 判断是否svg
      const isSvg = mime === mimeTypes[".svg"];
      // 图片format格式
      const format = isSvg ? "utf-8" : "base64";

      // 目标路径
      const assetsPath = resolve(process.cwd(), options.target);
      console.log("---",process.cwd())
      console.log("---",options.target)
      console.log("---", assetsPath);

      //获取文件名
      const fileName = basename(id);
      // 最终文件路径
      const filePath = resolve(assetsPath, fileName);
      console.log("===", filePath);

      let relativePath = normalize(relative(process.cwd(), filePath));
      relativePath = relativePath.substring(relativePath.indexOf(sep) + 1);

      console.log(relativePath);

      try {

        // 如果图片文件过大，就应该直接拷贝文件，返回文件路径
        // 读取图片文件大小与设置的大小进行比较
        const stat = await fs.promises.stat(id);
        if (stat.size > options.fileSize) {
          // 文件的拷贝，以及对象的返回
          // 文件拷贝，无非就是文件源路径，目标路径
          //copyFile 拷贝文件地址的文件夹必须存在
          // 如果文件夹不存在，那么就创建文件夹
          const dirExists = await ensureDirExists(assetsPath);
          dirExists && await fs.promises.copyFile(id, filePath);
          return {
            code: dataToEsm(relativePath), //返回拷贝之后处理的路径
            map: { mappings: "" }
          }

        } else {
          // 否则转换为base64格式
          // 读取文件
          const source = await fs.promises.readFile(id, format);

          return {
            code: dataToEsm(getDataUri({ format, isSvg, mime, source })),
            map: { mappings: "" }
          }
        }

      } catch (err) { 
        const message = "图片转换失败:" + id;
        this.error({ message, id, cause: err });
        return null;
      }

    }
  }
}
```





### 输出钩子执行顺序

![image-20230920110457237](@assets/rollup/image-20230920110457237.png)

1. 执行所有插件的 `outputOptions` 钩子函数，对 `output` 配置进行转换
2. 执行 `renderStart`，该钩子读取所有outputOptions钩子的转换之后的输出选项
3. 扫描 `动态import` 语句执行 `renderDynamicImport` 钩子，让开发者能自定义`动态import`的内容与行为
4. 并发执行所有插件的 `banner、footer、intro、outro` 钩子，这四个钩子功能简单，就是往打包产物的固定位置(比如头部和尾部)插入一些自定义的内容，比如版本号、作者、内容、项目介绍等等
5. 是否存在 `import.meta` 语句，没有就直接进入下一步，否则：对于`import.meta.url`调用 `resolveFileUrl` 来自定义 url 解析逻辑。对于`import.meta`调用 `resolveImportMeta` 来进行自定义元信息解析
6. 生成chunk调用`renderChunk`钩子，便于在该钩子中进行自定义操作。如果生成的chunk文件有hash值，执行 `augmentChunkHash` 钩子，来决定是否更改 `chunk` 的哈希值。
7. 调用 `generateBundle` 钩子，这个钩子的入参里面会包含所有的打包产物信息，包括 `chunk` (打包后的代码)、`asset`(最终的静态资源文件)。在这个钩子中你做自定义自己的操作，比如：可以在这里删除一些 `chunk` 或者 `asset`，最终被删除的内容将不会作为产物输出
8. 上节课讲解的javascript api---`rollup.rollup`方法会返回一个`bundle`对象，`bundle`对象的write方法，会触发`writeBundle`钩子，传入所有的打包产物信息，包括 `chunk` 和 `asset`，与`generateBundle`钩子非常相似。唯一的区别是`writeBundle`钩子执行的时候，产物已经输出了。而 `generateBundle` 执行的时候产物还并没有输出。简单来说，顺序是：`generateBundle--->输出并保存产物到磁盘--->writeBundle`
9. 当`bundle`的`close`方法被调用时，会触发`closeBundle`钩子，这个output阶段结束

```javascript
export default function myExample2() {
  return {
    name: 'my-example2',
    outputOptions (options) {
      console.log("🎉 ~ options:", options)
    },
    renderStart (options) {
      console.log("✨ ~ renderStart:", options)
    },
    renderDynamicImport (options) {
      console.log("✨~ renderDynamicImport:", options)
    },
    banner(chunk) { 
      console.log("🔥 ~ banner(chunk):", chunk)
      const comment = chunk.name === "index" ? `/*
* 
* 　　┏┓　　　┏┓+ +
* 　┏┛┻━━━┛┻┓ + +
* 　┃　　　　　　　┃ 　
* 　┃　　　━　　　┃ ++ + + +
*  ████━████ ┃+
* 　┃　　　　　　　┃ +
* 　┃　　　┻　　　┃
* 　┃　　　　　　　┃ + +
* 　┗━┓　　　┏━┛
* 　　　┃　　　┃　　　　　　　　　　　
* 　　　┃　　　┃ + + + +
* 　　　┃　　　┃
* 　　　┃　　　┃ +  神兽保佑
* 　　　┃　　　┃    代码无bug　　
* 　　　┃　　　┃　　+　　　　　　　　　
* 　　　┃　 　　┗━━━┓ + +
* 　　　┃ 　　　　　　　┣┓
* 　　　┃ 　　　　　　　┏┛
* 　　　┗┓┓┏━┳┓┏┛ + + + +
* 　　　　┃┫┫　┃┫┫
* 　　　　┗┻┛　┗┻┛+ + + +
* 
*/` : "";
      return comment;
    },
    renderChunk (source) {
      console.log("🚀 ~ source:", source)
      return null; 
    },
    augmentChunkHash (chunk) {
      console.log("🎉 ~ augmentChunkHash:", chunk)
    },
    generateBundle(options, bundle) { 
      console.log("🌈 ~ options:", options)
      console.log("🌈 ~ bundle:", bundle)
      Object.keys(bundle).forEach(key => { 
        if (key.includes("sum")) { 
          //删除对象中的这个键值对
          delete bundle[key];
        }
      });
    },
    closeBundle() { 
      console.log("😁 ~ closeBundle");
    }
  };
}
```

#### 打包大小和时间示例：

```javascript
export default function bundleStats() {
  let startTime;
  return {
    name: 'bundle-stats',
    options() {
      startTime = Date.now();
    },
    generateBundle(_, bundle) {
      const fileSizes = {};

      for (const [fileName, output] of Object.entries(bundle)) {
        if (output.type === 'chunk') {
          const content = output.code;
          const size = Buffer.byteLength(content, 'utf8');
          const sizeInKB = (size / 1024).toFixed(2);

          fileSizes[fileName] = `${sizeInKB} KB`;
        }
      }
      console.log('Bundle Stats:');
      console.log('-------------');
      console.log('File Sizes:');
      console.log(fileSizes);
      console.log('-------------');
    },
    closeBundle() {
      const totalTime = Date.now() - startTime;
      console.log(`Total Bundle Time: ${totalTime} ms`);
      console.log('-------------');
    }
  };
}
```

#### 代码压缩

```javascript
import { minify } from 'uglify-js';

export default function uglifyPlugin() {
  return {
    name: 'uglify',

    renderChunk(code) {
      const result = minify(code);
      if (result.error) {
        throw new Error(`minify error: ${result.error}`);
      }
      return {
        code: result.code,
        map: { mappings: '' }
      };
    },
  };
}
```


