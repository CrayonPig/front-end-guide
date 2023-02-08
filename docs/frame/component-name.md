# 组件命名

## 组件拓展名

如果使用 Vue，则文件扩展名为 `.vue`；如果使用 JavaScript，则文件扩展名为 `.js`；如果使用 JSX，则文件扩展名为 `.jsx`；如果使用 `TypeScript`，则文件扩展名为 `.tx`，同一目录下不得拥有同名的不同拓展名文件。在使用模块导入时，倾向于不添加后缀。如果存在同名但不同后缀的文件，构建工具将无法决定哪一个是需要引入的模块。

## 组件文件名

组件名为多个单词

组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。

> 这样做可以避免跟现有的以及未来的 HTML 元素[相冲突](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)，因为所有的 HTML 元素名称都是单个单词的。

## 单文件组件

> 我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

单文件组件的文件名应该始终是`kebab-case`

业务中使用是`PascalCase`

组件的实例用`camelCase`

**没有内容的组件应该是自闭合的**

```js
components/
|- my-component.vue

import MyComponent from './components/my-component.vue';

const myComponent = <MyComponent />;
```

```vue
// 业务中使用 
<MyComponent />
<MyComponent>
  <span>这是一个组件</span>
</MyComponent>
```


**组件名应该倾向于完整单词而不是缩写，并且对于有约定俗称的单词，不得额外命名**

```vue
<!-- bad -->
<MyWX />
<!-- good -->
<MyWeChat />
```

## 基础组件

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的`base`前缀开头**

```javascript
components/
|- base-button.vue
|- base-table.vue
|- base-icon.vue
|- base-xxx.js
```

这样做的几个好处：

- 当你在编辑器中以字母顺序排序时，你的应用的基础组件会全部列在一起，这样更容易识别。

- 因为组件名应该始终是多个单词，所以这样做可以避免你在包裹简单组件时随意选择前缀 (比如 `MyButton`、`VueButton`)。

- 因为这些组件会被频繁使用，所以你可能想把它们放到全局而不是在各处分别导入它们。使用相同的前缀可以让 webpack 这样工作：

  ```javascript
  var requireComponent = require.context("./src", true, /base-[a-z]\w+\.(vue|js)$/)
  requireComponent.keys().forEach(function (fileName) {
    var baseComponentConfig = requireComponent(fileName)
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig
    var baseComponentName = baseComponentConfig.name || (
      fileName
        .replace(/^.+\//, '')
        .replace(/\.\w+$/, '')
    )
    Vue.component(baseComponentName, baseComponentConfig)
  })
  
  ```

  

## 单例组件名

**只应该拥有单个活跃实例的组件应该以 `the` 前缀命名，以示其唯一性**

这不意味着组件只可用于一个单页面，而是*每个页面*只使用一次。

```javascript
components/
|- the-heading.vue
|- the-sidebar.vue
```

## 组件名中单词顺序

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**

因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。

```javascript
components/
|- search-button-clear.vue
|- search-button-run.vue
|- search-input-query.vue
|- search-input-excludeGlob.vue
|- settings-checkbox-terms.vue
|- settings-checkbox-launchOnStartup.vue
```

还有另一种多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有 100+ 个组件) 的应用下才考虑这么做，因为在多级目录间找来找去，要比在单个 components 目录下滚动查找要花费更多的精力。



