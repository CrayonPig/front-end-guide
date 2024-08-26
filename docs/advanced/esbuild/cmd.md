# 命令行调用

`esbuild` 和其他的构建工具一样，提供了两种调用方式 `命令行调用` 和 `代码调用`

## 安装 esbuild

首先，下载并本地安装 `esbuild`

```
npm install esbuild
```

查看 `esbuild` 版本

```shell
./node_modules/.bin/esbuild --version
# 或者
npx esbuild --version
```

## 构建代码

我们使用简单的案例，来学习命令行的调用，首先，在空白项目中安装 `react` 和 `react-dom`：

```
npm install react react-dom
```

接下来，创建名为 `app.jsx` 的文件并包含如下代码：

```jsx
import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
```

最后，运行 `esbuild` 打包此文件：

```
npx esbuild app.jsx --bundle --outfile=out.js
```

> 这条命令的作用是将位于 app.jsx 的入口文件打包成一个输出文件 out.js

打开构建生成的 `out.js` 文件，可以看到，包括 `react` 的相关内容，也都会打包到生成的文件中，甚至我们可以直接运行这个文件

```
node out.js
```

会正确执行代码，并输出

```
<h1>Hello, world!</h1>
```

当然，我们也可以将生成的代码进行压缩，利用 `--minify` 属性

```
npx esbuild app.jsx --bundle --outfile=out.js --minify
```

现在输出的就是压缩后的代码了


