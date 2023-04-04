# 资源劫持
相比于各种攻击方式，前端通常遇到的安全问题是资源劫持

资源劫持是一种恶意行为，攻击者通过篡改网站上的资源，如JavaScript、CSS或图像等文件，来达到控制或窃取用户数据的目的。攻击者通常会将恶意脚本注入网站，当用户访问这些被注入的资源时，攻击者就可以窃取用户的个人信息，例如用户名、密码、信用卡信息等。
## 常见场景
### DNS劫持
DNS劫持指的是黑客或者攻击者通过篡改DNS解析的方式，将原本指向某个网站的域名解析到一个假冒的网站上，从而让用户误以为访问的是正常的网站，实际上却是被攻击者控制的假网站，从而进行钓鱼、窃密等攻击行为。

::: tip
  DNS劫持并不只有坏处，我们常用的CDN就是根据DNS劫持原理发展而来的。
:::

### CDN劫持
CDN劫持是指攻击者针对网站所使用的CDN服务进行攻击，通过篡改CDN节点上的数据包或者DNS欺骗等方式，将用户请求的内容重定向到攻击者指定的站点或者恶意服务器上，以达到获取用户信息或者进行其他攻击行为的目的。

### HTTP劫持
HTTP劫持是指攻击者通过一定手段篡改了HTTP请求或者响应中的内容，使得用户在访问被攻击的网站时，看到的内容并不是原本应该呈现的内容。这种攻击方式可以导致用户难以察觉到攻击的存在，并可能被诱导到恶意网站中，导致信息泄露、盗取账号等问题。

常见的HTTP劫持方式有：注入自定义代码片段、iframe劫持、302重定向劫持

## 防范措施

### 使用HTTPS
使用HTTPS可以加密通信内容，避免中间人篡改数据。

### 强制重定向
使用HTTP响应头中的"Strict-Transport-Security"字段可以强制浏览器将所有HTTP请求重定向到HTTPS。

### 使用CSP
Content Security Policy (CSP)是一个安全策略，旨在减少和报告通过浏览器加载的恶意代码，如跨站脚本攻击（XSS）。CSP允许网站所有者指定哪些来源（如脚本、图像、样式表等）可以与该站点进行交互，从而限制恶意脚本的来源。CSP通过在HTTP头中包含策略指令来实现。

### 使用DNSSEC
DNSSEC是一种防止DNS欺骗攻击的技术，它通过数字签名来保护DNS查询的真实性，有效地防止了DNS劫持攻击。

### 防iframe劫持
你的网站被iframe劫持，攻击者可以在他们自己的网站上嵌入你的网站，从而欺骗访问者并访问他们的敏感信息，例如密码和信用卡号。攻击者也可以通过更改你的网站内容来引导访问者到恶意网站，或者通过恶意脚本在你的网站上植入恶意代码，从而操纵访问者的浏览器。

1. 使用X-Frame-Options头可以告诉浏览器是否允许该网页在frame中显示。其中，DENY表示页面不允许在任何iframe中嵌入，SAMEORIGIN表示页面只能在与当前页面同域的iframe中嵌入，ALLOW-FROM uri表示页面只能在指定的uri中的iframe中嵌入。
2. 使用JavaScript判断，可以通过检查 window.top 和 window.self 的值是否相等来进行判断。window.top 表示当前窗口的最高层级窗口，而 window.self 表示当前窗口本身。如果 window.top === window.self，则说明当前窗口没有被嵌入到其他窗口或者 iframe 中，反之则可能被劫持。 
```js
if (window.top === window.self) {
  // 未被 iframe 劫持
} else {
  // 被 iframe 劫持
}
```
3. window.frameElement 判断当前页面是否嵌入在一个iframe中。window.frameElement是一个只读属性，返回当前窗口所在的iframe元素。如果窗口不在iframe中，则返回null。
4. 使用HTTPS

### 防iframe注入
在网页中，iframe可以嵌入其他网站或页面，使得攻击者可以通过嵌入的iframe对网站进行恶意攻击，例如通过iframe来进行钓鱼攻击或者窃取用户信息等。

1. X-Frame-Options：通过HTTP响应头中的X-Frame-Options标记告诉浏览器是否允许页面在iframe中嵌入。其中有三个选项：DENY表示页面不允许在任何iframe中嵌入，SAMEORIGIN表示页面只能在与当前页面同域的iframe中嵌入，ALLOW-FROM uri表示页面只能在指定的uri中的iframe中嵌入。
2. frame-ancestors：frame-ancestors是Content Security Policy的一部分，它允许你指定允许哪些页面嵌入你的页面。它的语法和X-Frame-Options中的ALLOW-FROM相似。
3. 使用HTTPS