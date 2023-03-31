module.exports = {
  '/guide/': [
    '/guide/',
    {
      title: 'HTML代码规范',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/html/',
        '/guide/html/write',
        '/guide/html/annotation',
      ]
    },
    {
      title: 'CSS规范',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/css/',
        '/guide/css/name',
        '/guide/css/write',
        '/guide/css/reset',
      ]
    },
    {
      title: '静态资源',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/static/',
        '/guide/static/icon',
      ]
    },
    {
      title: 'Git规范',   // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/git/',
        '/guide/git/options'
      ]
    },
    {
      title: 'JS规范',   // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/js/',
        '/guide/js/name',
        '/guide/js/more',
        '/guide/js/difference',
      ]
    },
    {
      title: '框架',   // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/frame/component-name',
        '/guide/frame/vue',
        '/guide/frame/react',
      ]
    },
    {
      title: '工具',   // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/guide/utils/package-management',
      ]
      
    }
  ]
}