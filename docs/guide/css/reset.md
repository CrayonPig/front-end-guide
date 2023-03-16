# 重置样式

PC 端

```css
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  font: inherit;
}

* {
  font-style: normal;
  font-weight: normal;
  /* 禁止链接高亮 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* 禁止链接长按弹出选项菜单 */
  -webkit-touch-callout: none;
}
html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  color: #333;
  background: #f5f6f7;
  font-family: "Open Sans";
  /* 解决Iphone下橱窗字体变大问题 */
  -webkit-text-size-adjust: 100%;
}

/********************* a标签 *********************/
a {
  text-decoration: none;
  color: inherit;
}

a:link {
  /* 禁止链接高亮 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* 禁止链接长按弹出选项菜单 */
  -webkit-touch-callout: none;
}

a:link,
a:visited,
a:hover,
a:active {
  color: #000;
  text-decoration: none;
}
/********************* a标签 *********************/

img {
  display: block;
  border: none;
}

ol,
ul,
li {
  list-style: none;
}

input,
textarea {
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  box-shadow: none;
  /*去除input默认样式*/
  -webkit-appearance: none;
}

table {
  /*为表格设置合并边框模型*/
  /* border-collapse: collapse; */
}

/************common***********/

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background: rgba(155, 167, 182, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.7);
  border-radius: 8px;
}
input::-ms-clear,
::-ms-reveal {
  display: none;
}
```
