# Git 规范

## 分支管理


* **master**  主分支：master主分支始终保持稳定的可发布版本
  
  说明：只有项目组主程才拥有master主分支的管理权限（例如其他分支合并到master必须由主程操作）

* **dev** 开发主分支，为不稳定版本，可能存在功能缺失，但已有的功能必须是完整的
  
  说明：原则上不允许直接在dev分支上进行功能开发，必须新建feature分支进行开发

* **feature/[功能名称]** 从dev分支创建，斜杠后跟功能名称，用于新功能开发，每天下班前push提交到远程
  
  说明：开发完成以后，在远程发起向dev分支的合并请求，由指定的CodeReview人员审查通过以后进行合并，并删除该分支

* **bugfix/[bug编号]** 问题修复分支：从dev分支创建，用于修改测试提出的bug，斜杠后跟bug编号
  
  说明：修复以后，在远程发起向dev分支的合并请求，并指定提交者自身（或其他人）作为CodeReview，合并以后删除该分支

* **refactor/[重构名称]** 重构分支：从dev分支创建，用于代码的重大规模重构（小规模重构创建feature分支即可）
  
  说明：重构以后，必须经过严格测试通过，才能向dev分支合并。

* **hotfix-[问题名称 | bug编号]** 紧急热修复分支：从master分支创建，横线后面跟上问题名称或者对应的bug编号，仅仅适用于生产线问题紧急修复！
  
  说明：修复完成，测试通过，合并到master和dev分支上，然后将此分支删除

## Commit提交规约

``` xml
<type>(<scope>): <subject> #header
// 空一行
<body>
// 空一行
<footer>
```
Header部分只有一行，包括三个字段：`type`（必需）、`scope`（可选）和`subject`（必需）。`<body>`和`<footer>`可省略

如： "feat: 增加一个新功能"

type用于说明 commit 的提交性质

| 值 |  	描述 |
| ---- | :--------------------: | --------- | 
| feat	| 新增一个功能 |
| fix	| 修复一个Bug |
| update	| 更新某功能 |
| docs	| 文档变更 |
| style	| 代码格式（不影响功能，例如空格、分号等格式修正）|
| refactor	| 代码重构 |
| perf	| 改善性能 |
| test	| 测试 |
| build	| 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）|
| ci	| 更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等 |
| chore	| 变更构建流程或辅助工具 | 
| revert	| 代码回退 |


## git 操作规范
![git操作规范](../../assets/git_opt.png)

## 常用的git操作示例

假设现在当前需求为xxFunction，现在开始开发
```shell

# 新建分支：
git checkout dev      # 检出dev_version分支
git fetch origin dev         # 拉取远程仓库dev_version最新的代码
git checkout -b feature/xxFunction      # 基于dev_version 新建分支
git push origin feature/xxFunction      # 将新建的分支推送到远程仓库

# 开发过程：
git add .    # 将工作区的修改保存待提交。
git commit -m "type: 提交信息" # 将当前保存的修改整体作为一次commit进行提交，添加提交信息。此时本地的修改已经完成，等待推送到远程。

# 更新合并远程代码 ，如果commit在本地没有提交，使用rebase来合并其他代码，
git checkout dev    # 切换到当前版本分支
git pull    # 拉取远程代码
git checkout feature/xxFunction    # 切换到当前工作分支
git rebase dev    # 合并dev上的代码到当前工作分支

# rebase过程中可能出现冲突，需要手动修改代码来处理冲突，处理完成后：
git add .
git rebase —continue

# 如果处理冲突出错需要退出合并：
git rebase —abort

# 如果本地的commit已经push到远程，采用merge方式来合并其他分支的代码
git merge dev

# merge中产生冲突，先add 再commit 用一次commit来处理合并冲突

# 合并完成后，本地代码目前是包含了主分支代码及自己的开发代码，推送到远程
git push origin feature/xxFunction

# 然后在gitLab上提交一个合并请求，表明当前需求你的开发工作已经完成，想要合并入当前版本主分支:

# Source branch 选择你当前开发的分支 Target branch 选择你想要合入的分支 提交审核后，可以直接在gitLab页面上选择合并，一般来说之前处理过冲突的话，这里合并不会再产生冲突了

# 开发合并完成后，删除当前分支：
git checkout master   # 切换到其他分支，在当前分支时不能删除自身
git branch -d testBranch       # 删除本地分支
git push --delete origin testBranch     # 删除远程分支
```