module.exports = {
  '/project/': [
    '/project/',
    {
      title: '项目立项',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        '/project/setUp/flow',
        '/project/setUp/documents',
        '/project/setUp/selection',
        '/project/setUp/standard',
      ]
    },
    {
      title: '代码质量',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        '/project/codeQuality/guide',
        '/project/codeQuality/lint',
        '/project/codeQuality/ts',
        '/project/codeQuality/version',
        '/project/codeQuality/codeReview',
      ]
    },
    {
      title: '工程搭建',
      collapsable: false, 
      children: [
        '/project/build/build',
        '/project/build/cli',
        '/project/build/ast',
        '/project/build/debug',
      ]
    },
    {
      title: '组件建设',
      collapsable: false, 
      children: [
        '/project/component/module',
        '/project/component/guide',
      ]
    },
    {
      title: '测试保障',
      collapsable: false, 
      children: [
        '/project/test/unit',
        '/project/test/integration',
        '/project/test/e2e',
        // '/project/test/analysis',
      ]
    },
    {
      title: 'CI/CD',
      collapsable: false, 
      children: [
        '/project/deploy/',
        '/project/deploy/basic',
        '/project/deploy/container',
        '/project/deploy/githubActions',
        '/project/deploy/gitlabCI',
        '/project/deploy/mode',
      ]
    },
    {
      title: '整体优化',
      collapsable: false,
      children: [
        '/project/optimize/build',
        '/project/optimize/volume',
        '/project/optimize/performance'
      ]
    },
    {
      title: '安全保障',
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/project/security/attack',
        '/project/security/resource',
      ]
    },
    {
      title: '页面监控',
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '/project/monitor/performance',
        '/project/monitor/error',
        '/project/monitor/blankScreen',
        '/project/monitor/jank',
        '/project/monitor/behaviour',
        '/project/monitor/report',
        '/project/monitor/sentry',
      ]
    },
    {
      title: '跨平台开发',
      collapsable: false,
      children: [
        '/project/hybrid/',
        '/project/hybrid/web',
        '/project/hybrid/native',
        '/project/hybrid/canvas',
        '/project/hybrid/miniProgram',
      ]
    },
  ],
}