module.exports = {
  '/project/': [
    '/project/',
    {
      title: '立项',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        '/project/setUp/flow',
        '/project/setUp/documents',
        '/project/setUp/selection',
        '/project/setUp/standard',
      ]
    },
    {
      title: '开发',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        '/project/develop/module',
        '/project/develop/guide',
        '/project/develop/lint',
        '/project/develop/build',
      ]
    },
  ],
}