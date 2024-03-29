# 数据上报
从前端的角度来讲，数据上报是前端监控系统的最后一个环节，也是至关重要的一环。它代表着我们之前收集的数据是否真正能够使用，可能单说数据上报，很多人会说，这不就是后端开个接口，前端直接调用完事，然而实际使用时，就会发现一些问题。

1. 监控系统跟业务系统是两个独立的服务，存在跨域问题
2. 在页面关闭前上报，发送的请求会被截断
3. 需要等待服务器返回响应结果，可能会导致浏览器的主线程被阻塞，影响页面的性能和用户体验
4. 受到浏览器的同域并发限制，即同一个域名下同时只能有一定数量的请求在进行中，超过限制的请求会被阻塞，导致监控数据丢失

为了解决这些问题，可采用如下方案

## 1*1像素的透明GIF上报
由于浏览器在请求图片时会将请求地址和所有的查询参数一起发送到服务器，因此通过在请求地址中添加查询参数，可以实现数据的上报功能

### 使用图片上传的好处：
1. **防止跨域** 图片的src属性并不会跨域，并且同样可以发起请求
2. **防止阻塞页面加载，影响用户体验** 图片不用真实插入DOM中，即可发送请求
  
### 为什么是1*1像素的透明GIF
1. **体积小** 从图片的体积上来说最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节。同样的响应，GIF可以比BMP节约41%的流量，比PNG节约35%的流量
2. 1x1像素是最小的合法图片
3. 透明的图片不会影响页面本身展示的效果
4. 透明色的图片不用存储色彩空间数据，可以节约体积

```js
const img = new Image();
img.src = `https://www.example.com/report.gif?data=${JSON.stringify(data)}`;
```

::: tip
只能发送get请求！！

动态创建图片时，赋值src会自动发起一次请求，所以不需要再将图片插入到dom中。否则会发送两次一模一样的数据
:::

## sendBeacon
使用 navigator.sendBeacon() 方法上报数据可以确保数据的可靠性和实时性，因为它可以在页面卸载前异步传输数据到服务器，并且不会阻塞页面的卸载。

```js
const log = {
  time: new Date().toLocaleString(),
  message: 'Some error message',
  // ... 其他信息
};
const data = JSON.stringify(log);
navigator.sendBeacon('/api/log', data);
```

上述代码会将错误日志以 JSON 格式发送到 /api/log 地址。由于 navigator.sendBeacon() 方法不支持响应信息，因此无法知道数据是否成功发送到服务器。如果需要确认数据是否已经成功接收，可以通过服务器端的日志来判断。

::: tip
navigator.sendBeacon()只能发送少量数据，通常不超过 64KB，且只支持 POST 请求，不支持同步请求，因此不能保证数据一定会被发送到服务器。
:::
