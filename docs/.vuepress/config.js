module.exports = {
  title: '前端开发规范',
  description: '针对中小厂提供开箱即用的前端规范;欢迎使用前端代码规范，使用过程中如碰到问题，请到Github进行提问。 https://github.com/CrayonPig/front-end-guide',
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
      {
        title: '框架',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/frame/component-name',
          '/frame/vue',
          '/frame/react',
        ]
      },
      {
        title: '工具',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/utils/package-management',
        ]
        
      }
    ]
  }
}