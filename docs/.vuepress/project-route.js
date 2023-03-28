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
      collapsable: false, 
      children: [
        '/project/develop/module',
        '/project/develop/guide',
        '/project/develop/lint',
        '/project/develop/debug',
        '/project/develop/cli',
      ]
    },
    {
      title: '构建',
      collapsable: false, 
      children: [
        '/project/build/build',
        '/project/build/ast',
      ]
    },
    {
      title: '测试',
      collapsable: false, 
      children: [
        '/project/test/unit',
      ]
    },
    {
      title: '部署',
      collapsable: false, 
      children: [
        '/project/deploy/',
        '/project/deploy/basic',
      ]
    },
  ],
}