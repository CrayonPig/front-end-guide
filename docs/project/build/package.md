# package.json 字段解析

## type

在 `package.json` 文件中，`type` 属性用于指定模块的类型，即模块使用的模块系统。`type` 属性的值影响模块的导入和导出方式，以及模块的解析和加载行为。它告诉构建工具、打包工具或者运行时环境如何正确处理模块。

根据不同的值，`type` 属性可以有以下几种常见的取值：

1. `"commonjs"`：表示模块使用 CommonJS 模块系统。这是 Node.js 默认的模块系统，也是旧版的 JavaScript 模块系统。
2. `"module"`：表示模块使用 ES 模块（ES Modules）系统。ES 模块是现代 JavaScript 的官方标准模块系统，它提供了更强大的模块化语法和功能。
3. `"umd"`：表示模块既可以在浏览器端使用，也可以在 Node.js 环境中使用。这种类型的模块通常用于跨平台的通用模块，可以通过不同的模块系统进行加载。
4. `"module" 和 "main"`：使用这种形式表示模块既可以使用 ES 模块系统，也可以使用 CommonJS 模块系统。这种类型的设置在同时兼容浏览器和 Node.js 的项目中很常见。

请注意，`type` 属性在一些构建工具和平台中可能有特定的用途或扩展，具体的行为可能会有所不同。因此，在使用特定的构建工具或平台时，最好查阅相关文档以了解更多细节。

::: tip
不管type字段的值是多少, 以.mjs后缀名的文件总是被当作ES6模块，而以.cjs后缀名的文件总是被当成CommonJS模块，但不建议混用
:::

## script

npm 允许在 `package.json` 文件里面，使用 `scripts` 字段定义脚本命令, `scripts` 的每一个对象都对应一条脚本命令。

```json
{
  // ...
  "scripts": {
    "build": "node build.js"
  }
}
```

上述示例中，`build` 对应的脚本是 `node build.js`，表示在项目根目录执行 `npm run build` 时，就执行 `node build.js` 命令。

npm 脚本的原理非常简单。每当执行 `npm run`，就会自动新建一个 `Shell`，在这个 `Shell` 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

比较特别的是，`npm run`新建的这个 `Shell`，会将当前目录的`node_modules/.bin`子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

### 默认值

一般来说，npm 脚本由用户提供。但是，npm 对两个脚本提供了默认值。也就是说，这两个脚本不用定义，就可以直接使用。

```json
"start": "node server.js",
"install": "node-gyp rebuild"
```

上面代码中，`npm run start` 的默认值是 `node server.js`，前提是项目根目录下有 `server.js` 这个脚本； `npm run install` 的默认值是 `node-gyp rebuild` ，前提是项目根目录下有 `binding.gyp` 文件。

### 钩子

npm 脚本有 `pre` 和 `post` 两个钩子。举例来说，`build` 脚本命令的钩子就是 `prebuild` 和 `postbuild` 。

```json
"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script"
```

用户执行 `npm run build` 的时候，会自动按照下面的顺序执行。

```sh
npm run prebuild && npm run build && npm run postbuild
```

因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。

```json
"clean": "rimraf ./dist && mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"
```

npm 默认提供下面这些钩子。

- prepublish，postpublish
- preinstall，postinstall
- preuninstall，postuninstall
- preversion，postversion
- pretest，posttest
- prestop，poststop
- prestart，poststart
- prerestart，postrestart

自定义的脚本命令也可以加上 `pre` 和`post`钩子。比如，`myscript`这个脚本命令，也有`premyscript`和`postmyscript`钩子。不过，双重的`pre`和`post`无效，比如`prepretest`和`postposttest`是无效的。

更多有关 scripts 命令，可参考[阮一峰的npm scripts 使用指南](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
