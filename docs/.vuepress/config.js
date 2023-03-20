const path = require("path");
const guideRoute = require("./guide-route");
const projectRoute = require("./project-route");

module.exports = {
  title: "前端工程化方案",
  description:
    "开箱即用的前端工程化方案;前端代码规范;使用过程中如碰到问题，请到Github进行提问。 https://github.com/CrayonPig/front-end-guide",
  dest: "./dist/",
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, "../../assets"),
      },
    },
  },
  extraWatchFiles: [
    '.vuepress/guide-route.js',
    '.vuepress/project-route.js'
  ],
  themeConfig: {
    nav: [
      { text: "工程化方案", link: "/project/" },
      { text: "代码规范", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/CrayonPig/front-end-guide" },
    ],
    sidebar: {
      ...guideRoute,
      ...projectRoute,
    },
  },
};
