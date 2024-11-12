# 搭建Vue项目

在之前的项目基础上，我们增加一些调整便可以支持 `Vue` 项目

## 安装 `Vue` 相关依赖

```bash
pnpm add vue
pnpm add @vitejs/plugin-vue -D
```

## 修改入口文件

修改入口文件 `src/main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

## 增加 `App.vue` 文件

```vue
<template>
  <div>
    Vue3
  </div>
</template>

<script setup lang="ts">
// ----------------传入属性-----------------------
// ----------------内部属性-----------------------
// ----------------调用方法-----------------------
// ----------------计算属性-----------------------
// ----------------监听方法-----------------------
// ----------------生命周期-----------------------
</script>

<style scoped lang="scss">

</style>
```

## 修改 `vite.config.ts` 配置文件

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 配置选项
  plugins: [vue()],
})
```

## 启动项目

完成上述操作后，我们使用命令 `npm run dev` 就可以在浏览器中看到我们想要渲染的页面啦