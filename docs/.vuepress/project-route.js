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
      ]
    },
    {
      title: '测试保障',
      collapsable: false, 
      children: [
        '/project/test/unit',
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
  ],
}