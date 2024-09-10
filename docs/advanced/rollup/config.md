# 常用配置

## 多产物配置

我们可以将 output 改造成一个数组，对外暴露出不同格式的产物供他人使用，不仅包括 `ESM`，也需要包括诸如`CommonJS`、`UMD`等格式，保证良好的兼容性

```javascript
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle-iife.js',
      format: 'iife'
    },
    {
      file: 'dist/bundle-esm.js',
      format: 'esm'
    },
    {
      file: 'dist/bundle-cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle-umd.js',
      format: 'umd',
      name: 'bundle'
    }
  ],
})
```

## 多入口配置

除了多产物配置，Rollup 中也支持多入口配置

**main.js**

```javascript
// src/main.js
import util from "./util.js";
const r = util.getRandomNum(1, 10)
console.log("🚀 ~ r:", r)

const obj = {
  a: 1,
  b: {
    c: 3
  }
}
const cloneObj = util.deepClone(obj)
cloneObj.b.c = 4;
console.log("🚀 ~ obj:", obj)
console.log("🚀 ~ cloneObj:", cloneObj)
```

**rollup.config.js**

```javascript
import { defineConfig } from 'rollup'

export default defineConfig({
  input: ['src/index.js','src/main.js'],
  output: [
    {
      dir: 'dist',
      format: 'cjs'
    }
  ],
})
```

通常情况下多产物和多入口两者会被结合起来使用

```javascript
import { defineConfig } from 'rollup'
export default defineConfig({
  input: ['src/index.js','src/main.js'],
  output: [
    {
      dir: 'cjs',
      format: 'cjs'
    },
    {
      dir: 'esm',
      format: 'esm'
    }
  ],
})
```

当然，上面这样的写的话，生成的产物会把两个入口一起进行构建，我们可能的想法是一个入口一种构建方式：

```javascript
import { defineConfig } from 'rollup'
/**
 * @type {import('rollup').RollupOptions}
 */
const buildIndexOptions = {
  input: 'src/index.js',
  output: {
    dir: 'dist/umd/',
    format: 'umd',
    name: 'bundle'
  }
}

/**
 * @type {import('rollup').RollupOptions}
 */
const buildMainOptions = {
  input: 'src/main.js',
  output: {
    dir: 'dist/esm/',
    format: 'esm',
  }
}
export default [buildIndexOptions, buildMainOptions];
```

## 动态导入与默认代码分割

使用路由来说明懒加载是大家喜闻乐见的方式，估计大多数同学对于懒加载都只是停留在路由的懒加载，其实，任何时候，我们都可以使用import动态懒加载的方式。重新编辑一下main.js入口：

```javascript
// src/main.js
function run() { 
  // 如果不清楚import动态导入返回的是什么，可以先打印一下下面结果
  // import("./util.js").then(chunk => console.log("🚀 ~ chunk:", chunk));

  import("./util.js").then(({ default: foo }) => { 
    const r = foo.getRandomNum(1, 10);
    console.log("🚀 ~ r:", r) 
  })
}
run();
```

重新运行可以看到dist目录形成了下面的结构:

```shell
.
├── dist
│   ├── esm
│   │   ├── main.js
│   │   └── util-371e3ef9.js
│   └── umd
│       └── index.js
└── ...
```

Rollup 将使用动态导入创建一个仅在需要时加载的单独块。所以你可以看到这里多了一个`util-371e3ef9.js`的文件

> **注意：**为了让 Rollup 知道在哪里放置第二个块，我们不使用 `--file` 选项，而是使用 `--dir` 选项设置一个输出文件夹

其中，`util-371e3ef9.js`是自动生成的`chunk-[hash].js`的名字，`[hash]` 是基于内容的哈希字符串。你可以通过指定 [`output.chunkFileNames`](https://cn.rollupjs.org/configuration-options/#output-chunkfilenames) (chunk文件)和 [`output.entryFileNames`](https://cn.rollupjs.org/configuration-options/#output-entryfilenames) (打包入口文件)选项来提供自己的命名模式。

```javascript
/**
 * @type {import('rollup').RollupOptions}
 */
const buildMainOptions = {
  input: 'src/main.js',
  output: {
    dir: 'dist/esm/',
    entryFileNames: '[name].js',
    chunkFileNames: 'chunk-[name]-[hash].js',
    format: 'esm',
  }
}
```

而且，很智能的是，如果这个时候，我定义了又多个入口点都调用了`util.js`文件，会自动的引入分割出来的文件

```javascript
/**
 * @type {import('rollup').RollupOptions}
 */
const buildMainOptions = {
  input: ['src/main.js', 'src/main2.js'],
  output: {
    dir: 'dist/esm/',
    entryFileNames: '[name].js',
    chunkFileNames: 'chunk-[name]-[hash].js',
    format: 'esm',
  }
}
```

在打包后的main2.js中，可以看到这样的引用：

```javascript
import util from './chunk-util-371e3ef9.js';
```
