---
sidebarDepth: 2
---
# 双引擎架构

`Vite` 的双引擎架构指的是在构建工具中同时使用 `Esbuild` 和 `Rollup` 两个现代构建引擎。这种架构使得 `Vite` 在开发阶段能够提供极快的热重载（HMR）和冷启动速度，同时在生产环境下生成优化的静态资源。

![vite架构图](@assets/esbuild/vite.png)

## Esbuild

从上述架构图，我们可以看出，在 `Vite` 很多关键的流程中，都有 `Esbuild` 的参与，我们按照架构图的流程逐步分析下。

### 依赖预构建

![vite开发流程](@assets/vite/dev.png)

`Vite` 在开发环境中，利用 `Esbuild` 对项目的依赖进行预构建。`Esbuild` 以其极快的构建速度，可以迅速处理大量的依赖项，使得项目能够快速启动。这对于开发者来说，大大减少了等待时间，提高了开发效率。

例如，在一个大型项目中，传统的构建工具可能需要几十秒甚至几分钟来完成依赖的预构建，而 `Esbuild` 可以在几秒钟内完成，让你几乎可以立即开始开发。

通过预构建，`Esbuild` 将一些 `CommonJS` 和 `UMD` 格式的依赖转换为 `ESM（ECMAScript Modules）`格式。这样可以更好地利用浏览器原生的 ESM 模块加载机制，减少模块加载的开销。同时，它还可以对依赖进行合并和优化，减少网络请求次数，提高应用的性能。

### 单文件编译

![Vite Plugin Pipeline](@assets/vite/plugin.png)

从上图中，我们可以知道在 `Vite Plugin Pipeline` 中，同样有 `Esbuild` 的身影，这是为了将 `Esbuild` 作为 `Transformer` 来进行代码转换， 也就是说 `Vite` 使用 `Esbuild` 将 `TypeScript`、`JSX` 等语法转换为浏览器可识别的 JavaScript 代码。

> Vite 已经将 Esbuild 的 Transformer 能力用到了生产环境

`Esbuild`的转换速度远远超过传统的构建工具，使得生产构建时间大大缩短。具体可以参考之前的 [Esbuild](/advanced/esbuild/) 部分


### 代码压缩

> Vite 从 2.6 版本开始，就官宣默认使用 Esbuild 来进行生产环境的代码压缩，包括 JS 代码和 CSS 代码。

![vite构建流程](@assets/vite/prd.png)

从架构图中，我们可以看到，`Esbuild` 的代码压缩功能以插件的形式集成到了 `Rollup` 的构建流程中。

这是因为 `Esbuild` 相比传统的压缩工具如 `Terser`，Esbuild 可以在几分钟的构建任务中节省几十秒甚至更多的时间，这在频繁构建的生产环境中积累起来是非常可观的效益。

并且 `Esbuild` 在压缩代码方面也非常高效。它能够快速地去除代码中的冗余部分，如不必要的空格、注释等，同时还能进行变量名压缩等优化操作，减小代码体积。这有助于提高网页的加载速度，提升用户体验。


## Rollup

`Rollup` 是 `Vite` 用作生产环境打包的核心工具, `Vite` 默认选择在生产环境中利用 `Rollup` 打包，并基于 `Rollup` 本身成熟的打包能力进行扩展和优化，主要包含以下几个方面:

### CSS 代码分割

如果某个异步模块中引入了一些 CSS 代码，Vite 就会自动将这些 CSS 抽取出来生成单独的文件，提高线上产物的缓存复用率。

### 自动预加载

Vite 会自动为入口 chunk 的依赖自动生成预加载标签 <link rel="modulepreload"> ，如:

```html
<head>
<!-- 省略其它内容 -->
<!-- 入口 chunk -->
<script type="module" crossorigin src="/assets/index.250e0340.js"></script>
<!--  自动预加载入口 chunk 所依赖的 chunk-->
<link rel="modulepreload" href="/assets/vendor.293dca09.js">
</head>
```

这种适当预加载的做法会让浏览器提前下载好资源，优化页面性能。

### 异步 Chunk 加载优化
在异步引入的 Chunk 中，通常会有一些公用的模块，如现有两个异步引入的 Chunk: A 和 B，而且两者有一个公共依赖 C，如下图:

![chunk 依赖](@assets/vite/chunk.png)

一般情况下，`Rollup` 打包之后，会先请求 A，然后浏览器在加载 A 的过程中才决定请求和加载 C，但 `Vite` 进行优化之后，请求 A 的同时会自动预加载 C，通过优化 `Rollup` 产物依赖加载方式节省了不必要的网络开销。

### 兼容插件机制

`Vite` 可以利用 `Rollup` 的插件体系来扩展其功能。许多常用的前端工具和库都提供了 `Rollup` 插件，`Vite` 可以通过集成这些插件来实现特定的功能。

例如，如果你需要在项目中使用 CSS 预处理器，可以安装 `Rollup` 的 CSS 预处理器插件，让 Vite 在构建过程中能够添加对 CSS 预处理器的支持。

在开发阶段，`Vite` 借鉴了 [WMR](https://github.com/preactjs/wmr) 的思路，自己实现了一个 `Plugin Container`，用来模拟 `Rollup` 调度各个 `Vite` 插件的执行逻辑，而 `Vite` 的插件写法完全兼容 `Rollup`，因此在生产环境中将所有的 `Vite` 插件传入 Rollup 也没有问题。

反过来说，`Rollup` 插件却不一定能完全兼容 `Vite`。不过，目前仍然有不少 Rollup 插件可以直接复用到 Vite 中，你可以通过这个站点查看所有兼容 Vite 的 Rollup 插件: [vite-rollup-plugins.patak.dev/](https://vite-rollup-plugins.patak.dev/) 。

## Vite 双引擎架构的优势

### 1. **极快的冷启动**
传统构建工具 (如 Webpack) 在启动开发服务器时，通常需要进行一次完整的打包，特别是在大型项目中，冷启动时间可能会很长。而 Vite 通过直接利用 ESModules，避免了冷启动时的打包过程，因此启动速度极快。

### 2. **模块热更新 (HMR) 更高效**
Vite 只更新修改的模块，而不是重新打包和加载整个应用程序，这大大减少了开发过程中的等待时间。由于 HMR 的基础是 ESModules，Vite 能够精确地知道哪些模块需要重新编译，哪些可以保持不变。

### 3. **按需编译**
Vite 的按需编译机制避免了整个项目的打包，只有在请求时才会编译模块。因此，无论项目多大，初次加载的速度都很快。而且因为是模块化请求，用户仅在需要时才会加载某些依赖，避免了不必要的资源浪费。

### 4. **生产环境的高效打包**
生产环境下，Vite 通过 `Rollup` 进行打包， 利用 `Rollup` 强大的树摇和代码拆分功能，使得最终生成的代码包尽可能小。这保证了生产环境中的加载速度和性能。