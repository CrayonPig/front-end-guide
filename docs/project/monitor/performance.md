# 性能监控
前端性能监控是指通过收集、分析前端性能数据，以便于发现和解决应用性能问题的过程。前端性能监控可以帮助我们了解应用程序的整体性能和用户体验，并且可以帮助我们优化页面加载速度、提高应用程序的性能和可靠性，从而提高用户的满意度。

## Performance API

Performance API 是 HTML5 提供的 API 之一，用于在 Web 前端监控性能数据，可以帮助开发者对 Web 应用进行性能优化。Performance API 可以帮助我们了解页面的加载时间、资源的加载时间、页面渲染时间以及 JavaScript 执行时间等。

window.performance 会返回一个Performance类型的对象，其中，performance.timing包含了各种与浏览器性能有关的时间数据，提供浏览器各处理阶段的耗时。

::: warning
 Navigation Timing Level 2 规范的出现，使得Navigation Timing 规范已被弃用，为更好的向后拓展，推荐优先使用新的规范，并使用老规范做兼容
::: 
### Navigation Timing  规范
```js
window.performance.timing
```
如下图是W3C Navigation Timing Level 1 的规范，2012 年底进入候选建议阶段，至今仍在日常使用中。
从当前浏览器窗口卸载旧页面开始，到新页面加载完成，整个过程一共被切分为 9 个小块：提示卸载旧文档、重定向/卸载、应用缓存、DNS 解析、TCP 握手、HTTP 请求处理、HTTP 响应处理、DOM 处理、文档装载完成。每个小块的首尾、中间做事件分界，取 Unix 时间戳，两两事件之间计算时间差，从而获取中间过程的耗时（精确到毫秒级别）

![Navigation Timing  规范](@assets/performance1.png)

### Navigation Timing Level 2 规范: 
```js
window.performance.getEntriesByType('navigation')[0]
```
Level 2精度更高，功能更强大，层次更分明的。比如独立划分出来的 Resource Timing，可以获取具体资源的详细耗时信息。

![Navigation Timing Level 2 规范](@assets/performance.png)

浏览器加载页面的过程被区分成了9个阶段，performance.timing将每个阶段的关键节点发生变更时的毫秒时间戳都进行了标记，每个节点的时间戳的含义如下：
- navigationStart：浏览器开始获取当前文档的时间。
- unloadEventStart：当前文档 unload 事件抛出的时间，如果没有则返回0。
- unloadEventEnd：当前文档 unload 事件完成的时间，如果没有则返回0。
- redirectStart：重定向开始的时间，如果没有则返回0。
- redirectEnd：重定向结束的时间，如果没有则返回0。
- fetchStart：开始获取文档的时间，该时间通常与 navigationStart 相同。
- domainLookupStart：开始进行 DNS 查询的时间，如果使用了缓存，则与 fetchStart 相同。
- domainLookupEnd：DNS 查询结束的时间，如果使用了缓存，则与 fetchStart 相同。
- connectStart：开始建立连接的时间，如果有多个连接，则返回最早的时间。
- connectEnd：连接建立完成的时间，如果有多个连接，则返回最晚的时间。
- secureConnectionStart：开始安全连接的时间，如果不是安全连接则返回0。
- requestStart：向服务器发送请求的时间。
- responseStart：接收到响应的时间，如果没有则返回0。
- responseEnd：响应结束的时间，如果没有则返回0。
- domLoading：开始解析文档的时间。
- domInteractive：文档解析完成并且所有子资源（如图片、样式表）已经下载完成的时间。
- domContentLoadedEventStart：DOMContentLoaded 事件抛出的时间。
- domContentLoadedEventEnd：DOMContentLoaded 事件完成的时间。
- domComplete：DOM 树构建完成的时间，但可能包括资源的加载。
- loadEventStart：load 事件抛出的时间。
- loadEventEnd：load 事件完成的时间。

通过对以上指标取差值，可以得到每个阶段耗费的时间，从而建立更加直观的指标，部分示例如下：
- 重定向耗时：redirectEnd - redirectStart
- DNS解析耗时：domainLookupEnd - domainLookupStart
- TCP连接耗时：connectEnd - connectStart
- SSL安全连接耗时：connectEnd - secureConnectionStart
- DNS查询耗时：domainLookupEnd - domainLookupStart
- TTFB 读取页面第一个字节的时间：responseStart - (navigationStart || fetchStart)
- 卸载页面的时间：unloadEventEnd - unloadEventStart
- request请求耗时(TTFB)：responseStart - requestStart
- 解析dom树耗时：domComplete - domInteractive
- 白屏时间 ：domInteractive -  fetchStart
- domReadyTime：fetchStart - domContentLoadedEventEnd 
- 页面完全加载时间：loadEventStart - fetchStart
- http 头部大小：transferSize - encodedBodySize
- 重定向次数：performance.navigation.redirectCount
- 重定向耗时：redirectEnd - redirectStart

除此之外，performance还提供了getEntries()方法，它会返回一个PerformanceEntry对象数组，用于记录浏览器的绘制、资源加载等行为，可以借助它获取一些更复杂的指标

## 核心性能指标
核心 Web 指标是适用于所有网页的 Web 指标子集，每位网站所有者都应该测量这些指标，并且这些指标还将显示在所有 Google 工具中。每项核心 Web 指标代表用户体验的一个不同方面，能够进行实际测量，并且反映出以用户为中心的关键结果的真实体验。

核心 Web 指标的构成指标会随着时间的推移而发展。当前针对 2020 年的指标构成侧重于用户体验的三个方面——加载性能、交互性和视觉稳定性——并包括以下指标（及各指标相应的阈值）：
<center>
<img src="@assets/lcp_ux.svg" width="32%" title="lcp"/>
<img src="@assets/fid_ux.svg" width="32%" title="fid"/>
<img src="@assets/cls_ux.svg" width="32%" title="cls"/>
</center>

- Largest Contentful Paint (LCP)：页面加载过程中，最大的可见内容绘制时间。通俗来说，即是页面上最显眼的元素（如图片、文字、视频等）加载完成并显示在屏幕上的时间点。根据Google的建议，页面的LCP时间应该小于2.5秒，否则用户体验会受到影响。
- First Input Delay (FID)：测量页面上第一个可交互元素（如按钮、链接等）的响应延迟时间。FID是用户首次与页面进行交互的时间，通常与页面的JavaScript处理时间相关。根据Google的建议，页面的FID时间应该小于100毫秒，否则用户体验会受到影响。
- Cumulative Layout Shift (CLS)：累积布局位移，指页面上所有元素在页面加载过程中的布局变化。例如，当用户在填写表单时，输入框被其他元素挤动的情况，这些布局变化都会影响到用户的体验。Google的建议是，页面的CLS指数应该小于0.1，否则用户体验会受到影响。

Google 提供开源工具库[web-vitals](https://www.npmjs.com/package/web-vitals)，开发人员可以在项目中引入、调用对应的方法，获取性能指标数据。
```js
import { getLCP, getFID, getCLS } from 'web-vitals';

getLCP(console.log);
getFID(console.log);
getCLS(console.log);
```

## 其他指标
除了上述三个指标，其余指标也可以帮助开发人员衡量网站性能。它们可以做为核心指标的补充，帮助开发人员获取更多的信息，排查出特定的问题。

- TTFB（Time To First Byte）：是指从客户端发出HTTP请求到服务端返回第一个字节的时间，反映了服务器响应速度。
- FCP（First Contentful Paint）：是指页面中的第一块内容（例如文本、图片、svg等）被渲染到屏幕上的时间，它反映了页面加载速度。
- TBT（Total Blocking Time）：是指在FCP（或首屏渲染）之后到页面上所有长任务执行完毕之前的时间总和，它反映了页面是否会有明显的卡顿现象。
- TTI（Time To Interactive）：是指页面从完全空白的状态到可以响应用户交互的时间，它包括了FCP时间和JavaScript加载执行时间。
- FMP（First Meaningful Paint）：是指页面中最有意义的内容开始出现的时间，反映了用户对页面内容的第一次感知。

```js
// 计算 TTFB
const ttfb = performance.timing.responseStart - performance.timing.requestStart;

// 计算 FCP
const observer = new PerformanceObserver((entryList) => {
  const fcpEntry = entryList.getEntriesByName('first-contentful-paint')[0];
  const fcp = fcpEntry.startTime;
  console.log(`FCP: ${fcp}`);
});

observer.observe({ type: 'paint', buffered: true });

// 计算 TBT
const observer = new PerformanceObserver((entryList) => {
  const longTasks = entryList.getEntries().filter((entry) => entry.name === 'self');
  const blockingTime = longTasks.reduce((total, task) => total + task.duration, 0);
  console.log(`TBT: ${blockingTime}`);
});

observer.observe({ entryTypes: ['longtask'] });

// 计算 TTI
const observer = new PerformanceObserver((entryList) => {
  const ttiEntry = entryList.getEntriesByName('firstInteractive')[0];
  const tti = ttiEntry.startTime;
  console.log(`TTI: ${tti}`);
});

observer.observe({ type: 'largest-contentful-paint', buffered: true });

// 计算 FMP
const observer = new PerformanceObserver((entryList) => {
  const fmpEntry = entryList.getEntriesByName('first-paint')[0] || entryList.getEntriesByName('first-contentful-paint')[0];
  const fmp = fmpEntry.startTime;
  console.log(`FMP: ${fmp}`);
});

observer.observe({ type: 'paint', buffered: true });
```