# 书写风格
## HTML 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔。

```javascript
|- error_report.html
|- success_report.html
```
## 代码缩进

统一使用Tab（两个空格）进行代码缩进
```html
<div>
  <a href="#"></a>
</div>
```

## HTML代码大小写

HTML标签名、类名、标签属性和大部分属性值统一用小写

```html
<div class="demo"></div>
```

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合
```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>
	
<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```

## 类型属性
不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

```html
<link rel="stylesheet" href="" >
<script src=""></script>
```

## 引入 CSS 和 JavaScript
引入 CSS 必须在 `head` 标签里引入。对于引入 Javascript，除了基础库等比较基础性的脚本文件，其他都在靠近 `body` 结束标签前面引入。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>demo</title>
  <link type="text/css" rel="stylesheet" href="code-guide.css" />
  <script type="text/javascript" src="jquery.js"></script>
</head>
<body>
  <div>
    ......
  </div>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```
## 元素属性

元素属性值使用双引号语法

```html
<link rel="stylesheet" href="example.css">
```

Boolean 属性指不需要声明取值的属性。XHTML 需要每个属性声明取值，但是 HTML5 并不需要。

一个元素中 Boolean 属性的存在表示取值 true，不存在则表示取值 false。简而言之，尽量不要为 Boolean 属性添加取值

```html
<input type="text" disabled>
 
<input type="checkbox" value="1" checked>
 
<select>
  <option value="1" selected>1</option>
</select>
```

建议自定义属性必须以 data- 为前缀，便于阅读。

```html
<a data-modal="toggle" href="#">
  Example link
</a>
```
使用a标签作为JS事件处理时，统一使用 href="javascript:;" 伪协议
```html
<a href="javascript:;">Click button</a>
```

## 避免空的src和href

当link标签的href属性为空、script标签的src属性为空的时候，浏览器渲染的时候会把当前页面的URL作为它们的属性值，从而把页面的内容加载进来作为它们的值，不同浏览器表现如下：

- IE 向页面所在的目录发送请求；
- Safari、Chrome、Firefox 向页面本身发送请求；
- Opera 不执行任何操作。

空 src 产生请求的后果：

- 给服务器造成意外的流量负担，尤其时日 PV 较大时；
- 浪费服务器计算资源；
- 可能产生报错。

空的 href 属性也存在类似问题。用户点击空链接时，浏览器也会向服务器发送 HTTP 请求，可以通过 JavaScript 阻止空链接的默认的行为


## 代码嵌套
每个块级元素独立一行

行内元素换行时，会自动产生间距，行内元素并列显示

```html
<div>
  <h1></h1>
  <p></p>
</div>	
<p>
  <span></span><a href="#"></a>
</p>
```

行内元素不能嵌套块元素

a标签不能嵌套a

```html
<h1>
  <span></span>
</h1>
<p>
  <span></span><a href="#"></a>
</p>
```
ul、li/ol、li/dl、dt、dd拥有父子级关系的标签；ul、ol下都只能跟li，dl下只能跟dt.dd

```html
<ul>
  <li></li>
  <li></li>
  <ol></ol>
  <ol></ol>
</ul>
<dl>
  <dt></dt>
  <dt></dt>
  <dd></dd>
  <dd></dd>
</dl>
```