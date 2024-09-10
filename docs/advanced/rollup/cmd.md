# 命令行调用

`Rollup` 提供了两种调用方式 `命令行调用` 和 `代码调用`

## 安装 Rollup

首先，下载并本地安装 `Rollup`

```
npm install rollup
```

查看 `Rollup` 版本

```shell
./node_modules/.bin/rollup --version
# 或者
npx rollup --version
```

## 构建代码

我们使用简单的案例，来学习命令行的调用，创建如下工程

```text
.
├── package.json
└── src
    ├── index.js
    └── util.js
```

**index.js**

```javascript
import { getRandomNum } from "./util.js";
const r = getRandomNum(1, 10)
console.log(r)
```

**util.js**

```javascript
/**
 * 随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns min-max之间的随机整数
 */
export const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 深拷贝
 * @param obj 需要深拷贝的对象
 * @returns 深拷贝对象
 */
export const deepClone = (obj) => {
  if(typeof obj !== 'object' || obj === null) {
    return obj
  }
  const result = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
export default {getRandomNum,deepClone}
```

**查看命令行帮助**

```shell
npx rollup -h
```

**rollup基本命令行**

```javascript
npx rollup src/index.js --file dist/bundle.js
```

可以看到打印结果基本和源码相差不大，而且，自动做了摇树优化，也就是把没有用到的代码自动的删除了

```javascript
/**
 * 随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns min-max之间的随机整数
 */
const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const r = getRandomNum(1, 10);
console.log(r);
```

而且，我们还能选择编译的格式

对于浏览器：

```shell
# 编译为包含自执行函数（'iife'）的 <script>。
npx rollup src/index.js --file dist/bundle.js --format iife
```

对于 Node.js:

```shell
# 编译为一个 CommonJS 模块 ('cjs')
npx rollup src/index.js --file dist/bundle.js --format cjs
```

对于浏览器和 Node.js：

```shell
# UMD
npx rollup src/index.js --file dist/bundle.js --format umd
```

## 常用选项总结

- `-i, --input <entry>`：指定输入文件。
- `-o, --output <output>`：指定输出文件。
- `-f, --format <format>`：指定输出格式（`esm`, `cjs`, `iife`, `umd` 等）。
- `-m, --sourcemap`：生成 Source Map。
- `-c, --config`：使用配置文件。
- `-w, --watch`：开启文件变动监听模式。
- `--plugin <plugin>`：使用指定插件。