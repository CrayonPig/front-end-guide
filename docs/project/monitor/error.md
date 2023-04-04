# 异常监控
前端异常监控是指通过对前端代码的监控和分析，及时发现和定位前端代码中的异常，以便于及时修复和提高用户体验。

## 错误采集
### try/catch
Javascript 代码中的 try/catch 块，可以用来捕获错误，并在错误处理程序中抛出错误。被捕获的错误不会影响后续代码执行，但是需要依赖开发人员手动对可能出现异常的代码块进行包裹。
```js
try {
  // 执行可能会抛出错误的代码
  throw new Error("test");
} catch (error) {
  // 处理错误
  console.log(error); // Error: test at <anonymous>:3:9
}
```
在try块中的代码如果抛出错误，那么程序会立即跳转到catch块中的代码。catch块中的error参数会包含错误的详细信息，包括错误类型和错误信息等。在catch块中，可以编写处理错误的逻辑，例如记录错误日志、提示用户等。

try/catch只能捕获当前执行的上下文抛出的错误。如果被包裹的代码块脱离了当前执行的上下文，则try/没法捕获。
```js
try {
  // 执行可能会抛出错误的代码
  setTimeout(() => {
    throw new Error("test");
  }, 1000)
} catch (error) {
  // 处理错误
  console.log(error); // 不会被执行
}
```
在实际开发中，开发人员只会针对一些特殊的部分使用try/catch。如果大量使用try/catch，那么不仅会增加开发负担，也会降低代码的可读性，因此需要一种对工程低侵入的错误采集方案。

### window.onerror
window.onerror 是一个用于 JavaScript 错误处理的全局事件。当 JavaScript 运行时出现未被捕获的错误时，window.onerror 会被触发，可以使用它来捕获和处理 JavaScript 运行时的异常。

```js
window.onerror = function(message, source, lineno, colno, error) {
  // 处理异常信息
  console.log('错误信息', message);
  console.log('发生错误的脚本 URL', source);
  console.log('发生错误的行号', lineno);
  console.log('发生错误的列号', colno);
  console.log('错误Error对象的堆栈', error);
  // 返回true， 阻止执行默认事件处理函数，控制台不会在默认打印错误信息
  return true;
}
```

window.onerror不能捕获语法错误和promise异步错误（包括网络错误、资源加载）。

> 当一项资源（如图片或脚本）加载失败，加载资源的元素会触发一个 Event 接口的 error 事件，这些 error 事件不会向上冒泡到 window，但能被捕获。而window.onerror不能监测捕获。

### window.addEventListener('error')
window.addEventListener('error') 具有window.onerror的大部分功能，但它并不能通过返回true的形式来阻止默认事件处理函数的执行，可以通过e.preventDefault()来阻止默认事件处理函数的执行。在错误的捕获时机上，它比onerror更早被触发。

```js
window.addEventListener('error', function(event) {
  console.log('报错信息: ', event.message);
  console.log('错误文件地址: ', event.filename);
  console.log('错误行数: ', event.lineno);
  console.log('错误列数: ', event.colno);
  console.log('错误堆栈: ', event.error);
});
```
资源加载的事件不会再window上冒泡，但是开发人员可以在事件捕获阶段采集错误，将addEventListener()的第三个参数设置为true，即可在事件捕获阶段采集到错误，从而实现对资源加载错误的监听。

```js
window.addEventListener('error', function(event) {
  const { target } = e;
  console.log('资源加载失败标签:', target.nodeName);
  console.log('资源地址:', target.src);
}, true);
```
开发人员在使用 window.addEventListener(error)采集错误时,需要区分 Javascript 错误和资源加载错误，可以利用 lineno 和 colno 字段实现。当资源加载失败时，回调参数中的两个字段的值为undefined。同时，也可以利用 instanceof 来判断，JavaScript 错误抛出的事件类型为 ErrorEvent,资源加载失败抛出的事件类型为 Event，ErrorEvent 为 Event 的子类型。优化后的代码如下:

```js
window.addEventListener('error', (e) => {
  if (e instanceof ErrorEvent) {
    console.log('JavaScript 报错');
    console.log('报错信息:', message);
    console.log('错误文件地址:', filename);
    console.log('错误文件行数:', lineno);
    console.log('错误文件列数:', colno);
    console.log('错误堆栈:',error);
  } else {
    console.log('资源加载报错')
    console.log('资源加载失败标签:', target.nodeName);
    console.log('资源地址:', target,src);
  }
}, true);
```

### 异步错误
Javascript还有异步错误，这种错误没办法被上述三种方法捕获，需要使用addEventListener 监听 unhandledrejection 事件。

unhandledrejection 事件用于捕获异步操作中未被处理的 Promise 错误。当一个 Promise 被拒绝（rejected）但没有被处理（没有 catch 或者 then 带有第二个参数），这个事件就会被触发。

```js
window.addEventListener('unhandledrejection', function(event) {
  console.warn('Unhandled promise rejection:', event.reason);
});
```
当发生未处理的 Promise 错误时，控制台将会输出类似如下的错误信息：
```
Uncaught (in promise) xxx
(anonymous) @ VM207:1
```

需要注意的是，unhandledrejection 事件不会捕获已经被处理的 Promise 错误。如果一个 Promise 被拒绝，但被处理了，那么不会触发该事件。

除了使用 unhandledrejection 事件捕获异步错误，还可以在 Promise 调用链中添加 catch 处理函数来处理错误，以避免错误未被处理而导致程序出错。


