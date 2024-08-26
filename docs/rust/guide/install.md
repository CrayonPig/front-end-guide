# 安装和更新

## 安装

跟我们使用`Node.js`一样，都需要先到官网进行安装，并且安装时会将编译器和包管理器一同安装到系统中。[Rust官网地址](https://www.rust-lang.org/zh-CN/)

|          | Node | Rust   |
| -------- | ---- | ------ |
| 运行命令 | node | rustc |
| 包管理器 | npm  | cargo  |
| 版本管理 | nvm  | rustup  |

`Rust` 是编译型语言，通过编译器 `rustc` 将静态语言编译成目标平台的原生可执行文件，这些可执行文件可以直接在目标平台上运行。类似于`TypeScript`的解析器`tsc`将`.ts`文件解析为可执行的`.js`文件。

### Linux或MacOS

MacOS、Linux 或其它类 Unix 系统。要下载 `Rustup` 并安装 `Rust`，请在终端中运行以下命令

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

rustup安装后，系统会提示您三个选项：

```txt
1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

默认选择第一个就可以，安装完成后，界面会提示

```txt
stable installed - rustc 1.75.0 (82e1608df 2023-12-21)


Rust is installed now. Great!

To get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH
environment variable. Next time you log in this will be done automatically.

To configure your current shell run source $HOME/.cargo/env
```

### Windows

在 Windows 上，访问[安装页面](https://www.rust-lang.org/zh-CN/tools/install)并按照说明安装 Rust。

在安装过程的某个步骤，你可能会收到一条消息，提示你还需要适用于 Visual Studio 2013 或更高版本的 C++ 的构建工具（C++ build tools）。获取这些构建工具的最简单方法是安装 Visual Studio 2019 的构建工具。当被问及要安装哪些内容时，请确保已选择 “C++ build tools”，并包括 Windows 10 SDK 和英文语言包。

要检查是否正确安装了 Rust，可打开 shell 并输入下面这行

```shell
rustc --version
```

然后就会看到最新发布的稳定版本的版本号、提交哈希值和提交日期，如下所示格式

```shell
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

如果有表示你安装成功了，如果没有并且是Windows，请把 `C:\Users\{PC}\.cargo\bin` 添加到环境变量 PATH 里，如果没有生效，重启一下即可。

## 安装其他版本

前面我们说过，`rustc`是可以管理 `Rust` 多个版本的，例如，想安装`1.29.0` 版本

```shell
rustup install 1.29.0
```

安装完成后，你可以使用以下命令切换到已安装的特定版本

```shell
rustup default 1.29.0
```

## 更新和卸载

通过 `rustup` 安装 `Rust` 后，更新到最新版本很简单。在 `shell` 中运行以下更新命令：

```shell
rustup update
```

要卸载 `Rust` 和 `rustup`，在 `shell` 中运行以下卸载命令：

```shell
rustup self uninstall”
```

## 包管理器

`Rust` 的包管理器叫 `cargo`，我们使用`cargo --help`会发现，`cargo`主要有如下命令

```txt
build, b    构建当前包
check, c    分析当前包并报告错误，但不构建目标文件
clean       删除构建的目录
doc, d      构建当前包及其依赖项目的文档（会创建 `target/doc` 目录，使用浏览器打开可以查看详细的文档）
new         创建一个新的包
init        在现有目录中创建一个新的包
add         添加依赖项到当前项目中
remove      从当前项目中删除依赖项
run, r      构建并运行项目
test, t     运行测试
bench       运行基准测试
update      更新在 Cargo.lock 注册的依赖项版本
search      搜索 crates
publish     打包并上传当前包 （crates.io）
install     安装 Rust 二进制文件，默认目录在 $HOME/.cargo/bin
uninstall   卸载 Rust 二进制文件
```

后续我们在使用过程中，会逐步了解每个命令的详细作用
