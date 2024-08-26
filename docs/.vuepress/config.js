const path = require("path");
const guideRoute = require("./guide-route");
const projectRoute = require("./project-route");
const monitorRoute = require("./monitor-route");
const sourceRoute = require("./source-route");
const rustRoute = require("./rust-route");
const advancedRoute = require("./advanced-route");

module.exports = {
  title: "前端工程化详解",
  description:
    "前端工程化详解;开箱即用的前端工程化方案;前端代码规范;使用过程中如碰到问题，请到Github进行提问。 https://github.com/CrayonPig/front-end-guide",
  dest: "./dist/",
  markdown: {
    lineNumbers: true,
    plugins: ['task-lists']
  },
  plugins: [['vuepress-plugin-code-copy', {
    backgroundTransition: false,
    successText: '复制成功！'
  }]],
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, "../../assets"),
        '@docs': path.resolve(__dirname, "../../docs"),
      },
    },
  },
  extraWatchFiles: [
    '.vuepress/*.js',
  ],
  themeConfig: {
    nav: [
      { text: "工程化入门", link: "/project/" },
      {
        text: "工程化进阶",
        items: [
          { text: 'esbuild', link: '/advanced/esbuild/' },
        ]
      },
      { text: "代码规范", link: "/guide/" },
      { text: '源码分析', link: "https://origin.duanhl.com/" },
      { text: "前端监控系统", link: "/monitor/" },
      // { text: "Rust学习指南", link: "/rust/guide/" },
      { text: "GitHub", link: "https://github.com/CrayonPig/front-end-guide" },
    ],
    sidebar: {
      ...guideRoute,
      ...projectRoute,
      ...monitorRoute,
      ...sourceRoute,
      ...advancedRoute,
      // ...rustRoute
    },
  },
};
