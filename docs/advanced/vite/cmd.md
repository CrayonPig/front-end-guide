# 命令行

## 开发服务器 `vite` 

在当前目录下启动 Vite 开发服务器。`vite dev` 和 `vite serve` 是 `vite` 的别名。

开发服务器启动后，你可以在浏览器中访问指定的地址，通常是 `http://localhost:3000`（默认端口为 3000，可以通过配置进行修改）。开发服务器会实时监听文件的变化，并自动更新页面，无需手动刷新浏览器。

### 使用

```bash
vite [root]
```

### 选项 

| 选项                     |                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `--host [host]`          | 指定主机名称 (`string`) |
| `--port <port>`          | 指定端口 (`number`) |
| `--open [path]`          | 启动时打开浏览器 (`boolean \| string`) |
| `--cors`                 | 启用 CORS (`boolean`) |
| `--strictPort`           | 如果指定的端口已在使用中，则退出 (`boolean`) |
| `--force`                | 强制优化器忽略缓存并重新构建 (`boolean`) |
| `-c, --config <file>`    | 使用指定的配置文件 (`string`) |
| `--base <path>`          | 公共基础路径（默认为：`/`）(`string`) |
| `-l, --logLevel <level>` | info \| warn \| error \| silent (`string`) |
| `--clearScreen`          | 允许或禁用打印日志时清除屏幕 (`boolean`) |
| `--profile`              | 启动内置的 Node.js 调试器（查看 [性能瓶颈](/guide/troubleshooting#performance-bottlenecks)）|
| `-d, --debug [feat]`     | 显示调试日志 (`string \| boolean`) |
| `-f, --filter <filter>`  | 过滤调试日志 (`string`) |
| `-m, --mode <mode>`      | 设置环境模式 (`string`) |
| `-h, --help`             | 显示可用的 CLI 选项 |
| `-v, --version`          | 显示版本号 |

## 构建 `vite build` 

`vite build` 命令用于生成生产环境的构建文件。


`Vite` 会对项目进行优化和打包，生成优化后的静态文件，可用于部署到生产服务器上。

生产构建过程中，`Vite` 会进行代码压缩、资源优化等操作，以确保生成的构建文件体积小、加载速度快。

### 使用 

```bash
vite build [root]
```

### 选项 

| 选项                           |                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `--target <target>`            | 编译目标（默认为：`"modules"`）(`string`) |
| `--outDir <dir>`               | 输出目录（默认为：`dist`）(`string`) |
| `--assetsDir <dir>`            | 在输出目录下放置资源的目录（默认为：`"assets"`）(`string`) |
| `--assetsInlineLimit <number>` | 静态资源内联为 base64 编码的阈值，以字节为单位（默认为：`4096`）(`number`) |
| `--ssr [entry]`                | 为服务端渲染配置指定入口文件 (`string`) |
| `--sourcemap [output]`         | 构建后输出 source map 文件（默认为：`false`）(`boolean \| "inline" \| "hidden"`) |
| `--minify [minifier]`          | 允许或禁用最小化混淆，或指定使用哪种混淆器（默认为：`"esbuild"`）(`boolean \| "terser" \| "esbuild"`) |
| `--manifest [name]`            | 构建后生成 manifest.json 文件 (`boolean \| string`) |
| `--ssrManifest [name]`         | 构建后生成 SSR manifest.json 文件 (`boolean \| string`) |
| `--emptyOutDir`                | 若输出目录在根目录外，强制清空输出目录 (`boolean`) |
| `-w, --watch`                  | 在磁盘中模块发生变化时，重新构建 (`boolean`) |
| `-c, --config <file>`          | 使用指定的配置文件 (`string`) |
| `--base <path>`                | 公共基础路径（默认为：`/`）(`string`) |
| `-l, --logLevel <level>`       | Info \| warn \| error \| silent (`string`) |
| `--clearScreen`                | 允许或禁用打印日志时清除屏幕 (`boolean`) |
| `--profile`                    | 启动内置的 Node.js 调试器（查看 [性能瓶颈](/guide/troubleshooting#performance-bottlenecks)）|
| `-d, --debug [feat]`           | 显示调试日志 (`string \| boolean`) |
| `-f, --filter <filter>`        | 过滤调试日志 (`string`) |
| `-m, --mode <mode>`            | 设置环境模式 (`string`) |
| `-h, --help`                   | 显示可用的 CLI 选项 |


## 优化项目 `vite optimize` 

`vite optimize` 命令用于对项目进行优化。

这个命令可以分析项目的依赖关系，并进行一些优化操作，如预构建依赖、缓存优化等。

### 使用 

```bash
vite optimize [root]
```

### 选项 

| 选项                     |                                             |
| ------------------------ | ------------------------------------------ |
| `--force`                | 强制优化器忽略缓存并重新构建 (`boolean`) |
| `-c, --config <file>`    | 使用指定的配置文件 (`string`) |
| `--base <path>`          | 公共基础路径（默认为：`/`）(`string`) |
| `-l, --logLevel <level>` | Info \| warn \| error \| silent (`string`) |
| `--clearScreen`          | 允许或禁用打印日志时清除屏幕 (`boolean`) |
| `-d, --debug [feat]`     | 显示调试日志 (`string \| boolean`) |
| `-f, --filter <filter>`  | 过滤调试日志 (`string`) |
| `-m, --mode <mode>`      | 设置环境模式 (`string`) |
| `-h, --help`             | 显示可用的 CLI 选项 |

## 预览构建结果 `vite preview` 

`vite preview` 命令用于在本地预览生产构建的结果。

这将启动一个本地服务器，模拟生产环境下的部署情况，让你可以在本地查看构建后的项目效果。

通过预览，你可以检查构建后的页面是否正常显示，功能是否正常运行，确保在部署到生产服务器之前没有问题。

### 使用 

```bash
vite preview [root]
```

### 选项 

| 选项                     |                                             |
| ------------------------ | ------------------------------------------ |
| `--host [host]`          | 指定主机名称 (`string`) |
| `--port <port>`          | 指定端口 (`number`) |
| `--strictPort`           | 如果指定的端口已在使用中，则退出 (`boolean`) |
| `--open [path]`          | 启动时打开浏览器 (`boolean \| string`) |
| `--outDir <dir>`         | 输出目录（默认为：`dist`)(`string`) |
| `-c, --config <file>`    | 使用指定的配置文件 (`string`) |
| `--base <path>`          | 公共基础路径（默认为：`/`）(`string`) |
| `-l, --logLevel <level>` | Info \| warn \| error \| silent (`string`) |
| `--clearScreen`          | 允许或禁用打印日志时清除屏幕 (`boolean`) |
| `-d, --debug [feat]`     | 显示调试日志 (`string \| boolean`) |
| `-f, --filter <filter>`  | 过滤调试日志 (`string`) |
| `-m, --mode <mode>`      | 设置环境模式 (`string`) |
| `-h, --help`             | 显示可用的 CLI 选项 |


## 创建项目 `vite create`

`vite create`命令用于快速创建一个新的 Vite 项目。

该命令可以帮助你快速搭建一个新的前端项目架构，节省项目初始化的时间和精力。它会自动生成基本的项目结构和必要的文件，让你能够迅速开始开发。

[项目模板](https://github.com/vitejs/vite/tree/main/packages/create-vite)

### 使用

```bash
vite create <project-name>
```

其中，`<project-name>`是你要创建的项目名称。

### 选项

| 选项                     |                                             |
| ------------------------ | ------------------------------------------ |
| `--template <template>`  | 指定项目模板 (`string`) |
| `-p, --preset <preset>`  | 使用预设配置 (`string`) |
| `-c, --config <file>`    | 使用指定的配置文件 (`string`) |
| `-m, --mode <mode>`      | 设置环境模式 (`string`) |
| `-h, --help`             | 显示可用的 CLI 选项 |