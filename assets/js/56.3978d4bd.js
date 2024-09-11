(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{386:function(v,e,_){"use strict";_.r(e);var t=_(14),o=Object(t.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"vite-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-概述"}},[v._v("#")]),v._v(" Vite 概述")]),v._v(" "),e("h2",{attrs:{id:"文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[v._v("#")]),v._v(" 文档")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Vite 英文文档"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("a",{attrs:{href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Vite 中文文档"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"什么是vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是vite"}},[v._v("#")]),v._v(" 什么是Vite")]),v._v(" "),e("p",[e("code",[v._v("Vite")]),v._v(" 是一种新型前端构建工具，能够显著提升前端开发体验。"),e("code",[v._v("Vite")]),v._v(" 旨在为现代 Web 开发提供极快的开发服务器启动速度和高效的构建性能。它主要由两部分组成：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。")])]),v._v(" "),e("li",[e("p",[v._v("一套构建指令，它使用 "),e("code",[v._v("Rollup")]),v._v(" 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。")])])]),v._v(" "),e("p",[v._v("通过利用现代浏览器的特性和高效的构建策略，"),e("code",[v._v("Vite")]),v._v(" 大大提升了前端开发和构建的效率，被广泛认为是下一代前端开发工具。")]),v._v(" "),e("h2",{attrs:{id:"vite-有哪些特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-有哪些特点"}},[v._v("#")]),v._v(" Vite 有哪些特点")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("快速的开发服务器启动")])])]),v._v(" "),e("p",[v._v("利用浏览器的原生 ES 模块支持，实现即开即用的开发服务器，避免了传统打包工具的冷启动等待时间。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("即时的模块热替换（HMR）")])])]),v._v(" "),e("p",[v._v("在开发过程中，当源代码发生变化时，"),e("code",[v._v("Vite")]),v._v(" 能够迅速更新模块，提供流畅的开发体验。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("优化的生产构建")])])]),v._v(" "),e("p",[v._v("使用 "),e("code",[v._v("Rollup")]),v._v(" 进行生产环境的代码打包，支持代码拆分和树摇等优化技术。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("丰富的插件生态")])])]),v._v(" "),e("p",[v._v("兼容 "),e("code",[v._v("Rollup")]),v._v(" 的插件系统，方便扩展功能和集成各种工具。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("框架无关性")])])]),v._v(" "),e("p",[v._v("除了对 Vue 的良好支持外，Vite 也支持 "),e("code",[v._v("React")]),v._v("、"),e("code",[v._v("Preact")]),v._v("、"),e("code",[v._v("Svelte")]),v._v("、"),e("code",[v._v("Lit")]),v._v(" 等其他前端框架。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("开箱即用")])])]),v._v(" "),e("p",[e("code",[v._v("Vite")]),v._v(" 的默认配置已经涵盖了大多数现代开发项目的需求，开发者通常只需要少量或不需要配置即可开始开发。它与传统的打包工具（如 "),e("code",[v._v("Webpack")]),v._v("）相比，提供了更直观、更简洁的开发体验。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("专为现代开发环境设计")])])]),v._v(" "),e("p",[e("code",[v._v("Vite")]),v._v(" 的设计初衷就是为了支持现代 Web 开发工具链和项目结构，特别是前端单页面应用（SPA）和多页面应用（MPA）。因此，它的架构更加现代化，相比传统工具如 "),e("code",[v._v("Webpack")]),v._v(" 更适合现代浏览器和 "),e("code",[v._v("JavaScript")]),v._v(" 技术。")]),v._v(" "),e("h2",{attrs:{id:"vite-有哪些缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-有哪些缺点"}},[v._v("#")]),v._v(" Vite 有哪些缺点")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("开发环境下首屏加载变慢")])])]),v._v(" "),e("p",[v._v("由于 "),e("code",[v._v("unbundle")]),v._v(" 机制， "),e("code",[v._v("Vite")]),v._v(" 首屏期间需要额外做其它工作。不过首屏性能差只发生在"),e("code",[v._v("dev server")]),v._v("启动以后第一次加载页面时发生。之后再 "),e("code",[v._v("reload")]),v._v(" 页面时，首屏性能会好很多。原因是"),e("code",[v._v("dev server")]),v._v("会将之前已经完成转换的内容缓存起来。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("开发环境和生产环境构建方式不同")])])]),v._v(" "),e("p",[v._v("在开发模式下，"),e("code",[v._v("Vite")]),v._v(" 通过 "),e("code",[v._v("esbuild")]),v._v(" 转换代码和预构建。而在生产环境中，仍然使用 "),e("code",[v._v("Rollup")]),v._v(" 进行打包构建。两种不同的方式可能会导致代码在开发环境中运行正常，但在生产环境中构建时出现问题。这增加了调试的复杂性。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("Rollup 限制")])])]),v._v(" "),e("p",[v._v("由于 "),e("code",[v._v("Vite")]),v._v(" 在生产环境中使用 "),e("code",[v._v("Rollup")]),v._v(" 打包，受限于 "),e("code",[v._v("Rollup")]),v._v(" 的功能和插件生态，某些 "),e("code",[v._v("Webpack")]),v._v(" 中常用的功能和插件可能不直接支持，或者需要特定的配置才能实现。")]),v._v(" "),e("h2",{attrs:{id:"为什么要学习vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习vite"}},[v._v("#")]),v._v(" 为什么要学习Vite")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://cn.vitejs.dev/guide/why.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方介绍-为什么选Vite"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("使用 "),e("code",[v._v("Vite")]),v._v(" 可以显著提升开发体验，特别是对于现代前端开发项目，其快速的启动时间、强大的热更新功能和高度优化的生产构建流程都让它成为一种非常流行的工具。如果你的项目涉及大量的模块和依赖，"),e("code",[v._v("Vite")]),v._v(" 的表现尤其出色。")]),v._v(" "),e("p",[v._v("最最重要的是，"),e("code",[v._v("Vue.js")]),v._v(" 官方的脚手架 "),e("code",[v._v("Vue Cli")]),v._v(" 以后使用 "),e("code",[v._v("Vite")]),v._v(" 构建。")]),v._v(" "),e("h2",{attrs:{id:"nobundle-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nobundle-模式"}},[v._v("#")]),v._v(" nobundle 模式")]),v._v(" "),e("p",[e("code",[v._v("nobundle")]),v._v(" 是 "),e("code",[v._v("Vite")]),v._v(" 的一种工作模式，也被称为无打包模式，它主要应用于开发阶段。在这种模式下，"),e("code",[v._v("Vite")]),v._v(" 不会像传统的打包工具（如 "),e("code",[v._v("Webpack")]),v._v("）那样对所有模块进行捆绑打包，而是直接使用浏览器原生的 ES 模块功能来加载和处理 "),e("code",[v._v("JavaScript")]),v._v(" 文件。这与传统的“捆绑”方式形成鲜明对比。")]),v._v(" "),e("p",[e("code",[v._v("nobundle")]),v._v(" 模式主要用于提升开发环境中的速度和灵活性，通过直接利用浏览器的 ES 模块支持，而不需要进行预先打包。这种模式使得 "),e("code",[v._v("Vite")]),v._v(" 在开发阶段的启动速度极快，并能为现代前端开发提供极佳的开发体验。")])])}),[],!1,null,null,null);e.default=o.exports}}]);