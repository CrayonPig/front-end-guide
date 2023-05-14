# 基础搭建

基于此前 [SDK架构](../framework-sdk.md) 我们整理的内容，本次SDK将采用`Lerna`作为管理多包工具，`Rollup`作为构建工具

## Lerna

[Lerna](https://www.lernajs.cn/) 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。

### 初始化项目

建议将Lerna 安装到全局环境中

```sh
npm install -g lerna
```

我这里安装完后，lerna版本是V6.6.2，接下来我们使用lerna进行初始化项目

```sh
mkdir beaconify && cd beaconify
lerna init
```

你的目录结构应该是如下结构：

```txt
- beaconify/
  - packages/
  - package.json
  - lerna.json
```

- `packages` 是 存放子包的目录，由 package.json 中的 workspaces 字段指定路径，也可以在`lerna.json` 中指定，默认为 packages

- `lerna.json`  是 lerna 项目的配置文件，它包含了多个子包的配置信息。
  - `$schema`：SON Schema 的一个关键字，用于指定当前 JSON 文件的架构（schema）文件。
  - `packages`：指定存放子包的目录，默认为 packages。
  - `version`：指定版本号的格式，默认为 independent，表示每个子包可以有独立的版本号。当设为 fixed 时，所有子包的版本号都必须一致。
  - `npmClient`：指定使用的 npm 客户端，默认为 npm。
  - `command`：指定执行命令的方式，默认为 run，表示使用 npm script 的方式来执行命令。
  - `useWorkspaces`：指定是否启用 yarn workspaces 特性，默认为 false。如果设置为 true，则不需要再使用 lerna bootstrap 安装依赖，而是直接使用 yarn install 安装即可。
  - `npmClientArgs`：指定传递给 npm 客户端的额外参数。
  - `ignore`：指定忽略的文件或目录，支持 glob 匹配。

### 添加子包

为方便后续环境的搭建，我们这里先新建两个子包 `core` 和 `utils`，以 `core`包为例，先执行命令

```sh
lerna create core
```

会出现提示让你填写一些资料，我们可以一路回车创建完毕后，手动在子包的 `package.json`中更改，也可以在创建过程中填写

```sh
# 填写包名
package name: (core) @beaconify/core 
# 版本号
version: (0.0.0) 0.0.1
# 描述
description: 
# 关键词 
keywords: 
# 主页
homepage: 
# 开源协议
license: (ISC) MIT
# 入口文件
entry point: (lib/index.js) 
# 绑定的git仓库
git repository: (https://github.com/CrayonPig/beaconify.git) 
```

创建完毕后，目录结构如下

```sh
- packages
  - core
    - __tests__ # 测试用例
      - core.test.js
    - lib # 代码目录
      - core.js # 入口
    - package.json
    - README.md
- lerna.json
- package.json
```

同样的，我们创建`utils` 子包，并lib下的文件都对应`package.json` 中的 `main` 入口文件字段的内容，将文件名重命名为index.js

```sh
- packages
  - core
    - __tests__ # 测试用例
      - core.test.js
    - lib # 代码目录
      - index.js # 入口
    - package.json
    - README.md
  - utils
    - __tests__ # 测试用例
      - utils.test.js
    - lib # 代码目录
      - index.js # 入口
    - package.json
    - README.md
- lerna.json
- package.json
```

### 子包调用

我们接下来使用 `core` 调用 `utils`的方法，首先在根目录下为 `core`安装依赖

```sh
lerna add @beaconify/utils --scope=@beaconify/core
```

表示为 @beaconify/core 的子包中安装 @beaconify/utils 包作为运行时依赖项。

安装成功后，在根目录中会出现 node_modules ， 里面有 @beaconify/utils 包

::: tip
当你在一个子包中安装依赖时，Lerna 会自动将该依赖项添加到根目录下的 package.json 文件中，并将该依赖项安装到根目录下的 node_modules 目录中。同时，Lerna 还会在当前子包中创建一个名为 node_modules 的符号链接，指向根目录下的 node_modules 目录。
:::

将 `core/lib/index.js` 修改为如下内容

```js
const utils = require('@beaconify/utils')

function core() {
  utils();
  console.log('Hello from core');
}

core()

module.exports = core;
```

将 `utils/lib/index.js` 修改为如下内容

```js
function utils() {
  console.log('Hello from utils');
}

module.exports = utils;
```

然后通过node执行 `core/lib/index.js`，成功打印两个日志后，代表引用成功

## Rollup

[Rollup](https://www.rollupjs.com/)是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用。常见的如`Vue.js`和`React.js`均是由 Rollup 打包构建的。


