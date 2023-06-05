module.exports = {
  '/monitor/': [
    '/monitor/',
    {
      title: '架构设计',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/monitor/framework',
        '/monitor/framework-sdk',
        // '/monitor/framework-node',
      ]
    },
    {
      title: 'SDK开发',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/monitor/sdk/basics',
        '/monitor/sdk/init',
        '/monitor/sdk/optimize',
      ]
    }
  ]
}