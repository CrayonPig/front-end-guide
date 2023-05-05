(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{332:function(t,e,a){"use strict";a.r(e);var s=a(10),v=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-规范"}},[t._v("#")]),t._v(" Git 规范")]),t._v(" "),e("h2",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("master")]),t._v("  主分支：master主分支始终保持稳定的可发布版本")]),t._v(" "),e("p",[t._v("说明：只有项目组主程才拥有master主分支的管理权限（例如其他分支合并到master必须由主程操作）")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("dev")]),t._v(" 开发主分支，为不稳定版本，可能存在功能缺失，但已有的功能必须是完整的")]),t._v(" "),e("p",[t._v("说明：原则上不允许直接在dev分支上进行功能开发，必须新建feature分支进行开发")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("feature/[功能名称]")]),t._v(" 从dev分支创建，斜杠后跟功能名称，用于新功能开发，每天下班前push提交到远程")]),t._v(" "),e("p",[t._v("说明：开发完成以后，在远程发起向dev分支的合并请求，由指定的CodeReview人员审查通过以后进行合并，并删除该分支")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("bugfix/[bug编号]")]),t._v(" 问题修复分支：从dev分支创建，用于修改测试提出的bug，斜杠后跟bug编号")]),t._v(" "),e("p",[t._v("说明：修复以后，在远程发起向dev分支的合并请求，并指定提交者自身（或其他人）作为CodeReview，合并以后删除该分支")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("refactor/[重构名称]")]),t._v(" 重构分支：从dev分支创建，用于代码的重大规模重构（小规模重构创建feature分支即可）")]),t._v(" "),e("p",[t._v("说明：重构以后，必须经过严格测试通过，才能向dev分支合并。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("hotfix-[问题名称 | bug编号]")]),t._v(" 紧急热修复分支：从master分支创建，横线后面跟上问题名称或者对应的bug编号，仅仅适用于生产线问题紧急修复！")]),t._v(" "),e("p",[t._v("说明：修复完成，测试通过，合并到master和dev分支上，然后将此分支删除")])])]),t._v(" "),e("h2",{attrs:{id:"commit提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit提交"}},[t._v("#")]),t._v(" Commit提交")]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("("),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("): "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("subject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" #header\n// 空一行\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// 空一行\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Header部分只有一行，包括三个字段："),e("code",[t._v("type")]),t._v("（必需）、"),e("code",[t._v("scope")]),t._v("（可选）和"),e("code",[t._v("subject")]),t._v("（必需）。"),e("code",[t._v("<body>")]),t._v("和"),e("code",[t._v("<footer>")]),t._v("可省略")]),t._v(" "),e("p",[t._v('如： "feat: 增加一个新功能"')]),t._v(" "),e("p",[t._v("type用于说明 commit 的提交性质")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("feat")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新增一个功能")])]),t._v(" "),e("tr",[e("td",[t._v("fix")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("修复一个Bug")])]),t._v(" "),e("tr",[e("td",[t._v("update")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("更新某功能")])]),t._v(" "),e("tr",[e("td",[t._v("docs")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("文档变更")])]),t._v(" "),e("tr",[e("td",[t._v("style")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代码格式（不影响功能，例如空格、分号等格式修正）")])]),t._v(" "),e("tr",[e("td",[t._v("refactor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代码重构")])]),t._v(" "),e("tr",[e("td",[t._v("perf")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("改善性能")])]),t._v(" "),e("tr",[e("td",[t._v("test")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("测试")])]),t._v(" "),e("tr",[e("td",[t._v("build")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）")])]),t._v(" "),e("tr",[e("td",[t._v("ci")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等")])]),t._v(" "),e("tr",[e("td",[t._v("chore")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("变更构建流程或辅助工具")])]),t._v(" "),e("tr",[e("td",[t._v("revert")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("代码回退")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);