# 版本控制

前端开发中，最常用的版本控制工具是Git。Git是一种分布式版本控制系统，具有快速、高效、可靠、灵活等优点。它可以轻松地处理分支和合并，支持多种协作模式，包括个人开发、团队开发以及开源开发。

在前端开发中，Git可以用于管理代码库、网站内容、文档和资源文件等。许多前端框架和工具，如React、Vue、Angular等，也使用Git进行版本控制。

除了Git之外，还有一些其他版本控制工具可供选择，如SVN、Mercurial等。但是由于Git已成为前端开发社区的事实标准，因此我推荐前端开发人员使用Git进行版本控制。

## 常用命令

git 命令有很多，但我们工作中经常用到的并不多，以下是我们常用的一些命令:

```bash
git init # 初始化一个Git 项目目录
git clone <url> # 克隆一个远程仓库到本地
git status #查看变动的文件
git log #查看提交历史
git add -A # 将变动添加到暂存区
git commit -m 'message' #提交变动
git pull #拉取远程代码
git push #推送代码到远端
git branch #列出所有本地分支
git branch -r # 列出所有远程分支
git branch -a # 列出所有分支
git merge develop # 将 develop 分支合并到当前分支
git branch <name> # 新建一个新分支 但仍在当前分支
git checkout -b <name> # 新建一个新分支并切换到该分支
git checkout <branch-name> # 切换分支
git branch -m <new-name> # 重命名当前分支
git branch -d <branch-name> # 删除指定分支
git rm <file-name> # 将文件从暂存区和工作区中删除
git stash save <message> #将更改存储暂存
git stash list # 查看暂存区
git stash pop <stash@{id}>  # 取回暂存区代码 执行后将对应的stash id 从stash list里删除
git stash apply <stash@{id}> # 取回暂存区代码 stash id 继续保留
git diff <branch-A>..<branch-B> # 查看A中有而B没有的
git rebase <branch-name> # 合并/删除提交
git cherry-pick <commit> # 将指定的提交提取到当前分支
git config --list # 显示当前Git配置
git tag <tag> # 基于当前 commit 新建一个 tag
```

## git规范

具体规范已单独整理，请点击查看[git规范](/guide/git/)，包含如下内容

- 分支管理
- commit提交规范
- Git Flow规范
