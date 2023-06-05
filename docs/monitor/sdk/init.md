# 初始化

在编写初始化代码之前，我们先来思考，初始化应该包含哪些步骤

1. 实例化sdk
2. 根据传参初始化数据结构
3. 加载插件，并按加载顺序执行插件的init方法

接下来我们安装这个步骤，梳理我们的初始化部分的代码。

## 实例化sdk

首先思考一个问题，为什么要实例化，换句话说，我使用关键字 `new` 的意义是什么？

答案其实很简单，为了方便后续代码以及插件中能够使用 `Beaconify` 原型上的东西，如`this`写法

那么，我们现在有两个选择，使用 `Class` 或者 `Function` 的写法，这里采用`Function`的方式。[这是原因](./optimize.md#体积优化)

说到`Function`的方式去 `new` 一个构造函数出来，你会想到什么，我第一反应是 `Vue2` 的[源码实现](https://github.com/vuejs/vue/blob/49b6bd4264c25ea41408f066a1835f38bf6fe9f1/src/core/instance/index.ts#L9)。所以我们的初始化代码出现了。

```js
function Beaconify(options) {
  if (!(this instanceof Beaconify)) {
    console.error('Beaconify is a constructor and should be called with the `new` keyword');
    return;
  }
  this._init(options);
}

export default Beaconify;
```

## 制定传入参数

上述代码很明显，我们需要传一个配置参数进来，那它应该有哪些属性，我们可以罗列下

- `debug: boolean` 是否开启debug模式，默认为false，debug模式中，可以看到更多的日志，方便第三方插件开发及后续梳理代码
- `dsn: string` 必填项，数据发送的后端地址，由域名和项目key构成，列如: https://examplePublicKey@baidu.com/0
- `plugins: Array<string>` 必填项，后续调用插件列表（尚未定义plugins类型，后续替换），由于项目插件化结构以及适配多场景，所以收集数据能力均由各插件提供，无插件无法使用
