# react

## 基本规则
  - 每个文件只包含一个 React 组件
    - 然而，在一个文件里包含多个[没有 state 或纯组件](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)是允许的。 eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - 经常用 JSX 语法。
  - 不要用 `React.createElement`， 除非你从一个非 JSX 文件中初始化 app。
  
## Class vs `React.createClass` vs stateless

- 如果你要用 state refs， 最好用 `class extends React.Component` 而不是 `React.createClass`. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

```jsx
// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});

// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```

如果你没有使用 state、 refs ，最好用正常函数(不是箭头函数)而不是 class：

```jsx
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (不鼓励依赖函数名推断————relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```
## Mixins

  - [不要用 mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

  > Why? mixins 会引入一些隐含依赖，导致命名冲突，会导致滚雪球式的复杂度。大多数情况下，mixins 都可以通过组件，[高阶组件 HOC](https://reactjs.org/docs/higher-order-components.html)或者工具模块更好的实现。

## 对齐
 - 对 JSX 语法使用这些对齐风格。 eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

    ```jsx
    // bad
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // good
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // 如果能放在一行，也可以用单行表示
    <Foo bar="bar" />

    // Foo 里面的标签正常缩进
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>

    // bad
    {showButton &&
      <Button />
    }

    // bad
    {
      showButton &&
        <Button />
    }

    // good
    {showButton && (
      <Button />
    )}

    // good
    {showButton && <Button />}
    ```

## 引号

  - 在 JSX 属性中用双引号(`"`)，但是在js里用单引号(`'`)。eslint: [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)

    > Why? 正常的 HTML 属性也通常使用双引号而不是单引号，所以 JSX 属性也使用这个约定。

    ```jsx
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />
    ```

## 空格

  - 在自闭和标签内空一格。 eslint: [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

    ```jsx
    // bad
    <Foo/>

    // very bad
    <Foo                 />

    // bad
    <Foo
     />

    // good
    <Foo />
    ```

  - JSX 里的大括号不要空格。 eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // bad
    <Foo bar={ baz } />

    // good
    <Foo bar={baz} />
    ```

## Props

  - props 用小驼峰

    ```jsx
    // bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - 如果 prop 的值是 true 可以忽略这个值，直接写 prop 名就可以。 eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // bad
    <Foo
      hidden={true}
    />

    // good
    <Foo
      hidden
    />

    // good
    <Foo hidden />
    ```

  - `<img>` 标签通常会设置 `alt` 属性。如果图片是表现型的， `alt`可以是空字符串或者 `<img>` 必须有 `role="presentation"` 这个属性。 eslint: [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

    ```jsx
    // bad
    <img src="hello.jpg" />

    // good
    <img src="hello.jpg" alt="Me waving hello" />

    // good
    <img src="hello.jpg" alt="" />

    // good
    <img src="hello.jpg" role="presentation" />
    ```

  - 不要在 `<img>` 的 `alt` 属性里用类似 "image"， "photo"， "picture" 这些单词。 eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

    > Why? 因为屏幕阅读器已经将 `img` 发音为图片了，所以这个信息就不需要出现在 alt 文本里了。

    ```jsx
    // bad
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // good
    <img src="hello.jpg" alt="Me waving hello" />
    ```

  - 只用可用的，不抽象的 [ARIA roles](https://www.w3.org/TR/wai-aria/#usage_intro). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

    ```jsx
    // bad - 不是一个 ARIA role
    <div role="datepicker" />

    // bad - 抽象的 ARIA role
    <div role="range" />

    // good
    <div role="button" />
    ```

  - 不要在元素上用 `accessKey`。 eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  > Why? 使用屏幕阅读器和键盘的人使用的键盘快捷键和键盘命令之间的不一致使得可访问性变得复杂。

  ```jsx
  // bad
  <div accessKey="h" />

  // good
  <div />
  ```

  - 避免用数组下标作为 `key` 属性，推荐用稳定的 ID

  > Why? 不使用稳定杆的 ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) 会对组件性能产生消极影响，并且组件状态容易出现问题。 如果数组元素可能会发生变化，我们不推荐使用下标作为key。

  ```jsx
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

  - 对于所有非必须属性，定义一个明确的默认值。

  > Why? propTypes 是一个文档形式，同时提供默认属性意味着使用者不需要假定那么多值。另外，这也意味着你的代码可以忽略类型检查。

  ```jsx
  // bad
  function SFC({ foo, bar, children }) {
    return <div>{foo}{bar}{children}</div>;
  }
  SFC.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
    children: PropTypes.node,
  };

  // good
  function SFC({ foo, bar, children }) {
    return <div>{foo}{bar}{children}</div>;
  }
  SFC.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
    children: PropTypes.node,
  };
  SFC.defaultProps = {
    bar: '',
    children: null,
  };
  ```

  - 少用props扩展运算符，既 `{...props}`
  > Why? 除非你更喜欢把不需要的props属性传入组件。而且对于 v15.6.1 及更早以前的 React， 你只能[给DOM元素传非HTML属性的props](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html)。

  例外：

  - HOC 是代理 props 并且提成了propTypes

  ```jsx
  function HOC(WrappedComponent) {
    return class Proxy extends React.Component {
      Proxy.propTypes = {
        text: PropTypes.string,
        isLoading: PropTypes.bool
      };

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
  ```

  - 扩展一个已知的，有明确属性的对象也是可以的。这个对用 Mocha 的 beforeEach 函数做单测时尤其有用。

  ```jsx
  export default function Foo {
    const props = {
      text: '',
      isPublished: false
    }

    return (<div {...props} />);
  }
  ```

  使用说明：
  尽可能过滤出不需要的属性。同时用[prop-type-exact](https://www.npmjs.com/package/prop-types-exact)去帮助避免bug。

  ```jsx
  // bad
  render() {
    const { irrelevantProp, ...relevantProps  } = this.props;
    return <WrappedComponent {...this.props} />
  }

  // good
  render() {
    const { irrelevantProp, ...relevantProps  } = this.props;
    return <WrappedComponent {...relevantProps} />
  }
  ```

## Refs

  - 无状态组件推荐用 ref callback 函数。 eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

  > Why? react可以更优雅的完成对组件销毁时的变量回收，你只要这么用，react在销毁组件时，this.myRef 很方便的就可以被清理变为null。

    ```jsx
    // bad
    <Foo
      ref="myRef"
    />

    // good
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />
    ```

## 括号

  - 当 JSX 标签有多行时，用圆括号包起来。eslint: [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

    ```jsx
    // bad
    render() {
      return <MyComponent variant="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // good
    render() {
      return (
        <MyComponent variant="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // good, 单行可以直接写
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## 标签

  - 当没有子元素时，最好用自闭合标签。 eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // bad
    <Foo variant="stuff"></Foo>

    // good
    <Foo variant="stuff" />
    ```

  - 如果你的组件有多行属性，用他的闭合标签单独作为结束行。 eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // bad
    <Foo
      bar="bar"
      baz="baz" />

    // good
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## Methods

  - 用箭头函数关闭局部变量。

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={() => doSomethingWith(item.name, index)}
            />
          ))}
        </ul>
      );
    }
    ```

  - 在构造函数里绑定事件处理函数。 eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

    > Why? render 函数中的绑定调用在每次 render 的时候都会创建一个新的函数。

    ```jsx
    // bad
    class extends React.Component {
      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />;
      }
    }

    // good
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv} />;
      }
    }
    ```

  - 不要在 React 组件里使用下划线作为内部方法名前缀。
    > Why? 下划线前缀有时候在其他语言里被用于表示私有。但是 JavaScript 原生并不支持私有，所有东西都是公有的。尽管在你的意图里，对你的属性添加下划线前缀不是真的是他变成私有属性，而且任何属性（不论是不是下划线前缀）都被认为是公有的。详细讨论见问题[#1024](https://github.com/airbnb/javascript/issues/1024)，和[#490](https://github.com/airbnb/javascript/issues/490)

    ```jsx
    // bad
    React.createClass({
      _onClickSubmit() {
        // do stuff
      },

      // other stuff
    });

    // good
    class extends React.Component {
      onClickSubmit() {
        // do stuff
      }

      // other stuff
    }
    ```

  - 确保你的 `render` 函数有返回值。 eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

    ```jsx
    // bad
    render() {
      (<div />);
    }

    // good
    render() {
      return (<div />);
    }
    ```

## Ordering

  - `class extends React.Component` 内部属性的顺序：

  1. 可选的 `static` 方法
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* 如： `onClickSubmit()`、 `onChangeDescription()`
  1. *getter methods for `render`* 如： `getSelectReason()`、 `getFooterContent()`
  1. *optional render methods* 如： `renderNavigation()`、 `renderProfilePicture()`
  1. `render`

  - 如何定义 `propTypes`、 `defaultProps`、 `contextTypes` 等...

    ```jsx
    import React from 'react';
    import PropTypes from 'prop-types';

    const propTypes = {
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    };

    const defaultProps = {
      text: 'Hello World',
    };

    class Link extends React.Component {
      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
      }
    }

    Link.propTypes = propTypes;
    Link.defaultProps = defaultProps;

    export default Link;
    ```

  - `React.createClass` 内部属性排序： eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  1. `displayName`
  1. `propTypes`
  1. `contextTypes`
  1. `childContextTypes`
  1. `mixins`
  1. `statics`
  1. `defaultProps`
  1. `getDefaultProps`
  1. `getInitialState`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* 如： `onClickSubmit()`、 `onChangeDescription()`
  1. *getter methods for `render`* 如： `getSelectReason()`、 `getFooterContent()`
  1. *optional render methods* 如： `renderNavigation()`、 `renderProfilePicture()`
  1. `render`

## `isMounted`

  - 不要用 `isMounted`。 eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

  > Why? [`isMounted` 是反模式][anti-pattern]， 这个在 ES6 class 里不允许的，而且即将被官方废弃。

  [反模式]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
