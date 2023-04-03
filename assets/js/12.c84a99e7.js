(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{289:function(t,s,a){t.exports=a.p+"assets/img/lignthouse_devtools.238ffa0a.png"},340:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),s("p",[t._v("前端性能优化是提高用户体验、提高网站可用性、降低成本和维护成本的必要步骤。当网站响应速度较慢时，用户体验会受到严重影响，导致用户可能会放弃使用该网站，转而寻找其他更快速、更可靠的替代品。优化前端性能可以加快页面加载速度、提高页面响应速度，减少资源加载时间和请求次数，从而为用户提供更好的体验。此外，优化前端性能还可以减少服务器的负载，降低服务器的成本和维护成本。")]),t._v(" "),s("h2",{attrs:{id:"分析工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析工具"}},[t._v("#")]),t._v(" 分析工具")]),t._v(" "),s("p",[t._v("如果要对页面进行性能优化，那么要先对当前页面进行分析，查找出页面性能的短板，根据分析结果进行针对性优化。")]),t._v(" "),s("p",[t._v("Lighthouse 是一个网站性能测评工具， 它是 Google Chrome 推出的一个开源自动化工具，能够对 PWA 和网页多方面的效果指标进行评测，并给出最佳实践的建议以帮助开发者改进网站的质量。它的使用方法也非常简单，我们只需要提供一个要测评的网址，它将针对此页面运行一系列的测试，然后生成一个有关页面性能的报告。通过报告我们就可以知道需要采取哪些措施来改进应用的性能和体验。")]),t._v(" "),s("p",[t._v("Google提供了多种LightHouse使用方案：")]),t._v(" "),s("ol",[s("li",[t._v("通过Chrome浏览器提供的DevTools使用。在Chrome浏览器中，你可以通过查看DevTools的LightHouse。\n"),s("img",{attrs:{src:a(289),alt:"DevTools"}}),t._v("\nCategories 用于配置需要分析的事项，Device用于配置本次测试设备类型。在完成所有配置后，点击”Analyze page load“按钮即可对当前页面进行分析测试。")]),t._v(" "),s("li",[t._v("通过Chrome浏览器插件使用。访问Chrome Web Store，搜索LightHouse进行安装。")]),t._v(" "),s("li",[t._v("通过PageSpeed Insights(PSI)进行在线测试。PSI会报告网页在移动设备和桌面设备上的用户体验，并提供关于如何改进网页的建议。")]),t._v(" "),s("li",[t._v("通过官方发布的npm包使用。相比较前三种方式，该方式的自定义程度更高，可以将更多的配置项进行灵活组合，得到更丰富的分析数据和结果。")])]),t._v(" "),s("h3",{attrs:{id:"npm包调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm包调用"}},[t._v("#")]),t._v(" npm包调用")]),t._v(" "),s("p",[t._v("首先，需要在本地安装 Node.js 和 npm。然后，打开命令行界面并运行以下命令：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" lighthouse\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("接下来，可以使用以下命令运行 Lighthouse：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("lighthouse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("其中 "),s("code",[t._v("<url>")]),t._v(" 是要测试的网站的 URL。运行此命令将生成一个包含有关网站性能的报告。")]),t._v(" "),s("p",[t._v("作为一个模块，Lighthouse可以通过Node.js的API在代码中调用。这使得我们可以将Lighthouse集成到自动化流程中，例如在CI/CD流程中或与其他工具一起使用。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lighthouse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lighthouse'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chromeLauncher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome-launcher'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置项")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onlyCategories")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'performance'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9222")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用Chrome作为Lighthouse的渲染引擎")]),t._v("\nchromeLauncher\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("launch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("chromeFlags")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--headless'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chrome")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighthouse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("results")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("p",[t._v("这个示例首先使用chrome-launcher启动一个headless Chrome实例。然后，我们通过指定一个URL和一些选项，使用Lighthouse分析该URL的性能。分析结果以HTML形式输出。最后，我们使用chrome.kill()方法结束Chrome实例。")]),t._v(" "),s("p",[t._v("在上面的示例中，我们使用了onlyCategories选项来指定我们只关心性能指标。你可以通过lighthouse.defaultCategories获得默认类别列表，或通过自己的配置文件定义自定义类别。同时，output选项还支持其他输出格式，例如JSON、CSV等。")]),t._v(" "),s("p",[t._v("需要注意的是，Lighthouse需要在Chrome的上下文中运行，因此需要启动一个Chrome实例。同时，由于Lighthouse会执行一些复杂的操作，因此需要占用一定的系统资源，所以我们需要确保有足够的内存和CPU来运行Lighthouse分析。")]),t._v(" "),s("h2",{attrs:{id:"cdn加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn加速"}},[t._v("#")]),t._v(" CDN加速")]),t._v(" "),s("p",[t._v("CDN（Content Delivery Network，内容分发网络）是一种可以将静态资源缓存在分布式节点上，以提高访问速度和降低服务器压力的解决方案。前端使用CDN加速可以减少页面加载时间，提高用户体验。")]),t._v(" "),s("p",[t._v("使用CDN加速的步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("选择CDN服务提供商并注册账号，例如阿里云、腾讯云、七牛云等。")]),t._v(" "),s("li",[t._v("在CDN服务商控制台中创建加速域名，并将需要加速的静态资源上传至CDN服务商提供的存储空间中。")]),t._v(" "),s("li",[t._v("配置域名解析，将原有的资源访问路径替换成CDN服务商提供的加速域名。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("使用CDN加速时要确保资源的版本号更新，避免缓存问题影响用户体验。此外，对于一些敏感数据或动态渲染的页面，不建议使用CDN加速，以保证数据安全性和正确性。")])]),t._v(" "),s("h2",{attrs:{id:"按需加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需加载"}},[t._v("#")]),t._v(" 按需加载")]),t._v(" "),s("p",[t._v("按需加载（Lazy Loading）可以帮助优化前端应用的性能，它允许你将一些不必要的代码延迟加载，只有在需要的时候才加载。")]),t._v(" "),s("p",[t._v("动态导入是指将一些模块通过异步加载的方式来延迟加载，只有在需要时才会加载。Webpack 2.0以上版本已经原生支持了动态导入，你可以使用import()函数实现。例如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something with module")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("这段代码将在需要时异步加载'module'模块。")]),t._v(" "),s("h2",{attrs:{id:"服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),s("p",[t._v("前后端开始分离后，浏览器在加载页面时通常先加载index.html，再根据index.html中的内容加载对应的JavaScript bundle，最后执行JavaScript 代码，从而将整个页面渲染出来。期间可能还有发起接口请求对应的数据，整个渲染的链路较长。当用户网络情况较差时，就会有大量的等待时间。")]),t._v(" "),s("p",[t._v("服务端渲染就是为了解决这个问题而出现的，它会在服务端执行JavaScript代码，完成整个页面的HTML初始化过程，并执行对应的接口请求、填充数据。在用户发起页面请求时，返回的相应结果是可以交互的，省去了HTML解析、JavaScript bundle加载及获取数据等流程，大大的提升了浏览器速度和用户体验。")]),t._v(" "),s("p",[t._v("服务端渲染不仅能够有效提高首屏加载速度，也更有利于SEO。传统的爬虫程序大多数不会执行JavaScript代码，只根据HTML文件中的内容进行解析，而服务端渲染直接将有效信息填充到了HTML中，方便爬虫程序进行检索。")]),t._v(" "),s("p",[t._v("当然服务端渲染也有缺点。因为将浏览器的解析工作转移到了服务器，所以会占用大量的服务器资源，增加设备的压力。服务端渲染对JavaScript代码也有限制，例如，不能使用BOM、DOM等私有方法。")])])}),[],!1,null,null,null);s.default=e.exports}}]);