module.exports = {
  '/project/': [
    '/project/',
    {
      title: '立项',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/project/setUp/flow',
        '/project/setUp/documents',
        '/project/setUp/selection',
      ]
    },
  ],
}