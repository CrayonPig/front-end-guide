module.exports = {
  '/rust/': [
    {
      title: '入门',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/rust/guide/',
        '/rust/guide/why',
        '/rust/guide/install',
        '/rust/guide/ide',
        '/rust/guide/hello',
        '/rust/guide/helloProject',
      ]
    },
    {
      title: '数据类型',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 2,    // 可选的, 默认值是 1
      children: [
        '/rust/dataType/',
        '/rust/dataType/variable',
        '/rust/dataType/int',
        '/rust/dataType/float',
      ]
    }
  ]
}