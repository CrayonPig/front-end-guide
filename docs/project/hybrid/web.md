# Web渲染

基于 Web 渲染的混合开发 App 是一种基于 Web 技术（HTML、CSS、JavaScript）开发的移动应用，同时使用原生容器提供的 Web 视图组件来渲染 UI。它是一种混合模式的开发方式，通过在原生容器中嵌入 Web 视图来实现跨平台开发，既可以使用 Web 技术进行开发，又可以调用原生 API 来实现更加丰富的功能和更好的用户体验。

在基于 Web 渲染的混合开发中，Web 页面运行在原生容器提供的 WebView 组件中，通过 JavaScript 与原生 API 进行交互，实现应用程序的功能和 UI 渲染。相比于纯 Web 应用，基于 Web 渲染的混合开发具有更好的性能和用户体验，同时又可以利用 Web 开发的高效性和跨平台特性。

目前比较流行的基于 Web 渲染的混合开发框架包括 Cordova、PhoneGap、Ionic 等。这些框架提供了丰富的 API 和插件，可以帮助开发者快速开发移动应用，并且支持多平台开发。

## 渲染原理

基于Web渲染的混合开发App的渲染原理都基本类似，在应用中内置一个 WebView 组件，并通过 JavaScript 代码将本地应用和 Web 应用进行交互。当用户打开应用时，会在 WebView 中加载应用的主页面，并且可以通过 JavaScript 代码来访问 WebView 的 DOM 和 CSS 样式。

![Hybrid](@assets/hybrid/WebApp.png)

::: tip
简单来说，就是套了一层原生壳的web页面，web通过提前约定好的协议调用原生，原生调用设备本身的能力
:::

## Cordova

[Cordova](https://cordova.apache.org/)是社区最早出现的混合开发App的框架。最初由 Nitobi Software（现在是 Adobe Systems）开发，后来被 Apache 软件基金会收购并捐赠给了 Apache 基金会，成为了 Apache 的一个开源项目。

Cordova主要提供了三种能力：

- 设备相关的API，通过API，移动应用能够以JavaScript访问原生的设备功能，如摄像头、麦克风等。
- 统一的JavaScript类库，以及为这些类库所用的设备相关的原生后台代码。
- 跨平台打包能力，支持iOS, Android, ubuntu phone os, Blackberry, Windows Phone, Palm WebOS, Bada 和 Symbian平台
- 自定义插件功能，可以让开发者通过 JavaScript 代码来调用设备的本地功能，如摄像头、GPS、文件系统等。

### 优点

1. 跨平台：Cordova 可以构建跨平台应用，支持 Android、iOS、Windows 等多个平台，开发人员只需要编写一份代码，就可以在不同的平台上运行。
2. 快速开发：使用 Web 技术开发，无需学习复杂的原生开发语言和工具，可以快速迭代开发，并且具有较好的可维护性。
3. 简单易用：Cordova 提供了一些常用的插件和 API，可以方便地访问设备的各种功能，如相机、地理位置、传感器等。
4. 成熟稳定：Cordova 已经发展多年，拥有庞大的社区和生态系统，有大量的插件和模板可供选择，同时也有完善的文档和支持。

### 缺点

1. 性能问题：Cordova 应用的性能受到 WebView 的限制，可能比原生应用慢一些，尤其是在处理复杂的图形和动画时。
2. 依赖第三方库：Cordova 应用需要依赖第三方库和插件，这些库和插件可能存在安全风险或者兼容性问题，需要开发者自行评估和选择。
3. 限制功能：Cordova 的插件机制提供了访问设备本地功能的能力，但是一些高级功能可能无法使用，需要使用原生开发来实现。
4. 开发门槛：虽然 Cordova 简化了开发流程，但是开发人员仍然需要掌握 Web 技术和 Cordova API，需要一定的开发经验和学习成本。

## PhoneGap

PhoneGap 和 Cordova 最初是一个项目，由于商业原因被 Adobe 收购后，项目名称发生了变化，PhoneGap 成为了 Adobe 的商标，而 Cordova 成为了 Apache 基金会的开源项目。因此，PhoneGap 和 Cordova 之间的区别主要是商标所有权的区别，其余部分基本一致。

具体来说，PhoneGap 和 Cordova 都是基于 Web 技术开发移动应用的框架，采用的是混合式开发的方式，将本地应用和 Web 应用混合在一起。它们都使用 WebView 来实现 Web 应用的渲染，并且提供了访问设备本地功能的插件。

在技术实现上，PhoneGap 和 Cordova 的代码基本相同，因为 PhoneGap 本质上是 Cordova 的商标版本，是在 Cordova 的基础上添加了 Adobe 的一些功能。但是，它们在使用上可能有一些区别，比如 PhoneGap 的构建工具使用云端服务，而 Cordova 的构建工具需要在本地安装。

## Ionic

[Ionic](https://ionicframework.com/)聚焦于感官和应用的Ui交互，它不是 Phone Gap或 Cordova的替代品，ionic只是在前端大幅度简化了APP开发。在早期，为了发挥ionic的完美功能，需要 AngularJS的配合。目前，Ionic已经无需强制要求开发者使用任何框架。

针对Cordova存在的问题，Ionic做了一些优化。

- 内置丰富的开箱即用的原生能力
- 提供前端UI界面，统一标准
- 使用多Webview机制，利用原生转场解决流畅性问题

## JSBridge

JSBridge是一种基于WebView的前端解决方案，它通过JavaScript与Native之间进行通信，实现在WebView中调用Native功能或在Native中调用WebView中的JavaScript函数。JSBridge的实现原理是通过在Native端提供一个JavaScript接口，并在WebView中注入一个JSBridge对象，使得WebView中的JavaScript代码可以通过JSBridge对象与Native进行通信。

简单来说，JSBridge就是一种通讯方式，通过JSBridge，WebView可以调用原生方法，原生可以调用Web端的方法。
![JSBridge](@assets/hybrid/jsbridge.png)

### JS调用Native的方式

1. 拦截URL Scheme
Android：Webview提供了shouldOverrideUrlLoading方法来提供给Native拦截H5发送的URL Scheme请求

```java
public class CustomWebViewClient extends WebViewClient {
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
      ......
      // 场景一： 拦截请求、接收 scheme
        if (url.equals("xxx")) {

            // handle
            ...
            // callback
            view.loadUrl("javascript:setAllContent(" + json + ");")
            return true;
        }
        return super.shouldOverrideUrlLoading(url);
     }
}
```

ios WKWebview可以根据拦截到的URL Scheme和对应的参数执行相关的操作

```Swift
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler{
    if ([navigationAction.request.URL.absoluteString hasPrefix:@"xxx"]) {
        [[UIApplication sharedApplication] openURL:navigationAction.request.URL];
    }
    decisionHandler(WKNavigationActionPolicyAllow);
}
```

js调用

```js
qunarhy://hy/url?url=ymfe.tech  // 自定义的
protocol是qunarhy，host则是hy

window.webkit.messageHandlers.topicSelect.postMessage(`vdiscover://post_new_note?attach=${JSON.stringify(params)}`)
window.prompt(`vdiscover://post_new_note?attach=${encodeURIComponent(JSON.stringify(params))}`)
```

URL SCHEME是一种类似于url的链接，是为了方便app直接互相调用设计的，形式和普通的url近似，主要区别是protocol和host一般是自定义的。

拦截URL SCHEME的主要流程是：Web端通过某种方式(例如：iframe.src)发送URL Scheme请求，之后Native拦截到请求并更具URL SCHEME（包括所带的参数）进行相关的操作

#### 优点

- 不存在漏洞问题，使用灵活，可以实现H5和Native页面的无缝切换
场景：适用于快速迭代，快速开发上线，某一链接直接填写H5链接，在对应的Native页面开发完成前先跳转至H5页面。等Native页面开发完成之后再进行拦截，跳转至Native页面，此时H5链接不用修改

#### 缺点

- 当使用iframe.src来发送URL Scheme需要对URL长度作控制，使用复杂。速度较慢
  - 有些方案为了避免url长度隐患的缺陷，在ios上采用了使用ajax发送同域请求的方式，并将参数放到head或body中，这样虽然避免了url长度的隐患，但WKWebView并不支持这种方式
  - 为什么选择iframe.src不选择location.herf?(因为如果通过location.href连续调用Native，很容易丢失一些调用)
- 创建请求需要一定的耗时，比诸如API的方式调用同样的功能耗时更长。

2. 注入API
基于WebView提供的能力，我们可以向Window上注入对象或方法，js可以直接使用window上的方法，这种方法js需要等到Native执行完对应的逻辑之后才能进行回调里的操作

Android的WebView提供了addJavascriptInterface方法，支持Android4.2及以上的系统

```java
gpcWebView.addJavascriptInterface(new JavaScriptInterface(), 'nativeApiBridge'); 
public class JavaScriptInterface {
    Context mContext;

  JavaScriptInterface(Context c) {
    mContext = c;
  }

  public void share(String webMessage){            
    // Native 逻辑
  }
}
```

JS调用：

```js
window.NativeApi.share(xxx);
```

iOS的UIWebView提供了JavascriptScore方法，支持iOS7.0以上的系统，WKWebview提供window.webkit.messageHandlers方法，支持iOS8.0及以上系统。UIWebview在几年前常用，目前不常见

```Swift
WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
WKPreferences *preferences = [WKPreferences new];
preferences.javaScriptCanOpenWindowsAutomatically = YES;
preferences.minimumFontSize = 40.0;
configuration.preferences = preferences;
    

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    [self.webView.configuration.userContentController addScriptMessageHandler:self name:@"share"];
      [self.webView.configuration.userContentController addScriptMessageHandler:self name:@"pickImage"];
}
- (void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];
    [self.webView.configuration.userContentController     removeScriptMessageHandlerForName:@"share"];
    [self.webView.configuration.userContentController removeScriptMessageHandlerForName:@"pickImage"];
}
```

js调用示例

```js
  window.webkit.messageHandlers.share.postMessage(xxx);
```

### Native调用JS的方式

Native调用js需要,JavaScript的方法必须在全局的window上即可

Android中主要有两种实现方法：

- Android 4.4以前，通过loadUrl方法，执行一段js代码来实现。loadUrl方式使用起来方便简洁，但是效率低无法获得返回结果且调用的时候会刷新WebView
- Android 4.4以后可以使用evaluateJavascript方法。evaluateJavascript方法效率高获取返回值方便。调用的时候不刷新WebView

```java
webView.loadUrl("javascript:" + javaScriptString);
webView.evaluateJavascript(javaScriptString, new ValueCallback<String>() {
  @Override
  public void onReceiveValue(String value){
    xxx
  }
});
```

ios在WKWebview中可以通过evaluateJavaScript:javaScriptString来实现，支持iOS8.0及以上系统

```swift
// swift
func evaluateJavaScript(_ javaScriptString: String, 
    completionHandler: ((Any?, Error?) -> Void)? = nil)
// javaScriptString 需要调用的 JS 代码
// completionHandler 执行后的回调

// objective-c
[jsContext evaluateJavaScript:@"ZcyJsBridge(ev, data)"]
```

## Electron（桌面端开发）

Electron 是一个使用 JavaScript、HTML 和 CSS 构建跨平台的桌面应用程序。

Electron 兼容 Mac、Windows 和 Linux，可以构建出三个平台的应用程序。

Electron成功案例

- VSCode： 程序员最常用的开发者工具。
- Atom： 是Github开发的文本编辑器，我想大部分的前端程序员都应该使用过。
- slack： 聊天群组 + 大规模工具集成 + 文件整合 + 搜索的一个工具。就是把很多你常用的工具整合到了一起。
- QQ： 新版QQ

Electron = Chromium + Node.js + Native APIs

![electron](@assets/hybrid/electron.jpeg)

### Chromium

Chromium 是 Google 为发展 Chrome 浏览器而启动的开源项目，Chromium 相当于 Chrome 的工程版或称实验版，新功能会率先在 Chromium 上实现，待验证后才会应用在Chrome 上，故 Chrome 的功能会相对落后但较稳定。

Chromium为Electron提供强大的UI能力，可以在不考虑兼容性的情况下开发界面。

### Node.js

Node 是一个让 JavaScript 运行在服务端的开发平台，Node 使用事件驱动，非阻塞I/O 模型而得以轻量和高效。

单单靠Chromium是不能具备直接操作原生GUI能力的，Electron内集成了Nodejs，这让其在开发界面的同时也有了操作系统底层 API 的能力，Nodejs 中常用的 Path、fs、Crypto 等模块在 Electron 可以直接使用。

### Native API

为了提供原生系统的GUI支持，Electron内置了原生应用程序接口，对调用一些系统功能，如调用系统通知、打开系统文件夹提供支持。

## 总结

基于Web渲染的基本原理都相同，都是原生应用嵌套Webview。Cordova、PhoneGap、Ionic等流行框架都封装了较为全面的调用原生的接口。JSBridge去除了大而全东西，将只留下web和native互相通讯的方式，更为灵活。

基于Web渲染的方案，虽然带来了快速开发的优势，但承载大量Web标准的Web容器过于笨重，以至于牺牲了一些性能和用户体验，达不到与原生同样的标准，在复杂交互和动画上较难实现出良好的用户体验。

此处框架推荐

- 针对需要开发跨端APP来讲，如果团队中，拥有原生开发的人员，建议选择JSBridge方式，反之选择Cordova、PhoneGap、Ionic等流行框架。
- 针对需要开发跨端桌面应用来说，无脑Electron
