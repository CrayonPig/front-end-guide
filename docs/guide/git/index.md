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


## Commit提交

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
