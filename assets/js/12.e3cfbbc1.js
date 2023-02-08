(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{283:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"组件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件命名"}},[s._v("#")]),s._v(" 组件命名")]),s._v(" "),t("h2",{attrs:{id:"组件拓展名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件拓展名"}},[s._v("#")]),s._v(" 组件拓展名")]),s._v(" "),t("p",[s._v("如果使用 Vue，则文件扩展名为 "),t("code",[s._v(".vue")]),s._v("；如果使用 JavaScript，则文件扩展名为 "),t("code",[s._v(".js")]),s._v("；如果使用 JSX，则文件扩展名为 "),t("code",[s._v(".jsx")]),s._v("；如果使用 "),t("code",[s._v("TypeScript")]),s._v("，则文件扩展名为 "),t("code",[s._v(".tx")]),s._v("，同一目录下不得拥有同名的不同拓展名文件。在使用模块导入时，倾向于不添加后缀。如果存在同名但不同后缀的文件，构建工具将无法决定哪一个是需要引入的模块。")]),s._v(" "),t("h2",{attrs:{id:"组件文件名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件文件名"}},[s._v("#")]),s._v(" 组件文件名")]),s._v(" "),t("p",[s._v("组件名为多个单词")]),s._v(" "),t("p",[s._v("组件名应该始终是多个单词的，根组件 "),t("code",[s._v("App")]),s._v(" 以及 "),t("code",[s._v("<transition>")]),s._v("、"),t("code",[s._v("<component>")]),s._v(" 之类的 Vue 内置组件除外。")]),s._v(" "),t("blockquote",[t("p",[s._v("这样做可以避免跟现有的以及未来的 HTML 元素"),t("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name",target:"_blank",rel:"noopener noreferrer"}},[s._v("相冲突"),t("OutboundLink")],1),s._v("，因为所有的 HTML 元素名称都是单个单词的。")])]),s._v(" "),t("h2",{attrs:{id:"单文件组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件"}},[s._v("#")]),s._v(" 单文件组件")]),s._v(" "),t("blockquote",[t("p",[s._v("我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。")])]),s._v(" "),t("p",[s._v("单文件组件的文件名应该始终是"),t("code",[s._v("kebab-case")])]),s._v(" "),t("p",[s._v("业务中使用是"),t("code",[s._v("PascalCase")])]),s._v(" "),t("p",[s._v("组件的实例用"),t("code",[s._v("camelCase")])]),s._v(" "),t("p",[t("strong",[s._v("没有内容的组件应该是自闭合的")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("components"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" my"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" MyComponent "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/my-component.vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myComponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MyComponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[s._v("// 业务中使用 \n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("MyComponent")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("MyComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("这是一个组件"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("MyComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("组件名应该倾向于完整单词而不是缩写，并且对于有约定俗称的单词，不得额外命名")])]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- bad --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("MyWX")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- good --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("MyWeChat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"基础组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础组件"}},[s._v("#")]),s._v(" 基础组件")]),s._v(" "),t("p",[t("strong",[s._v("应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的"),t("code",[s._v("base")]),s._v("前缀开头")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("components"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("button"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("icon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这样做的几个好处：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("当你在编辑器中以字母顺序排序时，你的应用的基础组件会全部列在一起，这样更容易识别。")])]),s._v(" "),t("li",[t("p",[s._v("因为组件名应该始终是多个单词，所以这样做可以避免你在包裹简单组件时随意选择前缀 (比如 "),t("code",[s._v("MyButton")]),s._v("、"),t("code",[s._v("VueButton")]),s._v(")。")])]),s._v(" "),t("li",[t("p",[s._v("因为这些组件会被频繁使用，所以你可能想把它们放到全局而不是在各处分别导入它们。使用相同的前缀可以让 webpack 这样工作：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" requireComponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("context")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("base-[a-z]\\w+\\.(vue|js)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrequireComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("fileName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baseComponentConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("requireComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  baseComponentConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" baseComponentConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" baseComponentConfig\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" baseComponentName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" baseComponentConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    fileName\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^.+\\/")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.\\w+$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseComponentName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" baseComponentConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"单例组件名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单例组件名"}},[s._v("#")]),s._v(" 单例组件名")]),s._v(" "),t("p",[t("strong",[s._v("只应该拥有单个活跃实例的组件应该以 "),t("code",[s._v("the")]),s._v(" 前缀命名，以示其唯一性")])]),s._v(" "),t("p",[s._v("这不意味着组件只可用于一个单页面，而是"),t("em",[s._v("每个页面")]),s._v("只使用一次。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("components"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" the"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("heading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" the"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sidebar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"组件名中单词顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件名中单词顺序"}},[s._v("#")]),s._v(" 组件名中单词顺序")]),s._v(" "),t("p",[t("strong",[s._v("组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。")])]),s._v(" "),t("p",[s._v("因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("components"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" search"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("clear"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" search"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" search"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" search"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("input"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("excludeGlob"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" settings"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("checkbox"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("terms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" settings"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("checkbox"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("launchOnStartup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("还有另一种多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有 100+ 个组件) 的应用下才考虑这么做，因为在多级目录间找来找去，要比在单个 components 目录下滚动查找要花费更多的精力。")])])}),[],!1,null,null,null);t.default=e.exports}}]);