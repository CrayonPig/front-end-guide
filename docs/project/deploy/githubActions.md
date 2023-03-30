# GitHub Actions

GitHub Actions是一个持续集成和持续交付的平台，它可以帮助你通过自动化的构建（包括编译、发布、自动化测试）来验证你的代码，从而尽快地发现集成错误。github于2019年11月后对该功能全面开放，现在所有的github用户可以直接使用该功能。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行您的工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

Github Action基本概念
- workflow: 一个 workflow 就是一个完整的工作流过程，每个workflow 包含一组 jobs任务。
- job : jobs任务包含一个或多个job ，每个 job包含一系列的 steps 步骤。
- step : 每个 step 步骤可以执行指令或者使用一个 action 动作。
- action : 每个 action 动作就是一个通用的基本单元


