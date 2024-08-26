# Hello World! (直接调用)

按照传统，在学习一门新的语言的时候，我们都会编写`Hello world!`的简单程序，我们也遵循这个惯例


在`Node.js`中打印 `Hello world!`，我们只需要创建一个 `hello.js` 文件，并写入如下内容

```js
console.log('Hello world!');
```

再通过命令行用 `Node.js` 运行这个文件，控制台可以直接打印`Hello world!`

```shell
node hello.js
Hello world!
```

同样在 `Rust` 中，我们创建一个 `hello.rs` 文件，并写入如下内容

```rs
fn main() {
    println!("Hello world!");
}
```

:::tip
在很多编程语言中都使用一个入口函数（`main`函数）。虽然平常写 `JavaScript` 没有这种讲究，实际在前端工程化中，已经在使用入口函数了，只不过方式不同，现代框架里面都是 `SPA` 单入口形式，`Webpack` 默认配置打包就是 `main.js`。
:::

接下来我们执行编译命令

```shell
rustc hello.rs
```

你会发现控制台什么输出都没有，这其实很正常，我们之前说过，`rustc`执行的只是个编译过程，将代码编译为目标平台可执行的文件，并没有执行，执行需要手动运行编译后的文件

```shell
./hello_world
Hello world!
```

现在控制台中可以看到打印出`Hello world!`

细心的小伙伴其实已经发现，上述实例代码中，`JavaScript`和`Rust`的代码风格不一致，这是因为`Rust`是有官方风格指南的，我们可以执行打开`Rust`本地文档的命令

```shell
rustup doc
```

此命令会在浏览器中打开一个本地网站，我们搜索`The Style Guide`就可以找到`Rust`官方风格指南

这里需要着重说明的是

1. `双引号""`用来创建一个字符串文字，`单引号''`用来创建一个字符文字
2. 在 `Rust` 中，强制使用分号 `;`
