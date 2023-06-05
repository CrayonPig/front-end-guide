# 浏览器调试

众所周知，浏览器调试功能非常强大，涉及到了Element、Console、Sources、Network等我们前端开发中常用的各个方面，但由于本章节主要用于研究各类工具的原理，所以我们主要研究Sources模块，后续有时间可以补足其他的。

::: tip
本节所介绍功能均基于MacOS Chrome 114 版本
:::

## Sources

我们新建一个代码示例，包含两个文件 `index.html` 和 `index.js`。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
<script src="./index.js"></script>
```

```js
function arrFlatten (arr, res) {
  arr.forEach(item => {
    //元素是数组则调用自身函数进行递归
    if (Array.isArray(item)) {
      arrFlatten(item, res);
    } else {
      //元素不是数组添加到结果数组中
      res.push(item);
    }
  })
  return res;
}
let arr = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];
let res = [];
console.log(arrFlatten(arr, res));
```

此时打开Chrome的控制台，查看 `Sources` 模块，可以看到这个模块分为三个区域，文件区域、代码区域、调试区域

![chrome sources 模块](@assets/source/dubug/chrome-sources.png)

### 文件区域

文件区域包含五个部分，Page、Filesystem、Overrides、Content script、Snippets。

#### Page

通过图中的Page部分，我们可以很明显的看到，这里展示的当前页面加载的各项资源，诸如HTML、JS、CSS、图片资源。并根据来源不同，进行区分

![sources page模块](@assets/source/dubug/sources-page.png)

#### Filesystem

可以将本地文件添加进来，可以看做是chrome提供的在线ide，可以边修改边调试

![sources filesystem模块](@assets/source/dubug/sources-filesystem.gif)

如上图，在本地启动服务打开某静态页面，在Sources面板下的Filesystem面板添加静态项目到workspaces。

通过Elements面板定位锚点到某DOM节点，在Styles面板直接调试样式，重载页面后，该样式依旧有效。

通过查看样式源码，可以发现Styles面板中调试的样式已经保存到磁盘覆盖原有的样式。

上图我们可以看到Filesystem中的一些文件的文件名有绿色小点，绿点表明浏览器打开的该文件已经与本地磁盘建立连接，在浏览器调试修改文件可以直接映射到本地磁盘

【推荐】在结构、展现、动效（HTML、CSS、JavaScript）分离的静态页面项目中快速调试使用。

#### Overrides

这一部分可以将本地文件覆盖Page里面的文件。

它的用法是，在本地创建一个和Page栏结构完全相同的目录结构，来到我们项目Page一栏，可以看到一个形如top -> 127.0.0.1:5500 -> index的目录结构

然后我在本地也创建一个同样结构的目录，index.js里的内容是一行文本“hello”

然后回到控制台，进入Overrides一栏，选择刚才创建好的目录，然后刷新页面，发现js已经被替换成我的index.js，当然其他文件也可以如此操作。被覆盖的文件上可以看到一个紫色小圆点，说明该文件被本地文件替换

![sources overrides模块](@assets/source/dubug/sources-overrides.gif)

#### Content scripts

这一部分是查看浏览器插件及浏览器本身的资源文件，如图所示

![sources Content scripts模块](@assets/source/dubug/sources-contentScripts.png)

#### Snippets

这个是一个非常实用的功能，允许我们创建代码片段，直接在chrome里运行。

如果你是个web开发者，大概有过这样的经历：想运行一段js代码做实验，怎么办呢？随便找个网页，F12，到console里敲入代码，直接运行。因为浏览器是我们最容易获取的JS运行环境，所以这么做可以让我们快速完成JS小实验。但在console窗口写代码不是很舒服，换行、缩进都很麻烦，调试起来也很烦。这时候可以用Snippets，在这里你可以很舒适地编辑代码，并运行

![sources Snippets模块](@assets/source/dubug/sources-snippets.gif)

### 代码区域

这个区域允许我们

- 查看、编辑代码，或浏览其他资源文件
- 在调试过程中添加断点，查看变量的值等

#### 代码调试

以我们之前的index.js 代码为例，我在第五行加个断点，那么程序运行到这一行的时候，就会停止，这时，我们可以利用调试工具做如下事情：

- 我们可以在“代码区域”查看所有已执行过的变量的值
- 利用断点调试工具调试代码
- 在Watch里也可以访问所有处于该scope的变量，也可以在这里对任意表达式求值
- 查看程序中的线程（Threads），以及线程所处的状态
- 查看程序运行的调用栈（Call Stack），可以选择转移至调用栈的任意一层
- 查看当前所处的作用域（Scope）

![sources 代码调试模块](@assets/source/dubug/sources-code.gif)

### 调试区域

我们在进行代码的调试时，所需要的大部分功能都需要借助调试区域完成

![sources 调试模块](@assets/source/dubug/sources-debug.png)

通过图中我们可以知道，调试区域分为两部分，断点调试工具、断点上下文

#### 断点调试工具

![sources 断点调试工具](@assets/source/dubug/sources-debug-opt.png)

在最新的chrome中，断点调试工具共分为六个按钮，从左到右，分别是：

- **Pause script execution 暂停执行脚本** 它的作用是暂停执行当前脚本，针对当前状态debug
- **Step over next function call 跳过下一个函数调用** 它的作用是运行下一行代码，然后停住，如果下一行代码里有函数调用，Chrome是不会进入该函数的，而是直接将该函数跑完。
- **Step into next function call 进入下一个函数调用** 它的作用同样是运行下一行代码，然后挺住，不同点在于如果下一行代码里有函数调用，Chrome会进入该函数。调用栈里会增加一个函数。
- **Step out of current function 跳出当前功能** 它的作用是运行当前函数其余的代码，并从函数中出来，然后停住。
- **Deactivate breakpoints 停用断点** 它可以使所有断点失效或生效

如果当前处于debug状态下，第一个按钮会变成另一种功能

![sources 断点调试工具](@assets/source/dubug/sources-debug-opt-active.png)

**Resume script execution 恢复脚本执行** 让程序继续运行，直到遇到下一个断点。

::: tip 小技巧
我们可以利用 **暂停执行脚本** 功能调试前端场景中经常出现的Popover

以Element-ui的[Tooltip](https://element.eleme.cn/#/zh-CN/component/tooltip)为例, 打开控制台的Sources，鼠标悬停查看暂停执行脚本的快捷键，(Mac 是 F8 或 command + \)，鼠标放在tooltip组件上，弹出提示后，使用快捷键暂停脚本，就可以在Element中查看dom了

![sources 调试Popover](@assets/source/dubug/sources-popover.gif)
:::

#### 断点上下文

- **Watch** 监听变量的当前值。如果变量未设置或找不到，值将显示为<Not Available>
- **Breakpoints** 展示断点列表，将每个断点所在文件/行数/改行简略内容展示。
- **Scope** 当前断点所在函数执行的作用域内容。
- **Call stack** 函数调用堆栈。函数调用堆栈显示了一条完整的导致代码被暂停的执行路径。
- **XHR/fetch breakpoints** 对达到满足过滤条件的请求进行断点拦截，点击该面板右侧加号按钮，会跳出"Break when URL contains"以填写过滤条件。
- **DOM breakpoints** 给DOM加断点，在达到规定条件时触发断点，截断javascript的执行并且定位到断点处
- **Global listeners** 全局事件监听。注册的全局事件会在这里显示，如onfocus、onerror等。
- **Event listener breakpoints** 在监听事件并且在触发该事件时进入断点，调试器会停留在触发事件代码行。
- **CSP violation breakpoints** 表示一种内容安全策略(Content Security Policy的简写)，如果启用这个策略，那么浏览器会对一些可能不安全的操作给出限制，在抛出错误提醒的同时，将当前操作直接中断。
