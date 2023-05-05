# 技术选型

微前端是一种架构设计模式，它的实现并不依赖某项功能，从最早的iframe开始，到Single-spa的出现，再到qiankun的完善，最后到现在使用浏览器标准Web Components的其他框架，我们都可以从中选择适合自己项目的微前端方案。

## iframe

iframe 对于前端来说，都不陌生。它是HTML标签之一，它允许将一个 HTML 文档嵌入到另一个 HTML 文档中。这应该就是微前端思想最早的体现吧。

### 优点

1. 原封不动的把嵌入的网页展现出来
2. 可以增加代码的可重用性
3. web标准，兼容性好
4. 解决加载缓慢的第三方内容如图标和广告等的加载问题

### 缺点

1. iframe会堵塞主页面的Onload事件
2. iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
3. 不利于seo
4. 无法预加载，用户体验不好
5. 产生多个页面，不易管理
6. 性能差，每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。
7. url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。
8. UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..
9. 全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。

## qiankun

[qiankun](https://qiankun.umijs.org/zh) 是基于 single-spa 封装，提供了更加开箱即用的 API的一个前端开发框架，它提供了一种将多个独立的子应用程序整合到一个页面中的解决方案。

![qiankun](@assets/micro/qiankun.jpeg)

### 优点

1. 兼容性好
2. 解决single-sap缺点
3. html entry 的方式引入子应用，相比 js entry 极大的降低了应用改造的成本
4. 静态资源预加载能力

### 缺点

1. 项目侵入性强
2. 沙箱支持需加强
3. vite支持不好
4. 加载子应用慢，配置复杂
5. 适配成本高
6. 无法同时激活多个子应用，也不支持子应用保活

## Micro-app

[Micro-app](https://zeroing.jd.com/micro-app/) 是一种基于 Web Components 和微前端架构的前端应用开发模式，它可以将多个独立的 Web 应用程序整合到一个页面中，实现页面的模块化和解耦。

![Micro-app](@assets/micro/Micro-app.png)

### 优点

1. 支持静态资源地址补全
2. 支持元素隔离
3. 插件系统丰富
4. 依靠web标准，无需依赖

### 缺点

1. 接入成本较 qiankun 有所降低，但是路由依然存在依赖
2. 多应用激活后无法保持各子应用的路由状态，刷新后全部丢失
3. css 沙箱依然无法绝对的隔离，js 沙箱做全局变量查找缓存，性能有所优化
4. 支持 vite 运行，但必须使用 plugin 改造子应用，且 js 代码没办法做沙箱隔离
5. 对于不支持 web Components 的浏览器没有做降级处理

### Web Components 的兼容性

![WebComponents](@assets/micro/WebComponents.png)

![WebComponents](@assets/micro/WebComponents2.png)

![WebComponents](@assets/micro/WebComponents3.png)

通过上图可以看到，Web Components 在主流浏览器上的支持已经极其良好，如果对向下兼容要求不严格的话，完全可以在生产环境中使用了。

## Module Federation

Module Federation（模块联邦） 是 Webpack5 提出的一种新型的前端架构，它可以将多个独立的应用程序组合成一个整体，实现前端应用程序的模块化和解耦。Module Federation 的主要思想是将不同的应用程序打包成独立的模块，并通过共享模块来实现应用程序之间的通信和交互。

![Module Federation](@assets/micro/mf.png)

> Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. This is often known as Micro-Frontends, but is not limited to that.
>
> 一个应用可以由多个独立的构建组成，这些构建彼此独立没有依赖关系，他们可以独立开发、部署。这就是常被认为的微前端，但不局限于此

### 优点

1. webpack 联邦编译可以保证所有子应用依赖解耦
2. 应用间去中心化的调用、共享模块
3. 模块远程 ts 支持

### 缺点

1. 强依赖webpack
2. 没有有效的 css 沙箱和 js 沙箱，需要靠用户自觉
3. 子应用保活、多应用激活无法实现
4. 主、子应用的路由可能发生冲突
