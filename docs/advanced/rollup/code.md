# 配置文件

`Rollup` 配置文件是一个 ES 模块。通常，它被称为 `rollup.config.js` 或 `rollup.config.mjs`，并位于项目的根目录中。它导出一个默认对象，其中包含所需的选项：

```javascript
export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'esm'
	}
};
```

> **注意**：nodejs环境下要运行esm模块化的内容，要么文件名后缀处理为**.mjs**，要么package.json文件中配置**"type":"module"**，因为 Rollup 将遵循 [Node ESM 语义](https://nodejs.org/docs/latest-v14.x/api/packages.html#packages_determining_module_system)。

要运行配置文件，可以在命令行执行

```javascript
npx rollup -c
```

或者直接在**package.json**文件中配置**script**脚本

```shell
{
  ......
  "type":"module",
  "scripts": {
    "dev":"rollup -c"
  },
  ......
}
```

## 配置时的智能提示

由于 Rollup 随附了 TypeScript 类型定义，因此你可以使用 JSDoc 类型提示来利用你的 IDE 的智能感知功能：

```javascript
/**
 * @type {import('rollup').RollupOptions}
 * @description: rollup配置文件
 */
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'bundle'
  },
}
```

或者，你可以使用 `defineConfig` 辅助函数，它应该提供无需 JSDoc 注释即可使用智能感知的功能：

```javascript
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'bundle'
  },
})
```
