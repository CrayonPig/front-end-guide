(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{462:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),a("p",[t._v("前端单元测试是指对前端代码中的每一个模块（函数、组件等）进行测试的过程。前端单元测试可以通过自动化测试工具（如"),a("code",[t._v("Jest")]),t._v("、"),a("code",[t._v("Mocha")]),t._v("、"),a("code",[t._v("Karma")]),t._v("等）来完成。其中，"),a("code",[t._v("Jest")]),t._v("是"),a("code",[t._v("Facebook")]),t._v("开源的单元测试框架，具有快速、易于学习和使用等特点，已成为前端测试的重要工具之一。")]),t._v(" "),a("p",[t._v("前端单元测试可以检测代码中每个模块的正确性和健壮性，可以确保代码在修改后不会影响到原有的功能实现，也有助于开发者找出程序中的错误、漏洞和缺陷。单元测试还可以促进代码重构，并提高代码的可读性和可维护性，同时也可以减少代码中的冗余和无用代码。")]),t._v(" "),a("p",[t._v("单元测试的质量好坏可以通过代码覆盖率来判断，而代码覆盖率由四部分组成：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("语句覆盖率（Statement Coverage）")]),t._v(" 用于衡量被测试代码中每条语句的执行覆盖情况")]),t._v(" "),a("li",[a("strong",[t._v("行覆盖率（Line Coverage）")]),t._v(" 用于衡量被测试代码中每行代码的执行覆盖情况，不包含空行和注释等")]),t._v(" "),a("li",[a("strong",[t._v("函数覆盖率（Function Coverage）")]),t._v(" 用于衡量被测试代码中每个声明函数的执行覆盖情况")]),t._v(" "),a("li",[a("strong",[t._v("分支覆盖率（Branch Coverage）")]),t._v(" 用于衡量被测试代码中每一个判定分支的执行覆盖率")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("语句覆盖率和行覆盖率在定义上十分接近，很多资料都会将其画等号。在实际开发中，如果一行代码中只有一条可执行语句，此时语句覆盖率等同于行覆盖率。如果一行代码中有多条可执行语句，并且有存在执行语句执行不到的情况下，语句覆盖率和行覆盖率就不相同。")])]),t._v(" "),a("h2",{attrs:{id:"为什么需要单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要单元测试"}},[t._v("#")]),t._v(" 为什么需要单元测试")]),t._v(" "),a("p",[t._v("很多人会说，“前端需求变化这么快，单元测试没法做”。这句话有一定的道理，针对快速迭代的项目而言，业务逻辑一般会跟着项目迭代和更新随时变化，针对业务逻辑写单元测试的意义不大。但正因为项目快速迭代，所以对于公共组件和公共函数的要求更高，更需要去做单元测试来提高它们的可靠性和稳定性。")]),t._v(" "),a("p",[t._v("再次，当项目重构的时候，单元测试能有效保证代码重构前后逻辑的一致性，大大减少在测试环节中投入的精力。")]),t._v(" "),a("p",[t._v("开源社区的知名项目基本都有完善的单元测试，可以增强开发人员在工作中的可靠性和稳定性。代码覆盖率不仅代表了当前项目的质量，也一定程度上反应了维护者怼他的精力和重视程度。")]),t._v(" "),a("h2",{attrs:{id:"有单元测试代码质量就有保证吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有单元测试代码质量就有保证吗"}},[t._v("#")]),t._v(" 有单元测试代码质量就有保证吗")]),t._v(" "),a("p",[t._v("不是的，单元测试的代码覆盖率可以作为衡量项目质量的指标之一，但不是全部。因为代码覆盖率 100%只能保证代码的每个语句、分支都被运行过了，不能确保所有执行结果都符合预期。以下面的代码为例，add 是将两个数相加的函数，返回的结果是两个入参的和。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add.test.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toEqual")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940353424-86674"}},[t._v("成功")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// add.js\nfunction add(a, b) {\n  return a + b;\n}\n\n// add.test.js\ndescribe('add', () => {\n  test('test'. () => {\n    expect(add(1, 1)).toEqual(2);\n  });\n});\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940353424-86674","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("使用 Jest 执行以上代码，输出的测试报告中的语句覆盖率、行覆盖率、函数覆盖率及分支覆盖率均为 100%。按照预期，执行以下函数，应该输出 true。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("，"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940353424-84794"}},[t._v("成功")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"console.log (add(0.1，0,2) === 0.3)\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940353424-84794","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("实际上，由于Javascript浮点数运算的精度原因，输出结果为false。代码覆盖率只能证明代码被测试过，不能证明代码的逻辑一定正确。除了代码覆盖率应尽量达到100%，单元测试还应该设计不同场景下的测试用例来尽量覆盖边界情况。")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("通过前端单元测试，可以检测前端代码中的错误和缺陷，并确保代码的正确性和可靠性。同时，单元测试也帮助开发者更好地理解应用程序，并了解代码中的逻辑，从而更高效地开发和维护应用程序。但作为开发人员，我们不能过于相信单元测试的代码覆盖率，应该以辩证的眼光去看待。")])])}),[],!1,null,null,null);a.default=e.exports}}]);