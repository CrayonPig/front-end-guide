(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{449:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据上报"}},[t._v("#")]),t._v(" 数据上报")]),t._v(" "),a("p",[t._v("从前端的角度来讲，数据上报是前端监控系统的最后一个环节，也是至关重要的一环。它代表着我们之前收集的数据是否真正能够使用，可能单说数据上报，很多人会说，这不就是后端开个接口，前端直接调用完事，然而实际使用时，就会发现一些问题。")]),t._v(" "),a("ol",[a("li",[t._v("监控系统跟业务系统是两个独立的服务，存在跨域问题")]),t._v(" "),a("li",[t._v("在页面关闭前上报，发送的请求会被截断")]),t._v(" "),a("li",[t._v("需要等待服务器返回响应结果，可能会导致浏览器的主线程被阻塞，影响页面的性能和用户体验")]),t._v(" "),a("li",[t._v("受到浏览器的同域并发限制，即同一个域名下同时只能有一定数量的请求在进行中，超过限制的请求会被阻塞，导致监控数据丢失")])]),t._v(" "),a("p",[t._v("为了解决这些问题，可采用如下方案")]),t._v(" "),a("h2",{attrs:{id:"_1-1像素的透明gif上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1像素的透明gif上报"}},[t._v("#")]),t._v(" 1*1像素的透明GIF上报")]),t._v(" "),a("p",[t._v("由于浏览器在请求图片时会将请求地址和所有的查询参数一起发送到服务器，因此通过在请求地址中添加查询参数，可以实现数据的上报功能")]),t._v(" "),a("h3",{attrs:{id:"使用图片上传的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用图片上传的好处"}},[t._v("#")]),t._v(" 使用图片上传的好处：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("防止跨域")]),t._v(" 图片的src属性并不会跨域，并且同样可以发起请求")]),t._v(" "),a("li",[a("strong",[t._v("防止阻塞页面加载，影响用户体验")]),t._v(" 图片不用真实插入DOM中，即可发送请求")])]),t._v(" "),a("h3",{attrs:{id:"为什么是1-1像素的透明gif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么是1-1像素的透明gif"}},[t._v("#")]),t._v(" 为什么是1*1像素的透明GIF")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("体积小")]),t._v(" 从图片的体积上来说最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节。同样的响应，GIF可以比BMP节约41%的流量，比PNG节约35%的流量")]),t._v(" "),a("li",[t._v("1x1像素是最小的合法图片")]),t._v(" "),a("li",[t._v("透明的图片不会影响页面本身展示的效果")]),t._v(" "),a("li",[t._v("透明色的图片不用存储色彩空间数据，可以节约体积")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://www.example.com/report.gif?data=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223560870-4257"}},[t._v("成功")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const img = new Image();\nimg.src = `https://www.example.com/report.gif?data=${JSON.stringify(data)}`;\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223560870-4257","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("只能发送get请求！！")]),t._v(" "),a("p",[t._v("动态创建图片时，赋值src会自动发起一次请求，所以不需要再将图片插入到dom中。否则会发送两次一模一样的数据")])]),t._v(" "),a("h2",{attrs:{id:"sendbeacon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendbeacon"}},[t._v("#")]),t._v(" sendBeacon")]),t._v(" "),a("p",[t._v("使用 navigator.sendBeacon() 方法上报数据可以确保数据的可靠性和实时性，因为它可以在页面卸载前异步传输数据到服务器，并且不会阻塞页面的卸载。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some error message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 其他信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnavigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBeacon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1726223560870-19640"}},[t._v("成功")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const log = {\n  time: new Date().toLocaleString(),\n  message: 'Some error message',\n  // ... 其他信息\n};\nconst data = JSON.stringify(log);\nnavigator.sendBeacon('/api/log', data);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1726223560870-19640","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("上述代码会将错误日志以 JSON 格式发送到 /api/log 地址。由于 navigator.sendBeacon() 方法不支持响应信息，因此无法知道数据是否成功发送到服务器。如果需要确认数据是否已经成功接收，可以通过服务器端的日志来判断。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("navigator.sendBeacon()只能发送少量数据，通常不超过 64KB，且只支持 POST 请求，不支持同步请求，因此不能保证数据一定会被发送到服务器。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);