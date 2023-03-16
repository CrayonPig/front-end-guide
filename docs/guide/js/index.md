# 基本规范

## 缩进
统一使用Tab（两个空格）进行代码缩进

```js
if (x < y) {
  x += 10;
} else {
  x += 1;
};
```

## 分号
一行代码写完统一在结尾处要加分号。

## ES6,7
必须强制使用 ES6, ES7 的新语法，比如箭头函数、await/async ， 解构， let ， for…of 等等

## 括号
在`if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, `with`关键字后必须有大括号（即使代码块的内容只有一行）
```js
if ( a === 'n') {
  // do somethings
}
```
## 注释
### 单行注释
注释单独一行的情况下，注释的//后面要跟一个空格

```js
// 这是个注释
const helloTxt = 'hello world!';
```

注释如果和代码同一行，代码分号结束后，要跟一个空格，注释的//后也要跟一个空格

```js
const helloTxt = 'hello world!'; // 这是个注释
```
### 多行注释

多行注释使用下面这种形式：
```js
/**
 * 代码注释1
 * 代码注释2
 */
```
多行注释建议在以下几种情况使用：
- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的 HACK 代码
- 业务逻辑强相关的代码

### 函数注释
复杂的函数，所有类，都必须进行函数注释，函数注释使用业界统一的规范，方便后续使用 jsdoc 生成文档。

#### 普通函数注释
```js
/**
 * 注册application
 * @param {string} appName application名称
 * @param {Object|Function<Promise>} applicationOrLoadFunction app配置或app异步加载函数
 * @param {Function<Boolean>} activityWhen 判断是否应该被挂载
 * @param {Object} customProps 自定义配置
 * @return {Promise}
 */

export function registerApplication(appName, applicationOrLoadFunction, activityWhen, customProps = {}) {
  if (!appName || typeof appName !== 'string') {
    throw new Error('the app name must be a non-empty string');
  }
  if (getAppNames().indexOf(appName) !== -1) {
    throw new Error('There is already an app declared with name ' + appName);
  }
  if (typeof customProps !== 'object' || Array.isArray(customProps)) {
    throw new Error('the customProps must be a pure object');
  }

  if (!applicationOrLoadFunction) {
    throw new Error('the application or load function is required');
  }

  if (typeof activityWhen !== 'function') {
    throw new Error('the activityWhen must be a function');
  }

  if (typeof applicationOrLoadFunction !== 'function') {
    applicationOrLoadFunction = () => Promise.resolve(applicationOrLoadFunction);
  }

  APPS.push({
    name: appName,
    loadApp: applicationOrLoadFunction,
    activityWhen,
    customProps,
    status: NOT_LOADED,
    services: {}
  });

  return invoke();
}
```

#### API注释
```js
/**
 * 更新菜单左侧列表权限
 * @param data
 * @returns {Promise<AxiosResponse<T>>}
 */
export function updateMenu(data) {
  return request({
    url: `/vue-antd-admin/menu/list/update`,
    method: 'post',
    data
  });
}
```
## 条件判断和循环最多三层
条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过 3 层请抽成函数，并写清楚注释。

## 慎用 console.log
因 console.log 大量使用会有性能问题，所以在`生产环境`中谨慎使用 log 功能

