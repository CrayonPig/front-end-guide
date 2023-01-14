# 详细规范
本规范以[eslint-config-airbnb](https://github.com/airbnb/javascript)为基础，结合团队自身情况，形成自己的规范。

如已经很了解`eslint-config-airbnb`，只是想知道差异，可查看[差异](/js/difference.md)

## 类型

- 基本类型: 你可以直接获取到基本类型的值

  + `string`
  + `number`
  + `boolean`
  + `null`
  + `undefined`
  + `symbol`
  + `bigint`

  ```javascript
  const foo = 1;
  let bar = foo;

  bar = 9;

  console.log(foo, bar); // => 1, 9
  ```
  + 由于 Symbols 和 BigInts 不能被正确的 polyfill。所以不应在不能原生支持这些类型的环境或浏览器中使用他们。

 -  复杂类型: 复杂类型赋值是获取到他的引用的值。

    + `object`
    + `array`
    + `function`

  ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
  ```

## 引用
- 所有的赋值都用 `const`，避免使用 `var`。eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign.html)

> 为什么？因为这个能确保你不会改变你的初始值，重复引用会导致 bug 并且使代码变得难以理解。

```javascript
  // bad
  var a = 1;
  var b = 2;

  // good
  const a = 1;
  const b = 2;
```

- 如果你一定要对参数重新赋值，使用 `let`，而不是 `var`。eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html)

> 为什么？因为 `let` 是块级作用域，而 `var` 是函数级作用域。

```javascript
  // bad
  var count = 1;
  if (true) {
    count += 1;
  }

  // good, use the let.
  let count = 1;
  if (true) {
    count += 1;
  }
```
- 注意：`let` 和 `const` 都是块级作用域， 而 `var` 是函数级作用域

```javascript
  // const 和 let 都只存在于它被定义的那个块级作用域。
  {
    let a = 1;
    const b = 1;
    var c = 1;
  }
  console.log(a); // 引用错误
  console.log(b); // 引用错误
  console.log(c); // 打印 1
  ```

  上面的代码里，`a` 和 `b` 的定义会报引用错误，这是因为 `a` 和 `b` 是块级作用域， 而 `c` 的作用域是在函数里的。

## 对象
- 使用字面值创建对象。eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object.html)

```javascript
  // bad
  const item = new Object();

  // good
  const item = {};
```

- 使用计算属性名创建一个带有动态属性名的对象。

> 为什么？因为这可以使你在同一个地方定义所有对象属性。

```javascript

  function getKey(k) {
    return `a key named ${k}`;
  }

  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;

  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
```

-  用对象方法简写。eslint: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand.html)

```javascript
  // bad
  const atom = {
    value: 1,

    addValue: function (value) {
      return atom.value + value;
    },
  };

  // good
  const atom = {
    value: 1,

    // 对象的方法
    addValue(value) {
      return atom.value + value;
    },
  };
```
- 用属性值缩写。eslint: [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand.html)

> 为什么？这样写更简洁，且可读性更高。

```javascript
  const lukeSkywalker = 'Luke Skywalker';

  // bad
  const obj = {
    lukeSkywalker: lukeSkywalker,
  };

  // good
  const obj = {
    lukeSkywalker,
  };
```
- 将你的所有缩写放在对象声明的前面。

> 为什么？因为这样能更方便地知道有哪些属性用了缩写。

```javascript
  const anakinSkywalker = 'Anakin Skywalker';
  const lukeSkywalker = 'Luke Skywalker';

  // bad
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  };

  // good
  const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
  };
```
-  只对那些无效的标示使用引号 `''`。eslint: [`quote-props`](http://eslint.org/docs/rules/quote-props.html)

> 为什么？通常我们认为这种方式主观上更易读。不仅优化了代码高亮，而且也更容易被许多 JS 引擎优化。

```javascript
  // bad
  const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
  };

  // good
  const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
  };
```

-  不要直接调用 `Object.prototype`上的方法，如 `hasOwnProperty`、`propertyIsEnumerable`、`isPrototypeOf`。eslint: [`no-prototype-builtins`](htt
ps://eslint.org/docs/rules/no-prototype-builtins)

> 为什么？在一些有问题的对象上，这些方法可能会被屏蔽掉，如：`{ hasOwnProperty: false }` 或空对象 `Object.create(null)`

```javascript
  // bad
  console.log(object.hasOwnProperty(key));

  // good
  console.log(Object.prototype.hasOwnProperty.call(object, key));

  // best
  const has = Object.prototype.hasOwnProperty; // 在模块作用域内做一次缓存。
  console.log(has.call(object, key));
  /* or */
  import has from 'has'; // https://www.npmjs.com/package/has
  console.log(has(object, key));
```

- 对象浅拷贝时，更推荐使用扩展运算符（即 `...` 运算符），而不是 [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)。获取对象指定的几个属性时，用对象的 rest 解构运算符（即 `...` 运算符）更好。eslint: [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)

  ```javascript
  // very bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign(original, { c: 3 }); // 改了 `original` ಠ_ಠ
  delete copy.a; // so does this

  // bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

  // good es6 扩展运算符 ...
  const original = { a: 1, b: 2 };
  // 浅拷贝
  const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

  // rest 解构运算符
  const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
  ```
## 数组
- 用字面量创建数组。eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor.html)

```javascript
// bad
const items = new Array();

// good
const items = [];
```

- 用 [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 代替直接向数组中添加一个值。

```javascript
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```
- 用扩展运算符做数组浅拷贝，类似上面的对象浅拷贝。

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

- 用 [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 将一个类数组对象转成一个数组。

```javascript
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

- 用 `...` 运算符而不是 [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 来将一个可迭代的对象转换成数组。

```javascript
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

- 用 [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 而不是 `...` 运算符去做 map 遍历。 因为这样可以避免创建一个临时数组。

```javascript
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

- 在数组方法的回调函数中使用 return 语句。如果函数体由一条返回一个表达式的语句组成，并且这个表达式没有副作用， 这个时候可以忽略 return，详见 [8.2](#arrows--implicit-return)。eslint: [`array-callback-return`](http://eslint.org/docs/rules/array-callback-return)

```javascript
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good 函数只有一个语句
[1, 2, 3].map((x) => x + 1);

// bad - 没有返回值， 因为在第一次迭代后 acc 就变成 undefined 了
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
```
