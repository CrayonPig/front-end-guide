# 体积及性能优化

## 体积优化

由于监控 SDK 通常作为第一个脚本被加载到页面中，体积的膨胀不仅会增加用户的下载时间，还会增加浏览器解析脚本的时间。对于体积优化，我们可以从宏观和微观两个角度去实现。

### 微观

微观上，我们会去尽可能去精简所有的表达，剥离冗余重复代码，同时尽可能减少以下写法的出现：

#### 过多的 class 和过长的属性方法名

Class 的定义会被转换成 function 声明 + prototype 赋值，以及常用代码压缩工具无法对 object 属性名压缩，过多的面向对象写法会让编译后的 js 代码体积膨胀得非常快。例如下列代码

```js
class ClassWithLongName {
    methodWithALongLongName() {}
}
```

经过 ts 转换后会变成

```js
var ClassWithLongName = /** @class */ (function () {
    function ClassWithLongName() {
    }
    ClassWithLongName.prototype.methodWithALongLongName = function () { };
    return ClassWithLongName;
}());
```

压缩后代码为

```js
var ClassWithLongName=function(){function n(){}return n.prototype.methodWithALongLongName=function(){},n}();
```

可以看到以上长命名都无法被压缩
如果使用函数式编程来代替面向对象编程，能够很好的避免代码无法被压缩的情况：

```js
function functionWithLongName() {
  return function MethodWithALongLongName(){}
}
```

经过压缩后变成

```js
function n(){return function(){}}
```

相较于 class 的版本，压缩后的代码减小了50%以上。

#### 内部函数传参使用数组代替对象

原理同上，对象中的字段名通常不会被代码压缩工具压缩。同时合理使用 TS named tuple 类型可以保证代码可维护性。

```js
function report(event, {optionA, optionB, optionC, optionD}: ObjectType){
}
```

改为

```js
function report(event, [optionA, optionB, optionC, optionD]: NamedTupleType){
}
```

#### 减少新语法和操作符的出现

在不需要判断 nullable 时，尽可能避免 ?. ?? ??= 等操作符的出现。同理，尽可能避免一些例如 spread 操作符、generator 等新语法，这些语法在编译成 es5 后通常会引入额外的 polyfill。TS 会将这些操作符转换成非常长的代码，例如 a?.b会被转换成：

```js
a === null || a === void 0 ? void 0 : a.b
```

过多的 nullish 操作符也是代码体积增加的一个原因。

当然，以上只列举了部分体积优化措施，还有更多优化方法要结合具体代码而议。对于我们的前端监控 SDK，为了性能和体积是可以牺牲一些开发体验的，并且由于使用 TS 类型系统，并不会对代码维护增加很多负担。

### 宏观

从宏观上，我们应该思考如何减少 SDK 所依赖的模块，减少产物包含的内容，增加产物的“信噪比”，有以下几个方式：

#### 拆分文件

我们可以分离出 SDK 中不是必须提前执行的逻辑，拆分成异步加载的文件，仅将必须提前执行的逻辑加入初始脚本。同时将不同功能拆分成不同文件，业务按需加载，这样可以最大程度减少对首屏加载时间的影响。

#### 尽可能避免 polyfill 的使用

polyfill 会显著增加产物体积，我们尽可能不使用存在兼容性的方法。甚至在不需要兼容低端浏览器环境时，我们可以不使用 polyfill。

#### 减少重复的常量字符串的出现次数

对于多次重复出现的常量字符串，提取成公共变量。例如

```js
a.addEventListener('load', cb)
b.addEventListener('load', cb)
c.addEventListener('load', cb)
```

我们可以将 addEventListener和 load 提取公共变量：

```js
let ADD_EVENT_LISTENER = 'addEventLister'
let LOAD = 'load'
a[ADD_EVENT_LISTENER](LOAD, cb)
b[ADD_EVENT_LISTENER](LOAD, cb)
c[ADD_EVENT_LISTENER](LOAD, cb)
```

此段代码压缩后会变成

```js
let d="addEventLister",e="load";a[d](e,cb),b[d](e,cb),c[d](e,cb);
```

除了体积优化以外，随着需求不断增加，功能不断完善，不可避免的会影响到 SDK 的性能。接下来，我们介绍如何测量并优化 SDK 的性能。
