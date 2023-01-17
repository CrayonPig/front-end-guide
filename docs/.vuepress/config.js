module.exports = {
  title: '前端开发规范',
  description: '欢迎使用前端代码规范，使用过程中如碰到问题，请到Github进行提问。 https://github.com/CrayonPig/front-end-guide',
  dest: './dist/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/CrayonPig/front-end-guide' },
    ],
    sidebar: [
      '/guide/',
      {
        title: 'HTML代码规范',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/html/',
          '/html/write',
          '/html/annotation',
        ]
      },
      {
        title: 'CSS规范',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/',
          '/css/name',
          '/css/write',
          '/css/reset',
        ]
      },
      {
        title: '静态资源',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/static/',
          '/static/icon',
        ]
      },
      {
        title: '命名规范',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/guide/component-name',
          '/name/js-name'
        ]
      },
      {
        title: 'Git规范',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/git/',
          '/git/commit',
          '/git/options'
        ]
      },
      {
        title: 'JS规范',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/js/',
          '/js/name',
          '/js/more',
          '/js/difference',
        ]
      },
    ]
  }
}