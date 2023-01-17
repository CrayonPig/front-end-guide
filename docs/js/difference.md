# 差异

## 命名规范
- 我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 `camelCase`。而在 HTML 中则是 `kebab-case`。

[原airbnb规范](https://github.com/airbnb/javascript#naming--filename-matches-export)

单文件组件的文件名应该始终是`kebab-case`

业务中使用是`PascalCase`

**没有内容的组件应该是自闭合的**

```js
components/
|- my-component.vue

import MyComponent from './components/my-component.vue'
```

```vue
// 业务中使用 
<MyComponent />
<MyComponent>
  <span>这是一个组件</span>
</MyComponent>
```