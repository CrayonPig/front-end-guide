# 搭建web项目

了解过 `Vite` 的基本使用后，我们尝试搭建一个 `Vite + TypeScript` 的基础项目

## 初始化项目

1. 创建文件夹 `vite-ts`

```bash
mdkir vite-ts
```

2. 使用npm 初始化项目

```bash
cd ./vite-ts
npm init -y
```

## 配置开发环境

1. 安装 `Vite`

```bash
pnpm add vite -D
```

2. 在项目根目录创建配置文件 `vite.config.ts`，并增加基础配置项

```ts
import { defineConfig } from 'vite'

export default defineConfig({
    // 配置选项
})
```

3. 在项目根目录增加 `index.html` 

[为什么Vite的index.html在根目录下](https://cn.vitejs.dev/guide/#index-html-and-project-root)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

4. 增加入口文件 `src/main.ts`
```ts
/**
 * 随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns min-max之间的随机整数
 */
const getRandomNum = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const r = getRandomNum(1, 10);
console.log(r);
```

5. 在 `package.json` 中增加启动命令

``` js
{
  // ......
  "scripts": {
    "dev": "vite",
  },
  // ......
}
```

6. 使用 `npm run dev` 启动项目，查看控制台打印

![控制台打印](@assets/vite/baseLog.png)

::: tip 为什么不需要安装 TypeScript 就可以启动
我们之前说过，`Vite` 内部使用 `Esbuild` 对 `TypeScript` 相关文件提供内置支持。它可以在开发过程中处理一些基本的 `TypeScript` 代码，无需显式安装 `TypeScript` 的开发依赖。

但是 `Esbuild` 并没有实现 TS 的类型系统，在编译 `TypeScript` 相关文件时仅仅抹掉了类型相关的代码，没有实现类型检查。所以在实际开发中，我们应该还是使用 `TypeScript` 的 `tsc` 命令来检查类型
:::

## 配置生产环境

开发环境中已经处理好了一些逻辑，所以生产环境的配置相对简单一些

1. 在 `package.json` 中增加启动命令

``` js
{
  // ......
  "scripts": {
    "build": "vite build"
  },
  // ......
}
```

2. 使用 `npm run build` 构建项目，查看构建文件

```
dist
├── assets
│   └── index-l4t8EFLb.js
└── index.html
```

打开 `index-l4t8EFLb.js` 文件，我们可以发现代码已经被压缩处理过，符合生产环境构建的逻辑

3. 增加 `TypeScript` 校验

前面说过， `Vite` 只是抹除了 `TypeScript` 的类型定义，并没有实现类型检查，所以为了我们的代码质量，需要增加相关定义

首先安装 `TypeScript` 依赖

```bash
pnpm add typescript -D
```

其次在构建时，增加校验

``` js
{
  // ......
  "scripts": {
    "build": "tsc && vite build"
  },
  // ......
}
``` 

这样，我们在生产环境构建时，就有了 `TypeScript` 类型检查