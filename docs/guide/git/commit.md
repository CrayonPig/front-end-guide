# Commit提交规约

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
