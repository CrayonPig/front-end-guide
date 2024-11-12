# 搭建React项目

在之前的项目基础上，我们增加一些调整便可以支持 `React` 项目

## 安装 `React` 相关依赖

```bash
pnpm add react react-dom
pnpm add @vitejs/plugin-react -D
```

## 修改入口文件

修改入口文件 `src/main.ts`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 增加 `App.tsx` 文件

```tsx
function App() {

  return (
    <h1>Vite + React</h1>
  )
}

export default App
```

## 修改 `vite.config.ts` 配置文件

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 配置选项
  plugins: [react()],
})
```

## 增加 TypeScript 定义

同比到 `Vue` 项目中，此时项目应该可以正常

```bash
pnpm add @types/react @types/react-dom -D
```

## 启动项目

完成上述操作后，我们使用命令 `npm run dev` 就可以在浏览器中看到我们想要渲染的页面啦