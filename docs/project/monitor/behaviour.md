# 行为监控
监控用户行为是为了了解用户在网站或应用程序中的行为和需求，从而优化用户体验和提高业务转化率。通过监控用户行为，我们可以收集和分析用户的操作和行为数据，帮助我们发现网站或应用程序的问题和瓶颈，了解用户的需求和偏好，从而针对性地改进网站或应用程序的设计和功能，提高用户的满意度和忠诚度，促进业务的增长。

具体来说，通过用户行为监控可以实现以下几个方面的目标：

1. 收集用户行为数据。通过监控用户的点击、浏览、搜索、购买等行为，我们可以收集大量的用户数据，从而了解用户的兴趣、偏好、行为路径、停留时间等信息，为我们提供优化网站或应用程序的基础数据。
2. 优化用户体验。通过分析用户的行为和反馈，我们可以发现网站或应用程序的问题和瓶颈，并及时改进和优化，提高用户的满意度和忠诚度，减少用户流失率。
3. 提高业务转化率。通过分析用户的购买、注册、订阅等行为，我们可以了解用户的需求和行为习惯，从而优化网站或应用程序的设计和功能，提高业务的转化率和收入。
4. 精准营销和个性化推荐。通过分析用户的行为和兴趣，我们可以实现精准营销和个性化推荐，为用户提供更优质的服务和产品，提高用户的满意度和忠诚度，促进业务的增长。

## PV、UV
PV（Page View）和 UV（Unique Visitor）是衡量网站流量和用户访问量的两个指标。PV指的是页面浏览量，即网站的访问量；UV指的是独立访客数量，即访问网站的独立用户数。

我们可以通过 document.referrer 获取来源页面信息，可以判断是否为新用户。同时，通过 Cookie 和 LocalStorage 等机制可以记录用户访问时间和访问次数等信息。

```js
// 记录 PV
var pvCount = localStorage.getItem('pvCount') || 0;
pvCount++;
localStorage.setItem('pvCount', pvCount);

// 记录 UV
var uvCount = localStorage.getItem('uvCount') || 0;
if (!document.referrer || document.referrer.split('/')[2] != location.hostname) {
  uvCount++;
  localStorage.setItem('uvCount', uvCount);
}
```
在实际应用中，为了保证数据准确性和安全性，需要考虑用户隐私和数据保护等问题，每进入页面一次，算一次PV，后端根据业务逻辑，如使用用户id等计算UV。

## 页面停留时长
当用户打开页面时，记录一个开始时间点；当用户关闭页面或跳转到其他页面时，记录一个结束时间点，然后计算两者之差即为页面停留时长。
```js
var startTime = new Date().getTime(); // 记录开始时间

window.addEventListener('beforeunload', function(event) {
  var endTime = new Date().getTime(); // 记录结束时间
  var stayTime = endTime - startTime; // 计算页面停留时长
  // 将数据传递给后端进行处理或记录到本地
});
```
使用框架时，可以利用框架自身的生命周期或路由守卫来计算时间点，如vue `beforeDestroy`，react `componentWillUnmount`


## 事件监听
用户事件可大致分为鼠标事件、键盘事件、滚动事件三类，每种类型的操作行为又可以细分出很多子类。

### 鼠标事件
鼠标事件包含单击、双击、按下、松开、滑动等，可以通过，click、dbclick、mousedown、mouseup、mousemove等事件监听。除了需要记录鼠标事件的操作类型，还应该添加鼠标操作的关键信息，比如单机的按键是左键还是右键，触发单击事件的DOM节点类型。

```js
// 定义一个对象，用于记录鼠标操作的信息
var mouseEventInfo = {
  eventType: '',  // 鼠标事件类型
  buttonType: '', // 鼠标按键类型
  targetNode: ''  // 触发事件的DOM节点类型
};

// 获取目标节点的类型
function getNodeType(target) {
  return target.nodeName;
}

// 监听鼠标事件
document.addEventListener('click', function(event) {
  // 记录鼠标事件类型
  mouseEventInfo.eventType = 'click';

  // 记录鼠标按键类型
  if (event.button === 0) {
    mouseEventInfo.buttonType = 'left';
  } else if (event.button === 1) {
    mouseEventInfo.buttonType = 'middle';
  } else if (event.button === 2) {
    mouseEventInfo.buttonType = 'right';
  }

  // 记录触发事件的DOM节点类型
  mouseEventInfo.targetNode = getNodeType(event.target);

  // 发送数据到后端，可根据需求自定义发送的数据格式
  sendDataToBackend(mouseEventInfo);
});

document.addEventListener('dblclick', function(event) {
  // 记录鼠标事件类型
  mouseEventInfo.eventType = 'dblclick';

  // 记录鼠标按键类型
  if (event.button === 0) {
    mouseEventInfo.buttonType = 'left';
  } else if (event.button === 1) {
    mouseEventInfo.buttonType = 'middle';
  } else if (event.button === 2) {
    mouseEventInfo.buttonType = 'right';
  }

  // 记录触发事件的DOM节点类型
  mouseEventInfo.targetNode = getNodeType(event.target);

  // 发送数据到后端，可根据需求自定义发送的数据格式
  sendDataToBackend(mouseEventInfo);
});

document.addEventListener('mousedown', function(event) {
  // 记录鼠标事件类型
  mouseEventInfo.eventType = 'mousedown';

  // 记录鼠标按键类型
  if (event.button === 0) {
    mouseEventInfo.buttonType = 'left';
  } else if (event.button === 1) {
    mouseEventInfo.buttonType = 'middle';
  } else if (event.button === 2) {
    mouseEventInfo.buttonType = 'right';
  }

  // 记录触发事件的DOM节点类型
  mouseEventInfo.targetNode = getNodeType(event.target);

  // 发送数据到后端，可根据需求自定义发送的数据格式
  sendDataToBackend(mouseEventInfo);
});

```

### 键盘事件
键盘事件可以分为按下和松开两类，可以通过keydown和keyup事件来监听。当用户在页面上按下键盘时，会触发keydown事件；当用户松开键盘时，会触发keyup事件。

类似于鼠标事件，我们也可以通过事件监听器来监控键盘事件。同样地，在事件回调函数中，我们可以记录下用户按下的键盘键码、触发事件的DOM节点等信息。

```js
// 添加键盘事件监听器
document.addEventListener('keydown', function(event) {
  // 记录键盘按下事件相关信息
  var key = event.keyCode || event.which;
  var target = event.target.tagName.toLowerCase();
  var timestamp = Date.now();

  var data = {
    type: 'keyboard',
    action: 'keydown',
    key: key,
    target: target,
    timestamp: timestamp
  };
  // 发送数据到后台
});

document.addEventListener('keyup', function(event) {
  // 记录键盘松开事件相关信息
  var key = event.keyCode || event.which;
  var target = event.target.tagName.toLowerCase();
  var timestamp = Date.now();

  var data = {
    type: 'keyboard',
    action: 'keyup',
    key: key,
    target: target,
    timestamp: timestamp
  };
  // 发送数据到后台
});

```
::: tip
键盘事件可能会被浏览器默认处理，例如浏览器可能会响应用户的键盘快捷键，从而导致我们无法正确地获取到用户的按键信息。
:::
### 滚动事件
滚动事件较为简单，仅需监听scroll事件，在回调函数中，可以通过获取scrollTop值和页面高度等信息，计算出用户的访问深度和停留时长。同时，也可以记录滚动过程中的一些关键信息，比如滚动的方向和速度等，以便进一步分析用户的行为。

```js
let startTime = Date.now();
let startScrollTop = window.pageYOffset;
let startVisibleHeight = window.innerHeight;
let startTotalHeight = document.body.scrollHeight;

window.addEventListener('scroll', function() {
  let currentTime = Date.now();
  let currentScrollTop = window.pageYOffset;
  let currentVisibleHeight = window.innerHeight;
  let currentTotalHeight = document.body.scrollHeight;
  
  // 计算停留时长和访问深度
  let stayTime = currentTime - startTime;
  let scrollDepth = currentScrollTop + currentVisibleHeight;

  // 记录滚动方向和速度
  let direction = currentScrollTop > startScrollTop ? 'down' : 'up';
  let speed = Math.abs(currentScrollTop - startScrollTop) / (currentTime - startTime);

  // 记录关键信息
  let eventInfo = {
    type: 'scroll',
    direction: direction,
    speed: speed,
    target: event.target.tagName,
    stayTime: stayTime,
    scrollDepth: scrollDepth,
    scrollTop: currentScrollTop,
    visibleHeight: currentVisibleHeight,
    totalHeight: currentTotalHeight
  };

  // 上报数据
  report(eventInfo);

  // 更新起始时间和位置信息
  startTime = currentTime;
  startScrollTop = currentScrollTop;
  startVisibleHeight = currentVisibleHeight;
  startTotalHeight = currentTotalHeight;
});

```

## AJAX监听
Ajax 请求包含请求的发起与取消两类，可以通过重写XMLHttpRequest和Fetch方法采集关键信息。如果使用Axios等第三方请求库，可以直接使用相应的拦截器采集信息。如果后端服务提供了根据UUID查询请求详情的功能，那么只需要简单手机请求的地址、方法和UUID即可。

### 重写XMLHttpRequest
```js
const _XMLHttpRequest = window.XMLHttpRequest;

window.XMLHttpRequest = function() {
  const xhr = new _XMLHttpRequest();

  xhr.addEventListener('loadstart', function() {
    // HTTP 请求发出
    const requestInfo = {
      method: xhr.method,
      url: xhr.url,
      startTime: Date.now()
    }
    // 将请求信息存储起来，比如通过发送到后端服务器，或者存储在本地缓存中等。
  });

  xhr.addEventListener('abort', function() {
    // 请求中止
    const requestInfo = {
      method: xhr.method,
      url: xhr.url,
      abortTime: Date.now(),
      abortReason: '用户取消请求'
    }
    // 将请求信息存储起来，比如通过发送到后端服务器，或者存储在本地缓存中等。
  });

  xhr.addEventListener('error', function() {
    // 请求失败
  });

  xhr.addEventListener('load', function() {
    // 请求成功完成
  });

  xhr.addEventListener('timeout', function() {
    // 请求超时
  });

  xhr.addEventListener('loadend', function() {
    // 请求完成，不管成功或失败
  });

  return xhr;
}
```

### 劫持Fetch
```js
const _fetch = window.fetch;

window.fetch = function() {
  const startTime = Date.now();
  return _fetch.apply(this, arguments).then(function(response) {
    const endTime = Date.now();
    // 在请求成功时处理相关逻辑，比如记录请求时间、请求返回数据等信息
    return response;
  }, function(error) {
    // 在请求失败时处理相关逻辑，比如记录请求失败原因等信息
    return Promise.reject(error);
  });
}
```
### axios 拦截器
```js
import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = 'Bearer ' + getToken();
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
```
## 页面路径
页面路径监控是指在用户使用网站或应用时，对用户浏览页面的路径进行监控和记录。这个过程通常与用户的点击行为、页面跳转、页面加载等操作一起上报，来优化用户体验和提升产品质量。

### 利用历史记录API
浏览器提供了历史记录API，可以通过监听该API的事件，获取用户的浏览路径。当用户访问新的页面或触发浏览器前进/后退按钮时，就会触发历史记录API的相关事件。

```js
window.addEventListener('popstate', function(event) {
  console.log('页面路径监控：', event);
});

window.addEventListener('hashchange', event => {
  console.log('页面路径监控：', event.newURL);
}, true)
```

### 利用路由框架
路由框架可以方便地管理页面路径，并提供了相应的事件钩子。一般来说，路由框架的事件钩子包括页面跳转前的钩子、页面跳转后的钩子等，可以通过这些钩子来获取用户的浏览路径。

```js
router.beforeEach((to, from, next) => {
  console.log('页面路径监控：', to.path);
  next();
})
```

### 利用页面加载事件
当页面加载完成后，可以通过记录当前页面的路径来实现页面路径监控。通常使用window.onload事件来监听页面加载完成的时机。

```js
window.onload = function() {
  console.log('页面路径监控：', location.pathname);
};
```