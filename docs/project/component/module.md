# 组件化

前端组件化是将一个页面或应用程序拆分成多个独立的组件，每个组件都有自己的功能和样式，可以在不同的页面或应用程序中重复使用。这种组件化的方式可以提高代码的复用性、可维护性和可扩展性。

## 高内聚低耦合
组件化的核心思想是高内聚低耦合。

高内聚低耦合是一种软件设计原则，旨在提高代码的可读性、可维护性和可扩展性。它建议将相关的功能模块组合在一起，减少模块之间的依赖性，并使模块的实现细节对其他模块不可见。

具体来说，高内聚低耦合的原则要求：

- 高内聚：一个模块内部各个元素之间的联系应该尽可能紧密，以实现单一职责和高度独立的功能。也就是说，一个模块应该只做一件事情，并且将所有与该功能相关的代码放在一起，而不是分散在多个文件或类中。
- 低耦合：不同模块之间的依赖关系应该尽可能少，即模块之间应该是松散耦合的。模块之间的关系应该通过接口或抽象类等方式进行定义，以减少模块之间的直接依赖关系。

高内聚低耦合的优点包括：
- 更易于理解和维护：相对于松散耦合的代码，高内聚低耦合的代码更容易查找和修改，因为所有相关的代码都在一起。
- 更易于测试和重用：高内聚低耦合的代码更容易进行单元测试和模块重用，因为模块的功能和接口都是清晰和独立的。
- 更易于扩展和修改：高内聚低耦合的代码更容易进行扩展和修改，因为模块之间的依赖关系是明确的，可以通过修改接口或抽象类来影响模块的行为。

举个简单的例子，实现购物车功能
```js
// 购物车模块
var cartModule = (function() {
  // 私有变量和方法
  var cartItems = []; // 商品列表
  var totalPrice = 0; // 总价

  function addItem(item) { // 添加商品
    cartItems.push(item);
    totalPrice += item.price;
  }

  function removeItem(index) { // 删除商品
    var item = cartItems.splice(index, 1)[0];
    totalPrice -= item.price;
  }

  function getItems() { // 获取商品列表
    return cartItems;
  }

  function getTotalPrice() { // 获取总价
    return totalPrice;
  }

  // 公有方法
  return {
    addItem: addItem,
    removeItem: removeItem,
    getItems: getItems,
    getTotalPrice: getTotalPrice
  };
})();

// 商品模块
var itemModule = (function() {
  // 私有变量和方法
  var name;
  var price;

  // 公有方法
  return {
    setName: function(value) { // 设置名称
      name = value;
    },
    setPrice: function(value) { // 设置价格
      price = value;
    },
    getName: function() { // 获取名称
      return name;
    },
    getPrice: function() { // 获取价格
      return price;
    },
    addToCart: function() { // 添加到购物车
      var item = {
        name: name,
        price: price
      };
      cartModule.addItem(item);
    }
  };
})();

// 使用示例
itemModule.setName("苹果");
itemModule.setPrice(5);
itemModule.addToCart();
console.log(cartModule.getItems()); // 输出 [{name: "苹果", price: 5}]
console.log(cartModule.getTotalPrice()); // 输出 5
```

在这个例子中，购物车模块和商品模块被封装在各自的匿名函数中。购物车模块包含了私有变量和方法，如商品列表和计算总价的方法；同时，它也暴露了公有方法，如添加商品和获取商品列表和总价。商品模块也类似，包含了私有变量和方法，如商品名称和价格；同时，它也暴露了公有方法，如添加到购物车和获取商品信息。

通过这种方式，购物车模块和商品模块可以在不互相依赖的情况下工作。商品模块只需要调用购物车模块暴露的公有方法来添加商品到购物车，而不需要了解购物车模块的内部实现。这就体现了高内聚低耦合的设计原则。

## 模块化
在高内聚低耦合的思想下，前端逐渐衍生出了模块化。

前端模块化可以将一个大型的前端项目拆分成多个小模块，方便管理和维护。常见的前端模块化规范有 CommonJS、AMD、CMD 和 ES6 Module。

### CommonJS

CommonJS 规范最初是为了 Node.js 而设计的，目的是让 JavaScript 可以在服务端运行。CommonJS 规范的实现方式是通过 require() 方法加载模块，并通过 module.exports 导出模块。

示例：
```js
// module1.js 
function add(a, b) { 
  return a + b; 
} 
module.exports = { 
  add 
}
```
```js

// module2.js 
const { add } = require('./module1'); 

console.log(add(2, 3));
```

### AMD

AMD（Asynchronous Module Definition）是一个在浏览器端异步加载模块的规范，常用的实现库是 require.js。AMD 规范的特点是可以异步加载模块，适用于浏览器端，但不适用于 Node.js。

示例：
```js

// module1.js 
define(function() { 
  function add(a, b) { 
    return a + b; 
  } 
  return { add };
});
```
```js
// module2.js 
define(['./module1'], function(module1) { 
  console.log(module1.add(2, 3)); 
});
```

### CMD

CMD（Common Module Definition）是一个在浏览器端异步加载模块的规范，与 AMD 类似，但是 CMD 是在模块使用时再去加载，而不是在定义时就去加载。CMD 规范的实现库是 sea.js。

示例：
```js
// module1.js 
define(function(require, exports, module) { 
  function add(a, b) { 
    return a + b; 
  } 
  module.exports = { add } 
});
```
```js
// module2.js 
define(function(require) { 
  const module1 = require('./module1'); 
  console.log(module1.add(2, 3)); 
});
```
### ES6 Module
ES6 Module 是 ECMAScript 6 引入的原生模块化规范，支持异步加载和静态加载。ES6 Module 的特点是可以通过 import 和 export 关键字来导入和导出模块，同时也支持默认导出和命名导出。

示例：
```js
// module1.js 
export function add(a, b) { 
  return a + b; 
}
```
```js
// module2.js 
import { add } from './module1'; 
console.log(add(2, 3));
```
## 组件化
前端通过高内聚低耦合的思想指导，通过模块化的方式拆分，形成了具有前端特色的组件化。

我们可以认为，组件就是页面里的 UI 组件，一个页面可以由很多组件构成。例如一个后台管理系统页面，可能包含了 Header、Sidebar、Main 等各种组件。

一个组件又包含了 template(html)、script、style 三部分，其中 script、style 可以由一个或多个模块组成。

![组件化拆分](@assets/module.png)


在前端开发中，常见的组件化技术包括以下几种：

- 原生组件化：利用 HTML、CSS 和 JavaScript 等原生技术手动实现组件化，例如使用 Web Components、自定义元素等。
- 基于框架的组件化：利用前端框架，如 React、Vue、Angular 等提供的组件化机制来实现组件化。这些框架提供了组件的定义、渲染、生命周期管理等功能，使得组件化开发更加方便和高效。
- UI 库/组件库：利用现成的 UI 库或组件库，如 Ant Design、Element UI、Bootstrap 等，通过调用库中提供的组件来实现组件化开发。这种方式可以极大地提高开发效率，但需要注意与项目需求的匹配程度。

## 小结
模块化、组件化已经成了前端工程领域不可分割的一部分，利用好组件化的思想，可以极大地提高开发效率。建议有条件的团队，可以尝试封装属于自己团队的组件库。