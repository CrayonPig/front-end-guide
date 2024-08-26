# Hello World! (项目调用)

之前的文章中我们提到过，`Node.js` 和 `Rust` 都与包管理器一起安装。

- `Node.js` 的包管理器称为`npm`，其包称为`Node.js` 模块，其官方网站是[npmjs.com](https://www.npmjs.com/)。
- `Rust` 的包管理器称为`Cargo`，其包称为`crates`，其官方网站是[crates.io](https://crates.io/)。

## 初始化

当我们需要使用 `Node.js`初始化项目时，我们会输入命令

```shell
mkdir hello-js
cd ./hello-js
npm init -y
```

项目目录如下

```txt
└── package.json
```

`package.json`是`Node.js`的配置文件——包含项目元数据的文件，如名称、版本、依赖项等。

同样的，当我们使用 `Rust` 初始化时，需要输入命令

```shell
mkdir hello-rust
cd ./hello-rust
cargo init
```

上述命令也可以等价为

```shell
cargo new hello-rust
```

上述命令会在当前文件夹内创建`hello-rust`文件夹，项目目录如下

```txt
├── .gitignore
├── Cargo.toml
└── src
    └── main.rs
```

其中 `Cargo.toml` 是 `Rust` 的配置文件——包含项目元数据的文件，如名称、版本、依赖项等。

## 配置文件

我们首先看下 `Node.js`的配置文件 `package.json` 没有依赖关系的内容

```json
{
  "name": "hello-world",
  "version": "0.1.0",
  "author": "",
  "contributors": [
    ""
  ],
  "private": true,
  "description": "This is a demo.",
  "license": "",
  "keywords": ["demo", "test"],
  "homepage": "",
  "repository": {
    "type": "git",
    "url": ""
  },
  "bugs": ""
}
```

然后再对比 `Rust` 的清单文件 `Cargo.toml` 文件

```toml
[package]
name = "hello-world"
version = "0.1.0"
authors = [""]
publish = false
description = "This is a demo."
license = ""
keywords = ["demo", "test"]
homepage = ""
repository = ""
documentation = ""
```

看起来两者的配置文件除了文件格式不一致外，配置内容都非常相似

- 两者都必须提供项目名`name`
- 两者都必须提供版本号`version`
- `author`作者字段都是可选项
  - `Node.js`中，有协作者字段`contributors`
  - `Rust`中，协作者被归为`author`字段中，该字段为数组
- 如果不想将项目发布到公共存储库时
  - `Node.js`中，设置 `"private": true`
  - `Rust`中，设置 `publish = false`
- 两者都可以使用 `description` 来描述项目
- 两者都可以使用 `license` 来表示开源许可证
- 两者都可以使用 `keywords` 来作为关键词，以便在官方存储库中更容易被搜索到
- 两者都可以使用 `homepage` 来添加项目的主页
- 两者都可以使用 `repository` 来指定项目的代码仓库链接（两者的格式有所不同）
- `Node.js`可以添加报告链接 `bugs`, `Rust`不支持
- `Rust`可以添加文档链接 `documentation`, `Node.js`不支持

## 构建

在 `Node.js` 中，我们可以在  `package.json` 中添加如下内容

```json
{
  // ...your previous code
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js"
  }
}
```

这代表着这个项目的主入口是 `src/index.js`, 当别人引用你的项目时，会默认加载这个文件。而 `scripts.start` 则代表了一条可以运行的命令，执行命令 `npm run start` 则等价于 `node src/index.js`

在 `Rust` 中，会默认主入口是 `src/main.rs` 文件，而当我们使用`cargo new` 创建项目的时候，就会帮我们创建一个文件，并写好内容

```rust
fn main() {
    println!("Hello, world!");
}
```

以上代码，等价于 `Node.js` 中的

```js
function() {
  console.log('Hello, world!')
}
```

当我们执行 `cargo run` 时，就会寻找主入口文件，也就是默认的 `src/main.rs`

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/*/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 0.67s
     Running `target/debug/hello-rust`
Hello, world!
```

我们可以看到控制台直接输出了 `Hello, world!`，也就是说跟我们直接调用相比，该命令直接帮我们完成了两步操作

1. 编译文件
2. 运行编译好的文件

那么问题来了，编译好的文件去哪了？其实我们可以发现，运行完 `cargo run` 命令后，项目目录中多了一个 `target` 文件夹，刚才控制台的日志也很明白告诉我们 `Running 'target/debug/hello-rust'`, 也就是说，编译后的文件路径是 `target/debug/hello-rust`，那究竟是不是呢？我们来执行看看

```shell
$ target/debug/hello-rust 
Hello, world!
```

很明显，编译好的文件就是 `target/debug/hello-rust`

我们还发现，项目根目录中还多出了一个 `Cargo.lock` 文件，`Cargo.lock` 文件的作用类似于 `package-lock.json`，确保任何人在项目中使用依赖项的时候可以保持相同的版本。有关依赖项的问题，我们后续的篇章里面研究。

## 总结

本小节通过对比 `Node.js` 和 `Rust` 创建项目和运行的方式，研究了在 `Rust` 中如何创建项目并启动。
