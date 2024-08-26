# 作为一个前端为什么要学习 Rust ？

随着前端基建的不断完善，前端基建已经完成了从无到有的过程，进入从有到优的过程，在这个过程中，性能已经成为各大基建领域追求的目标。尤其是WebAssembly（wasm）的标准设立，使得其他编程语言有了在前端领域发挥的价值，其中Rust更是佼佼者。在前端领域中，已经有了各种优秀的Rust项目投入使用

## 前端基础设施领域

- SWC: (Speedy Web Compiler) 基于 Rust 的前端构建工具，可以理解为 Rust 版本的 Babel，但是性能有 10 倍提升。目前被 Next.js、Deno 使用。
- Tauri：Tauri 是目前最流行的 Electron 替代方案，通过使用 Rust 和 Webview2 成功解决了 Electron 的包体积大和内存占用高的问题。
- Rome：可以理解为 Babel 作者的新作品，Rome 旨在取代许多现有的 JavaScript 工具，集代码检测、打包、编译、测试等功能于一身。
- Parcel：零配置构建工具，特点是快速编译和不需要配置
- Rolldown：使用 Rust 开发的 Rollup.js 编译工具的替代品，基于字节跳动的 Oxc 工具集合构建，它提供与 Rollup 兼容的应用程序接口和插件接口，将作为 Vite 未来使用的打包工具。
- Rspack：字节跳动开源的基于Rust开发的构建工具，兼容webpack生态的路线

## 数据可视化领域

- Wgpu：是 WebGPU API 标准的 Rust 实现。WebGPU 是由 W3C 发布的规范，目标是让网页代码能安全可靠地访问 GPU 功能。其实现方式借鉴了 Vulkan API，会翻译到宿主硬件所用的各式 API（如 DirectX、Metal、Vulkan 等）上执行。
- Bevy：基于 Rust 语言开发，数据驱动的游戏引擎。同时支持 2D 和 3D 图形渲染，以及图可视化的渲染。
- Cube.js: cube.js 是开源的 BI 分析工具框架，其中的 Cube Store 用于分析查询的性能优化以及通过跨数据库连接的数据联合等附加功能，就是由 Rust 来实现的。

## Node 生态

- Deno：Deno 是一个简单、先进且安全的 JavaScript 和 TypeScript 运行时环境，其基于 V8 引擎并采用 Rust 编程语言构建。
- Napi-rs：用 Rust 和 N-API 开发高性能 Node.js 扩展，可以替代之前用 C++ 开发的 Node.js 扩展

## Web3 领域

由于 Web3 协议在处理数千万个不可信输入时需要快速且强大的性能，Rust 具有明显的优势。可以以很好的性能处理功能复杂的任务，同时还减少了与内存、边界、空变量、初始化变量或整数溢出相关的错误。

使用 Rust 创建更强大的 DApp(分布式应用)，它可以减少许多常见的错误，使 DApp 在发布后按预期运行。Rust 的性能优势和安全性，使得 Rust 成为 Web3 应用程序的理想选择。其中币安的撮合引擎就是以 Rust 作为主语言，Solana 社区更是有很多基于 Rust 开发的 DApp。

## 其他领域

- 微软已经用3.6万行Rust代码改写了Windows内核。
- 谷歌正在将 Android 原生代码从 C++ 迁移到 Rust。
- VIVO发布蓝河系统，采用Rust编写。
- AWS使用Rust大规模的构建基础设施。
- 美国网络安全和基础设施局（CISA）联合其他机构颁发了一份《内存安全路线图指南》， 其中就指出了 C 和 C++ 是内存不安全的编程语言，并呼吁软件开发商采用 Rust、Java 等其他内存安全的编程语言。
- ......

## 结语

综上所述，Rust已经在前端领域和各大公司获得了蓬勃的发展，并且在可预见的将来，会有更多的前端工具或项目使用Rust，Rust已经成为深入前端领域的一门不可或缺的语言。也许在不久的将来，Rust会成为普通前端和资深前端的一道分水岭。

:::tip 建议
初中级前端开发人员的精力还是先放到JavaScript和Node.js中，高级和资深开发人员Rust必学
:::