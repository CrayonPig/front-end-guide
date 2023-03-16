# 命名规范
## 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**短横线**分隔。

```javascript
|- normalize.less
|- base.less
|- date-picker.scss
|- input-number.css
```

## 命名空间

css 命名遵循代码的语义化
- 样式类名全部用小写，首字符必须是字母，禁止数字或其他特殊字符。由以字母开头的小写字母（a-z）、数字（0-9）、中划线 （-）、下划线（_）组成。

- 可以是单个单词，也可以是组合单词，要求能够描述清楚模块和元素的含义，使其具有语义化。避免使用 123456…,red,blue,left,right之类的（如颜色、字号大小等）矢量命名，如class="left-news"、class="2" ，以避免当状态改变时名称失去意义。尽量用单个单词简单描述class名称。

- 双单词或多单词组合方式：形容词-名词、命名空间-名次、命名空间-形容词-名词。例如：news-list、mod-feeds、mod-my-feeds、cell-title
  
常见命名单词如下：
```
头：header
内容：content/container
尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体佈局宽度：wrapper
左右中：left right center
登录条：loginbar
标志：logo
广告：banner
页面主体：main
热点：hot
新闻：news
下载：download
子导航：subnav
菜单：menu
子菜单：submenu
搜索：search
友情链接：friendlink
页脚：footer
版权：copyright
滚动：scroll
内容：content
标签：tags
文章列表：list
提示信息：msg
小技巧：tips
栏目标题：title
加入：joinus
指南：guide
服务：service
注册：regsiter
状态：status
投票：vote
合作伙伴：partner
```

## 命名格式

**css命名格式应按照BEM规范**

BEM的意思就是块（block）、元素（element）、修饰符（modifier），是由Yandex团队提出的一种CSS命名方法。

其背后的想法是将用户界面分为独立的块。即使使用复杂的UI，这也使界面开发变得容易和快速，并且允许重用现有代码而无需复制和粘贴。

- 避免样式冲突
- 减小名称长度
- 提高可阅读性
- 增加样式重用

规范默认以`.block__element--modifier`为标准，有以下的几个约定。实际使用可自行统一，重在思想：

- 中划线：仅作为连字符使用
-- 双中划线：表示不同状态或不同版本
__ 双下划线：双下划线用来连接块和块的子元素

```html
<div class="dropdown-menu__item--active"></div>
```

### Block

一个功能独立的页面组件，可以重复使用

块不应影响其环境，这意味着不应设置块的外部几何形状（边距）或位置
```html
<!-- good -->
<div class="header"> </div >
 
<!-- bad，red-text 是描述外观 -->
<div class="red-text"> </div>
```
### Element
块的复合部分，不能单独使用

元素全名的结构为block-name__element-name

一个元素始终是块的一部分，因此元素名称不可定义为 block__elem1__elem2 的层次结构
```html
<!-- 遵循 block-name__element-name -->
<form class="search-form">
  <div class="search-form__content">
    <input class="search-form__input">
    <button class="search-form__button">Search</button>
  </div>
</form>
 
<!-- search-form__content__button 不遵循 block-name__element-name -->
<form class="search-form">
  <div class="search-form__content">
    <input class="search-form__content__input">
    <button class="search-form__content__button">Search</button>
  </div>
</form>
```

### Modifier

定义块或元素的外观，状态或行为的实体

修饰符的两种类型

::: tip 建议
  使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的。并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式。比如只是一条公共的单独的样式，就没有使用 BEM 格式的意义
:::