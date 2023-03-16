# 书写风格

## 代码缩进

统一使用Tab（两个空格）进行代码缩进
```css
.mod-example {
  padding-left: 15px;
}
```
## 代码格式化
样式书写统一采用展开格式
```css
.mod-example {
  padding-left: 15px;
}
```

### 代码大小写
样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```css
/* bad */
.mod-example {
  display:block;
}

/* good */
.mod-example {
  DISPLAY:BLOCK;
}
```

### 分号
每个属性声明末尾都要加分号；

```css
/* bad */
.mod-example {
  display:block
}

/* good */
.mod-example {
  display:block;
}
```

### 逗号
逗号分隔的取值，逗号之后一个空格

```css
/* bad */
.mod-example {
  box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}

/* good */
.mod-example {
  box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```


### 属性值引号
css属性值需要用到引号时，统一使用单引号
```css
/* bad */
.mod-example { 
	font-family: "Hiragino Sans GB";
}

/* good */
.mod-example { 
	font-family: 'Hiragino Sans GB';
}
```

### 颜色取值
应避免16进制表示法与rgb表示法混用的情况，并优先使用16进制表示法

```css
/* bad */
.example-part1 {
  color: #efefef;
}
.example-part2 {
  color: rgb(252, 252, 252);
}
 
/* good */
.example-part1 {
  color: #efefef;
}
.example-part2 {
  color: #fcfcfc;
}
```
在可能的情况下，使用 3 个字符的十六进制表示法，并始终使用小写的十六进制数字

```css
/* bad */
.mod-example {
  color: #cccccc;
  background-color: #efefef;
}
 
/* good */
.mod-example {
  color: #ccc;
  background-color: #efefef;
}
```

### 在每个声明块的左花括号前添加一个空格
```css
/* bad */
.mod-example{
  padding-left: 15px;
}

/* good */
.mod-example {
  padding-left: 15px;
}
```

### 声明块的右花括号应当单独成行
```css
/* bad */
.mod-example {
  padding-left: 15px;}

/* good */
.mod-example {
  padding-left: 15px;
}
```
### 每条声明语句的 : 后应该插入一个空格，前面无空格
```css
/* bad */
.mod-example {
  padding-left:15px;
}

/* good */
.mod-example {
  padding-left: 15px;
}
```

### 数字
不要为 0 指明单位

```css
/* bad */
.mod-example {
  padding: 0px 10px;
}

/* good */
.mod-example {
  padding: 0 10px;
}
```
使用到小数时，省略前边的 0
```css
/* bad */
.mod-example {
  opacity: 0.5;
}
 
/* good */
.mod-example {
  opacity: .5;
}
```

### 为选择器分组时，将单独的选择器单独放在一行
```css
/* bad */
.selector, .selector-secondary {
  padding-left: 15px;
}
 
/* good */
.selector,
.selector-secondary {
  padding-left: 15px;
}
```
::: tip 建议
选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。
:::
