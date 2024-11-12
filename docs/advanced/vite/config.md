# 配置文件

当我们使用命令行方式运行 `vite` 时，`Vite` 会自动解析 项目根目录 下名为 `vite.config.js` 的配置文件（也支持其他 JS 和 TS 扩展名）。

具体使用方式，[官网文档](https://cn.vitejs.dev/config/) 已经说的很详细了，这里说一些容易出错的问题

## TS 配置

在使用 TypeScript 编写 Vite 配置文件时，需要配置 `tsconfig.json` 文件以确保 TypeScript 编译器正确地编译代码。以下是一些常见的配置选项：

```json
// tsconfig.json
{
  "compilerOptions": {
    "isolatedModules": true, // 是否将每个文件作为独立的模块进行编译，主要用于兼容 esbuild，esbuild 只执行没有类型信息的转译且不支持某些特性。
    "skipLibCheck": true, // 当有些第三方库不能很好地兼容 “isolatedModules” 时，可使用这个属性来缓解错误。
    "moduleResolution": "bundler", // 指定使用打包工具提供的模块解析策略。
    "esModuleInterop": true, // 启用对使用 CommonJS 模块的库的默认导入的支持。
    "allowSyntheticDefaultImports": true, // 在没有默认导出的时候允许使用 “import x from y” 导入。
    "noEmit": true, // 是否生成输出文件。
    "allowImportingTsExtensions": true, // 是否允许 “.ts” 后缀文件的导入。
    "resolveJsonModule": true // 是否允许 JSON 文件作为模块。
  }
}
```

## TS 客户端类型
1. **一些客户端需要用到的变量声明。图片，文件等模块化声明**：在客户端代码中，可能需要声明一些变量来引用图片、文件等资源。可以使用 TypeScript 的模块化声明来确保类型安全。
2. **d.ts 声明文件**：
   - **三斜线注释**：`/// <reference types="vite/client" />` 用于在 TypeScript 文件中引用 Vite 客户端的类型定义。
   - **ts 配置**：在 `tsconfig.json` 文件中设置 `"types":["vite/client"]` 可以确保 TypeScript 编译器正确地识别 Vite 客户端的类型定义。

```typescript
// client.d.ts
/// <reference types="vite/client" />

declare module '*.png' {
  const value: string;
  export default value;
}
```

## 环境变量与模式

1. **process.env**：在 Vite 配置文件中，可以使用 `process.env` 来访问环境变量。这些环境变量可以在不同的运行环境中设置，以控制应用的行为。

2. **添加额外的环境变量**：
   - `.env`：通用的环境变量文件，可以在任何环境中使用。
   - `.env.[model]`：特定模式下的环境变量文件，如 `.env.development` 用于开发模式。
   - `.env.local`：本地环境变量文件，通常用于本地开发，不会被提交到版本控制系统中。
   - `.env.[model].local`：特定模式下的本地环境变量文件。
3. **加载**：
   - Vite 默认是不加载 `.env` 文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个。
   - `loadEnv(mode: string, envDir: string, prefixes?: string | string[])`：用于加载特定模式下的环境变量文件。
    ```js
    import { defineConfig, loadEnv } from 'vite'

    export default defineConfig(({ command, mode }) => {
      // 根据当前工作目录中的 `mode` 加载 .env 文件
      // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
      const env = loadEnv(mode, process.cwd(), '')
      return {
        // vite 配置
        define: {
          __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
      }
    })
    ```
4. **模式**：
   - **开发服务器 --> development（开发）模式**：自动加载 `.env.development` 文件。
   - **build 命令 --> production（生产）模式**：自动加载 `.env.production` 文件。
   - **覆盖默认模式 --model（比如 --model test）**：需要加载 `.env.test` 文件。
5. **import.meta.env**：
   - **客户端暴露环境变量**：在客户端代码中，可以通过 `import.meta.env` 访问环境变量。以下是一些常见的环境变量：
     - `MODE: {string}`：应用运行的模式。
     - `BASE_URL: {string}`：部署应用时的基本 URL。它由 `base` 配置项决定。
     - `PROD: {boolean}`：应用是否运行在生产环境。
     - `DEV: {boolean}`：应用是否运行在开发环境。
     - `SSR: {boolean}`：应用是否运行在服务器上。
   - **默认以 VITE_ 为前缀的变量才会暴露**：可以通过设置 `envPrefix` 来指定自定义的前缀。
   - **TS 提示**：可以使用接口 `ImportMetaEnv` 和 `ImportMeta` 来提供类型提示。
