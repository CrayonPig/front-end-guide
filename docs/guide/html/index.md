
# 基本规范

## DOCTYPE 声明

HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

``` html
<!DOCTYPE html>
```
## 页面语言LANG

根据 `HTML5` 规范：鼓励网站作者在 `html` 元素上指定 `lang` 属性，来指出页面的语言。这样做会有助于语言合成工具来确定怎样发音，以及翻译工具决定使用的规则，等等。

中文考虑浏览器和操作系统的兼容性，使用 `zh-CN` 属性值
``` html
<html lang="zh-CN">
```

英文使用`en-US`属性值

``` html
<html lang="en-US">
```

更多地区语言参考：
```
zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
```

## 编码格式
HTML-5 中默认的字符编码是 UTF-8

指定字符编码的 meta 必须是 head 的第一个直接子元素

``` html
<meta charset="UTF-8" />
```
由于历史原因，有些业务可能会使用 “GBK” 编码

``` html
<meta charset="GBK" />
```
请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 IETF对UTF-8的定义，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。

## 元素及标签闭合
HTML元素共有以下5种：

- 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
- 原始文本元素：script、style
- RCDATA元素：textarea、title
- 外来元素：来自MathML命名空间和SVG命名空间的元素。
- 常规元素：其他HTML允许的元素都称为常规元素。

``` html
<meta> :设置页面元信息
<base> :设置网页所有链接的相对目录(如根目录)
<br> :换行
<hr> :水平线
<img> :图像
<input> :表单元素
<col> :在表格table中定义一个或多个列的属性
<frame> :定义框架的一个窗口（已遗弃）
<link> :定义文档与外部资源的关系的链接
<area> : 标签定义图像映射内部的区域（图像映射指的是带有可点击区域的图像）。
<param> :元素允许您为插入 XHTML 文档的对象规定 run-time 设置，也就是说，此标签可为包含它的
<object > 或者 标签提供参数。
<embed> : HTML5 中新增的,标签定义了一个容器，用来嵌入外部应用或者互动程序（插件）。
<keygen> :该对象提供了一个安全的方式来验证用户。
<source> : 标签为媒体元素（比如 和 ）定义媒体资源。
```

五类元素的区别如下：

- 空元素，不能容纳任何内容（因为它们没有闭合标签，没有内容能够放在开始标签和闭合标签中间）。
- 原始文本元素，可以容纳文本。
- RCDATA 元素，可以容纳文本和字符引用。
- 外部元素，可以容纳文本、字符引用、CDATA 段、其他元素和注释
- 基本元素，可以容纳文本、字符引用、其他元素和注释

团队约定如下
- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签始终添加 “/” 字符
  
```html
<meta charset="UTF-8" />

<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>
	
<br />
```