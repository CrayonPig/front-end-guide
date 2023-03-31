# 统一规范
代码规范是指对代码编写的规则和规范，旨在提高代码的可读性、可维护性和可扩展性，以及降低代码出错的风险。

例如，在开发团队中，如果没有一个统一的命名规范，开发人员可能会使用不同的命名方式，这会使代码的可读性下降，导致其他开发人员需要花费更多的时间来理解代码。

此外，代码规范还有以下好处
- 提高代码可读性
- 提高代码可维护性
- 降低代码出错的风险
- 提高团队协作效率
- 改善代码质量

## 代码规范
具体前端代码规范已单独整理，请点击查看[代码规范](/guide/)，包含如下内容
- HTML代码规范
- CSS规范
- 静态资源
- Git规范
- JS规范
- 框架规范
- 工具规范

## ESLint工具
已将上述规范整理为可用的ESLint工具，请点击查看[eslint-plugin-guide](https://github.com/CrayonPig/eslint-plugin-guide)

致力于开箱即用的JavaScript、Vue、React、TypeScript的ESlint规则集合

### 安装
```shell
npm install eslint-plugin-guide --dev
```

### 使用

#### 在JS中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base"
  ],
};
```
#### 在TS中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
  ],
};
```

### 在React中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
    "plugin:guide/react", 
    "plugin:guide/reactHooks", 
  ],
};
```
#### 在Vue2中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
    "plugin:guide/vue2", 
  ],
};
```
#### 在Vue3中使用
```js
module.exports = {
  plugins: ["guide"],
  extends: [
    "plugin:guide/base",
    "plugin:guide/typeScript", 
    "plugin:guide/vue3", 
  ],
};
```