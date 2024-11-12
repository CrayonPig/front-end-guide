(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{305:function(t,s,a){t.exports=a.p+"assets/img/vite.a386e419.png"},341:function(t,s,a){t.exports=a.p+"assets/img/dev.8da20e98.png"},342:function(t,s,a){t.exports=a.p+"assets/img/plugin.1e13f049.png"},343:function(t,s,a){t.exports=a.p+"assets/img/prd.cf29193f.png"},344:function(t,s,a){t.exports=a.p+"assets/img/chunk.a8423bd7.png"},430:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"双引擎架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双引擎架构"}},[t._v("#")]),t._v(" 双引擎架构")]),t._v(" "),s("p",[s("code",[t._v("Vite")]),t._v(" 的双引擎架构指的是在构建工具中同时使用 "),s("code",[t._v("Esbuild")]),t._v(" 和 "),s("code",[t._v("Rollup")]),t._v(" 两个现代构建引擎。这种架构使得 "),s("code",[t._v("Vite")]),t._v(" 在开发阶段能够提供极快的热重载（HMR）和冷启动速度，同时在生产环境下生成优化的静态资源。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(305),alt:"vite架构图"}})]),t._v(" "),s("h2",{attrs:{id:"esbuild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[t._v("#")]),t._v(" Esbuild")]),t._v(" "),s("p",[t._v("从上述架构图，我们可以看出，在 "),s("code",[t._v("Vite")]),t._v(" 很多关键的流程中，都有 "),s("code",[t._v("Esbuild")]),t._v(" 的参与，我们按照架构图的流程逐步分析下。")]),t._v(" "),s("h3",{attrs:{id:"依赖预构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖预构建"}},[t._v("#")]),t._v(" 依赖预构建")]),t._v(" "),s("p",[s("img",{attrs:{src:a(341),alt:"vite开发流程"}})]),t._v(" "),s("p",[s("code",[t._v("Vite")]),t._v(" 在开发环境中，利用 "),s("code",[t._v("Esbuild")]),t._v(" 对项目的依赖进行预构建。"),s("code",[t._v("Esbuild")]),t._v(" 以其极快的构建速度，可以迅速处理大量的依赖项，使得项目能够快速启动。这对于开发者来说，大大减少了等待时间，提高了开发效率。")]),t._v(" "),s("p",[t._v("例如，在一个大型项目中，传统的构建工具可能需要几十秒甚至几分钟来完成依赖的预构建，而 "),s("code",[t._v("Esbuild")]),t._v(" 可以在几秒钟内完成，让你几乎可以立即开始开发。")]),t._v(" "),s("p",[t._v("通过预构建，"),s("code",[t._v("Esbuild")]),t._v(" 将一些 "),s("code",[t._v("CommonJS")]),t._v(" 和 "),s("code",[t._v("UMD")]),t._v(" 格式的依赖转换为 "),s("code",[t._v("ESM（ECMAScript Modules）")]),t._v("格式。这样可以更好地利用浏览器原生的 ESM 模块加载机制，减少模块加载的开销。同时，它还可以对依赖进行合并和优化，减少网络请求次数，提高应用的性能。")]),t._v(" "),s("h3",{attrs:{id:"单文件编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单文件编译"}},[t._v("#")]),t._v(" 单文件编译")]),t._v(" "),s("p",[s("img",{attrs:{src:a(342),alt:"Vite Plugin Pipeline"}})]),t._v(" "),s("p",[t._v("从上图中，我们可以知道在 "),s("code",[t._v("Vite Plugin Pipeline")]),t._v(" 中，同样有 "),s("code",[t._v("Esbuild")]),t._v(" 的身影，这是为了将 "),s("code",[t._v("Esbuild")]),t._v(" 作为 "),s("code",[t._v("Transformer")]),t._v(" 来进行代码转换， 也就是说 "),s("code",[t._v("Vite")]),t._v(" 使用 "),s("code",[t._v("Esbuild")]),t._v(" 将 "),s("code",[t._v("TypeScript")]),t._v("、"),s("code",[t._v("JSX")]),t._v(" 等语法转换为浏览器可识别的 JavaScript 代码。")]),t._v(" "),s("blockquote",[s("p",[t._v("Vite 已经将 Esbuild 的 Transformer 能力用到了生产环境")])]),t._v(" "),s("p",[s("code",[t._v("Esbuild")]),t._v("的转换速度远远超过传统的构建工具，使得生产构建时间大大缩短。具体可以参考之前的 "),s("RouterLink",{attrs:{to:"/advanced/esbuild/"}},[t._v("Esbuild")]),t._v(" 部分")],1),t._v(" "),s("h3",{attrs:{id:"代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[t._v("#")]),t._v(" 代码压缩")]),t._v(" "),s("blockquote",[s("p",[t._v("Vite 从 2.6 版本开始，就官宣默认使用 Esbuild 来进行生产环境的代码压缩，包括 JS 代码和 CSS 代码。")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(343),alt:"vite构建流程"}})]),t._v(" "),s("p",[t._v("从架构图中，我们可以看到，"),s("code",[t._v("Esbuild")]),t._v(" 的代码压缩功能以插件的形式集成到了 "),s("code",[t._v("Rollup")]),t._v(" 的构建流程中。")]),t._v(" "),s("p",[t._v("这是因为 "),s("code",[t._v("Esbuild")]),t._v(" 相比传统的压缩工具如 "),s("code",[t._v("Terser")]),t._v("，Esbuild 可以在几分钟的构建任务中节省几十秒甚至更多的时间，这在频繁构建的生产环境中积累起来是非常可观的效益。")]),t._v(" "),s("p",[t._v("并且 "),s("code",[t._v("Esbuild")]),t._v(" 在压缩代码方面也非常高效。它能够快速地去除代码中的冗余部分，如不必要的空格、注释等，同时还能进行变量名压缩等优化操作，减小代码体积。这有助于提高网页的加载速度，提升用户体验。")]),t._v(" "),s("h2",{attrs:{id:"rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[t._v("#")]),t._v(" Rollup")]),t._v(" "),s("p",[s("code",[t._v("Rollup")]),t._v(" 是 "),s("code",[t._v("Vite")]),t._v(" 用作生产环境打包的核心工具, "),s("code",[t._v("Vite")]),t._v(" 默认选择在生产环境中利用 "),s("code",[t._v("Rollup")]),t._v(" 打包，并基于 "),s("code",[t._v("Rollup")]),t._v(" 本身成熟的打包能力进行扩展和优化，主要包含以下几个方面:")]),t._v(" "),s("h3",{attrs:{id:"css-代码分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-代码分割"}},[t._v("#")]),t._v(" CSS 代码分割")]),t._v(" "),s("p",[t._v("如果某个异步模块中引入了一些 CSS 代码，Vite 就会自动将这些 CSS 抽取出来生成单独的文件，提高线上产物的缓存复用率。")]),t._v(" "),s("h3",{attrs:{id:"自动预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动预加载"}},[t._v("#")]),t._v(" 自动预加载")]),t._v(" "),s("p",[t._v("Vite 会自动为入口 chunk 的依赖自动生成预加载标签 "),s("link",{attrs:{rel:"modulepreload"}}),t._v(" ，如:")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 省略其它内容 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 入口 chunk --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/assets/index.250e0340.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--  自动预加载入口 chunk 所依赖的 chunk--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("modulepreload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/assets/vendor.293dca09.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")]),s("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[s("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1731410154798-37682"}},[t._v("成功")]),s("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'<head>\n\x3c!-- 省略其它内容 --\x3e\n\x3c!-- 入口 chunk --\x3e\n<script type="module" crossorigin src="/assets/index.250e0340.js"><\/script>\n\x3c!--  自动预加载入口 chunk 所依赖的 chunk--\x3e\n<link rel="modulepreload" href="/assets/vendor.293dca09.js">\n</head>\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1731410154798-37682","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("这种适当预加载的做法会让浏览器提前下载好资源，优化页面性能。")]),t._v(" "),s("h3",{attrs:{id:"异步-chunk-加载优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步-chunk-加载优化"}},[t._v("#")]),t._v(" 异步 Chunk 加载优化")]),t._v(" "),s("p",[t._v("在异步引入的 Chunk 中，通常会有一些公用的模块，如现有两个异步引入的 Chunk: A 和 B，而且两者有一个公共依赖 C，如下图:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(344),alt:"chunk 依赖"}})]),t._v(" "),s("p",[t._v("一般情况下，"),s("code",[t._v("Rollup")]),t._v(" 打包之后，会先请求 A，然后浏览器在加载 A 的过程中才决定请求和加载 C，但 "),s("code",[t._v("Vite")]),t._v(" 进行优化之后，请求 A 的同时会自动预加载 C，通过优化 "),s("code",[t._v("Rollup")]),t._v(" 产物依赖加载方式节省了不必要的网络开销。")]),t._v(" "),s("h3",{attrs:{id:"兼容插件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容插件机制"}},[t._v("#")]),t._v(" 兼容插件机制")]),t._v(" "),s("p",[s("code",[t._v("Vite")]),t._v(" 可以利用 "),s("code",[t._v("Rollup")]),t._v(" 的插件体系来扩展其功能。许多常用的前端工具和库都提供了 "),s("code",[t._v("Rollup")]),t._v(" 插件，"),s("code",[t._v("Vite")]),t._v(" 可以通过集成这些插件来实现特定的功能。")]),t._v(" "),s("p",[t._v("例如，如果你需要在项目中使用 CSS 预处理器，可以安装 "),s("code",[t._v("Rollup")]),t._v(" 的 CSS 预处理器插件，让 Vite 在构建过程中能够添加对 CSS 预处理器的支持。")]),t._v(" "),s("p",[t._v("在开发阶段，"),s("code",[t._v("Vite")]),t._v(" 借鉴了 "),s("a",{attrs:{href:"https://github.com/preactjs/wmr",target:"_blank",rel:"noopener noreferrer"}},[t._v("WMR"),s("OutboundLink")],1),t._v(" 的思路，自己实现了一个 "),s("code",[t._v("Plugin Container")]),t._v("，用来模拟 "),s("code",[t._v("Rollup")]),t._v(" 调度各个 "),s("code",[t._v("Vite")]),t._v(" 插件的执行逻辑，而 "),s("code",[t._v("Vite")]),t._v(" 的插件写法完全兼容 "),s("code",[t._v("Rollup")]),t._v("，因此在生产环境中将所有的 "),s("code",[t._v("Vite")]),t._v(" 插件传入 Rollup 也没有问题。")]),t._v(" "),s("p",[t._v("反过来说，"),s("code",[t._v("Rollup")]),t._v(" 插件却不一定能完全兼容 "),s("code",[t._v("Vite")]),t._v("。不过，目前仍然有不少 Rollup 插件可以直接复用到 Vite 中，你可以通过这个站点查看所有兼容 Vite 的 Rollup 插件: "),s("a",{attrs:{href:"https://vite-rollup-plugins.patak.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite-rollup-plugins.patak.dev/"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"vite-双引擎架构的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vite-双引擎架构的优势"}},[t._v("#")]),t._v(" Vite 双引擎架构的优势")]),t._v(" "),s("h3",{attrs:{id:"_1-极快的冷启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-极快的冷启动"}},[t._v("#")]),t._v(" 1. "),s("strong",[t._v("极快的冷启动")])]),t._v(" "),s("p",[t._v("传统构建工具 (如 Webpack) 在启动开发服务器时，通常需要进行一次完整的打包，特别是在大型项目中，冷启动时间可能会很长。而 Vite 通过直接利用 ESModules，避免了冷启动时的打包过程，因此启动速度极快。")]),t._v(" "),s("h3",{attrs:{id:"_2-模块热更新-hmr-更高效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-模块热更新-hmr-更高效"}},[t._v("#")]),t._v(" 2. "),s("strong",[t._v("模块热更新 (HMR) 更高效")])]),t._v(" "),s("p",[t._v("Vite 只更新修改的模块，而不是重新打包和加载整个应用程序，这大大减少了开发过程中的等待时间。由于 HMR 的基础是 ESModules，Vite 能够精确地知道哪些模块需要重新编译，哪些可以保持不变。")]),t._v(" "),s("h3",{attrs:{id:"_3-按需编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-按需编译"}},[t._v("#")]),t._v(" 3. "),s("strong",[t._v("按需编译")])]),t._v(" "),s("p",[t._v("Vite 的按需编译机制避免了整个项目的打包，只有在请求时才会编译模块。因此，无论项目多大，初次加载的速度都很快。而且因为是模块化请求，用户仅在需要时才会加载某些依赖，避免了不必要的资源浪费。")]),t._v(" "),s("h3",{attrs:{id:"_4-生产环境的高效打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-生产环境的高效打包"}},[t._v("#")]),t._v(" 4. "),s("strong",[t._v("生产环境的高效打包")])]),t._v(" "),s("p",[t._v("生产环境下，Vite 通过 "),s("code",[t._v("Rollup")]),t._v(" 进行打包， 利用 "),s("code",[t._v("Rollup")]),t._v(" 强大的树摇和代码拆分功能，使得最终生成的代码包尽可能小。这保证了生产环境中的加载速度和性能。")])])}),[],!1,null,null,null);s.default=n.exports}}]);