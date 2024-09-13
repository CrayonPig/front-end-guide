(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{473:function(t,e,n){"use strict";n.r(e);var a=n(14),c=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装和更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装和更新"}},[t._v("#")]),t._v(" 安装和更新")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("跟我们使用"),e("code",[t._v("Node.js")]),t._v("一样，都需要先到官网进行安装，并且安装时会将编译器和包管理器一同安装到系统中。"),e("a",{attrs:{href:"https://www.rust-lang.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust官网地址"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Node")]),t._v(" "),e("th",[t._v("Rust")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("运行命令")]),t._v(" "),e("td",[t._v("node")]),t._v(" "),e("td",[t._v("rustc")])]),t._v(" "),e("tr",[e("td",[t._v("包管理器")]),t._v(" "),e("td",[t._v("npm")]),t._v(" "),e("td",[t._v("cargo")])]),t._v(" "),e("tr",[e("td",[t._v("版本管理")]),t._v(" "),e("td",[t._v("nvm")]),t._v(" "),e("td",[t._v("rustup")])])])]),t._v(" "),e("p",[e("code",[t._v("Rust")]),t._v(" 是编译型语言，通过编译器 "),e("code",[t._v("rustc")]),t._v(" 将静态语言编译成目标平台的原生可执行文件，这些可执行文件可以直接在目标平台上运行。类似于"),e("code",[t._v("TypeScript")]),t._v("的解析器"),e("code",[t._v("tsc")]),t._v("将"),e("code",[t._v(".ts")]),t._v("文件解析为可执行的"),e("code",[t._v(".js")]),t._v("文件。")]),t._v(" "),e("h3",{attrs:{id:"linux或macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux或macos"}},[t._v("#")]),t._v(" Linux或MacOS")]),t._v(" "),e("p",[t._v("MacOS、Linux 或其它类 Unix 系统。要下载 "),e("code",[t._v("Rustup")]),t._v(" 并安装 "),e("code",[t._v("Rust")]),t._v("，请在终端中运行以下命令")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--proto")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=https'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tlsv1.2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sSf")]),t._v(" https://sh.rustup.rs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558724-72164"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558724-72164","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("rustup安装后，系统会提示您三个选项：")]),t._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[t._v("1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558724-44792"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558724-44792","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("默认选择第一个就可以，安装完成后，界面会提示")]),t._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[t._v("stable installed - rustc 1.75.0 (82e1608df 2023-12-21)\n\n\nRust is installed now. Great!\n\nTo get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH\nenvironment variable. Next time you log in this will be done automatically.\n\nTo configure your current shell run source $HOME/.cargo/env\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558724-18960"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"stable installed - rustc 1.75.0 (82e1608df 2023-12-21)\n\n\nRust is installed now. Great!\n\nTo get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH\nenvironment variable. Next time you log in this will be done automatically.\n\nTo configure your current shell run source $HOME/.cargo/env\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558724-18960","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),e("p",[t._v("在 Windows 上，访问"),e("a",{attrs:{href:"https://www.rust-lang.org/zh-CN/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装页面"),e("OutboundLink")],1),t._v("并按照说明安装 Rust。")]),t._v(" "),e("p",[t._v("在安装过程的某个步骤，你可能会收到一条消息，提示你还需要适用于 Visual Studio 2013 或更高版本的 C++ 的构建工具（C++ build tools）。获取这些构建工具的最简单方法是安装 Visual Studio 2019 的构建工具。当被问及要安装哪些内容时，请确保已选择 “C++ build tools”，并包括 Windows 10 SDK 和英文语言包。")]),t._v(" "),e("p",[t._v("要检查是否正确安装了 Rust，可打开 shell 并输入下面这行")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rustc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558724-13529"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"rustc --version\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558724-13529","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("然后就会看到最新发布的稳定版本的版本号、提交哈希值和提交日期，如下所示格式")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rustc x.y.z "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abcabcabc yyyy-mm-dd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558724-30864"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"rustc x.y.z (abcabcabc yyyy-mm-dd)\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558724-30864","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("如果有表示你安装成功了，如果没有并且是Windows，请把 "),e("code",[t._v("C:\\Users\\{PC}\\.cargo\\bin")]),t._v(" 添加到环境变量 PATH 里，如果没有生效，重启一下即可。")]),t._v(" "),e("h2",{attrs:{id:"安装其他版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装其他版本"}},[t._v("#")]),t._v(" 安装其他版本")]),t._v(" "),e("p",[t._v("前面我们说过，"),e("code",[t._v("rustc")]),t._v("是可以管理 "),e("code",[t._v("Rust")]),t._v(" 多个版本的，例如，想安装"),e("code",[t._v("1.29.0")]),t._v(" 版本")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rustup "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.29")]),t._v(".0\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558725-58828"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"rustup install 1.29.0\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558725-58828","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("安装完成后，你可以使用以下命令切换到已安装的特定版本")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rustup default "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.29")]),t._v(".0\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558725-62649"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"rustup default 1.29.0\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558725-62649","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"更新和卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新和卸载"}},[t._v("#")]),t._v(" 更新和卸载")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("rustup")]),t._v(" 安装 "),e("code",[t._v("Rust")]),t._v(" 后，更新到最新版本很简单。在 "),e("code",[t._v("shell")]),t._v(" 中运行以下更新命令：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rustup update\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558725-81617"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"rustup update\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558725-81617","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("要卸载 "),e("code",[t._v("Rust")]),t._v(" 和 "),e("code",[t._v("rustup")]),t._v("，在 "),e("code",[t._v("shell")]),t._v(" 中运行以下卸载命令：")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("rustup self uninstall”\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558725-13406"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"rustup self uninstall”\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558725-13406","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"包管理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包管理器"}},[t._v("#")]),t._v(" 包管理器")]),t._v(" "),e("p",[e("code",[t._v("Rust")]),t._v(" 的包管理器叫 "),e("code",[t._v("cargo")]),t._v("，我们使用"),e("code",[t._v("cargo --help")]),t._v("会发现，"),e("code",[t._v("cargo")]),t._v("主要有如下命令")]),t._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[t._v("build, b    构建当前包\ncheck, c    分析当前包并报告错误，但不构建目标文件\nclean       删除构建的目录\ndoc, d      构建当前包及其依赖项目的文档（会创建 `target/doc` 目录，使用浏览器打开可以查看详细的文档）\nnew         创建一个新的包\ninit        在现有目录中创建一个新的包\nadd         添加依赖项到当前项目中\nremove      从当前项目中删除依赖项\nrun, r      构建并运行项目\ntest, t     运行测试\nbench       运行基准测试\nupdate      更新在 Cargo.lock 注册的依赖项版本\nsearch      搜索 crates\npublish     打包并上传当前包 （crates.io）\ninstall     安装 Rust 二进制文件，默认目录在 $HOME/.cargo/bin\nuninstall   卸载 Rust 二进制文件\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223558725-33937"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"build, b    构建当前包\ncheck, c    分析当前包并报告错误，但不构建目标文件\nclean       删除构建的目录\ndoc, d      构建当前包及其依赖项目的文档（会创建 `target/doc` 目录，使用浏览器打开可以查看详细的文档）\nnew         创建一个新的包\ninit        在现有目录中创建一个新的包\nadd         添加依赖项到当前项目中\nremove      从当前项目中删除依赖项\nrun, r      构建并运行项目\ntest, t     运行测试\nbench       运行基准测试\nupdate      更新在 Cargo.lock 注册的依赖项版本\nsearch      搜索 crates\npublish     打包并上传当前包 （crates.io）\ninstall     安装 Rust 二进制文件，默认目录在 $HOME/.cargo/bin\nuninstall   卸载 Rust 二进制文件\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223558725-33937","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("p",[t._v("后续我们在使用过程中，会逐步了解每个命令的详细作用")])])}),[],!1,null,null,null);e.default=c.exports}}]);