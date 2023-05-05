# 小程序

::: tip
其实严格按照分类来讲，小程序应该属于原生渲染方案，不过现在小程序受众面比较广，很多平台推出了各自的小程序方案。从而从技术层面出现了各种各样的具有小程序特色的跨端方案。所以单独拿出来讨论
:::

小程序（mini program）是一种轻量级的应用程序，可在微信、支付宝、百度等应用内打开，无需下载安装即可使用。小程序通常具有类似于原生应用的交互体验和功能，但相较于原生应用来说，小程序更轻量、更易于开发、更容易推广。

小程序可以分为两种类型：基于微信的小程序和基于其他应用的小程序。基于微信的小程序是指使用微信提供的开发工具和服务来开发的小程序，而基于其他应用的小程序是指使用其他应用提供的开发工具和服务来开发的小程序。

小程序开发通常使用的是前端技术栈，如HTML、CSS和JavaScript等。同时，小程序也提供了一些特有的API和开发工具，如小程序开发工具、微信开放平台等。小程序开发可以通过开发者平台进行，需要进行一定的认证和审核才能上线。

常见的小程序环境有：
- [微信](https://developers.weixin.qq.com/miniprogram/dev/framework/?from=taro)
- [QQ](https://q.qq.com/wiki/develop/miniprogram/frame/?from=taro)
- [支付宝](https://opendocs.alipay.com/mini/developer/getting-started?from=taro)
- [百度](https://smartprogram.baidu.com/developer/index.html?from=taro)
- [字节](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview?from=taro)
- [飞书](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN?from=taro)
- [企业微信](https://developers.weixin.qq.com/miniprogram/dev/devtools/qywx-dev.html?from=taro)
- [钉钉](https://open.dingtalk.com/document/org/develop-org-mini-programs?from=taro)
- [快手](https://mp.kuaishou.com/docs/introduction/quickStart.html)
- [360](https://mp.360.cn/doc/miniprogram/dev/#/)
- 等等

所以，针对于跨端小程序的开发方案如雨后春笋般涌现。经过前几年的大浪淘沙到目前为止使用的依然存在的方案有`UniApp`、`Taro`、`MPX`等。

## 小程序开发方案

### UniApp

[UniApp](https://uniapp.dcloud.net.cn/)  是一款基于 Vue.js 的开发框架，可以用于快速开发跨平台应用程序。UniApp 支持一次编写，多端发布，可以将同一代码运行在不同的平台，如微信小程序、H5、iOS、Android 等。UniApp 使用了类似于混合应用的渲染技术，在不同的平台上，使用不同的技术栈进行渲染。

UniApp 的渲染原理基于 HBuilderX，其核心是将 Vue 代码编译为各个平台所支持的代码，然后通过各自的运行时进行渲染。比如，在微信小程序平台上，UniApp 会将编译后的代码转化为小程序所支持的 WXML 和 WXSS 代码，然后使用小程序的运行时进行渲染。在 H5 平台上，UniApp 则会将代码转化为标准的 HTML 和 CSS 代码，然后在浏览器中渲染。这样一来，开发者只需要编写一份代码，就可以将应用程序发布到多个平台上，极大地提高了开发效率。

### Taro

[Taro](https://taro.jd.com/)是一款开源的多端跨平台应用开发框架，可以基于React语法开发一次代码，同时运行在多个平台（如微信小程序、H5、React Native等），从而提高开发效率。Taro采用React语法，并在此基础上进行了拓展，以实现跨端的开发。Taro支持通过npm安装，并提供了一些CLI命令来快速创建、编译和打包项目。

Taro 的原理主要分为两个部分：编译器和运行时。

编译器的作用是将开发者编写的 React 代码转换成目标平台（如微信小程序、支付宝小程序、H5 等）所支持的代码。在编译过程中，Taro 将 React 语法转换成目标平台所支持的代码，并且会根据实际需要自动引入目标平台所需的代码和库，从而保证编译后的代码可以在目标平台上正常运行。

运行时则负责在目标平台上执行编译后的代码，从而实现应用的功能。对于小程序平台，Taro 运行时基于小程序原生 API 实现，对于 H5 等平台，则依赖于浏览器环境提供的能力。

Taro 的跨平台实现主要依赖于编译器的转换能力，以及运行时的对不同平台的适配能力。由于 Taro 支持多端开发，因此在编写代码时需要注意不同平台的差异，确保代码可以在各个平台上正常运行。

### MPX

[MPX](https://mpxjs.cn/)是一个基于 Vue.js 的小程序增强框架，支持编写类 Vue.js 语法的小程序代码，通过 MPX 编译器将代码编译为原生小程序代码运行。MPX 在保留 Vue.js 语法和特性的同时，针对小程序开发做了很多优化，能够提供更好的性能和开发体验。

MPX 的原理主要包括以下几个方面：

1. 编译阶段：MPX 使用自己的编译器，将编写的 Vue 文件编译成小程序可以运行的 WXML 和 WXSS 文件。同时，它也会将小程序特有的语法扩展转化为原生语法，如 `wx:if` 转化为 `wx:if="{{value}}"`。
2. 运行时：在小程序运行时，MPX 会将编译后的 WXML 和 WXSS 加载到小程序的运行环境中，并将 Vue 组件转化为小程序的自定义组件。MPX 还提供了一些小程序特有的 API，如 `$mpxPage` 和 `$mpxComponent`，方便开发者在小程序中使用 Vue.js 的特性。
3. 差异化处理：由于小程序和 Web 平台的 API、组件和生命周期等方面存在很大的差异，MPX 在设计时考虑了这些差异，并提供了一些工具和方法来处理这些差异，从而实现在小程序中使用 Vue.js 进行开发的目的。

### 框架测评

具体框架测评可参考[跨端开发框架深度横评之2020版](https://juejin.cn/post/6844904118901817351)

## 小程序引擎

小程序的爆火，让所有的企业都看到了小程序的可行性，并在自己的APP中集成了小程序引擎，拥有了小程序的能力。常见的各大APP均有集成，如美团APP、淘宝APP等。

但各大公司的小程序引擎并不开源，针对于中小公司来讲，自己开发小游戏引擎成本过高，万幸，现在有了成熟的第三方引擎。

### uniMPsdk

[uniMPsdk](https://nativesupport.dcloud.net.cn/)为uni小程序SDK，是为原生App打造的可运行基于 uni-app 开发的小程序前端项目的框架，从而帮助原生App快速获取小程序的能力，需要在原生工程中集成，一套代码两端运行。

### mPaaS(收费)

[移动开发平台](https://help.aliyun.com/product/49548.html?spm=a2c4g.49549.0.0.2f985808DNUfvO)（Mobile PaaS，简称 mPaaS）是源于支付宝 App 的移动开发平台，为移动开发、测试、运营及运维提供云到端的一站式解决方案，能有效降低技术门槛、减少研发成本、提升开发效率，协助企业快速搭建稳定高质量的移动 App。

## 小程序底层框架原理

推荐掘金小册[微信小程序底层框架实现原理](https://s.juejin.cn/ds/DWYkpG8/)
