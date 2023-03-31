# GitHub Actions

GitHub Actions是一个持续集成和持续交付的平台，它可以帮助你通过自动化的构建（包括编译、发布、自动化测试）来验证你的代码，从而尽快地发现集成错误。github于2019年11月后对该功能全面开放，现在所有的github用户可以直接使用该功能。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行您的工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

## 基本概念
大家知道，持续集成由很多操作组成，比如拉取代码、打包构建、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。
基本术语如下：
- workflow: 一个 workflow 就是一个完整的工作流过程，每个workflow 包含一组jobs任务。
- job : jobs任务包含一个或多个job ，每个 job包含一系列的 steps 步骤。
- step : 每个 step 步骤可以执行指令或者使用一个 action 动作。
- action : 每个 action 动作就是一个通用的基本单元

## 部署到GitHub
GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的`.github/workflows`目录。

workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为.yml，比如foo.yml。一个库可以有多个 workflow 文件。GitHub 只要发现.github/workflows目录里面有.yml文件，就会自动运行该文件。

workflow文件的配置字段非常多，详见[官方文档](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions)。这里以本项目的workflow配置为例进行讲解。
```yml
name: action # workflow的名称

on: # on字段指定触发 workflow 的条件，此处为每次代码push到main分支的时候触发
  push:
    branches: [ "main" ]

jobs: # 一个workflow由执行的一项或多项job
  build: # 一个job任务，任务名为build
    runs-on: ubuntu-latest # runs-on字段指定运行所需要的虚拟机环境。它是必填字段。

    steps:
    - uses: actions/checkout@v3  # 使用checkout@v3这个action获取源码

    - name: Use Node.js 10.x  # 给该项步骤命名
      uses: actions/setup-node@v2 # 使用setup-node@v2这个action使用node
      with: # 定某个action 的附加参数
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'

    - name: Build
      run: | # 执行执行某个shell命令或脚本
        npm install
        npm run build

    - name: deploy
      uses: JamesIves/github-pages-deploy-action@4.1.1 # 使用action进行分支处理
      with:
        # 发布到指定分支
        BRANCH: gh-pages
        # 构建成果所在目录,默认位置都是在根目录
        FOLDER:  ./dist
```
通过注释，我们可以知道，这个workflow文件的流程是当用户push代码到main分支时，使用ubuntu-latest虚拟机，虚拟机中执行了检出代码，使用node，执行自定义构建命令，将打包后的代码发布到指定分支。

## 开通Actions
进入github的项目页面，点击“Actions”

![第一步](@assets/github_action_1.png)

github提供了workflow的应用市场，可以搜索到他人提交的actions，我们这里选择自己创建

![第二步](@assets/github_action_2.png)

github会自动帮我们创建`.github/workflows`目录。我们只需将提前准备好的yml文件内容复制进去提交

![第三步](@assets/github_action_3.png)

最后就可以按照自己的所写的运行时机测试actions的效果了

## 小结
github actions 完美的实现了CI/CD，可以让我们的注意力更多的放在代码开发上，一次配置终身受用。github