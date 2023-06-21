module.exports = {
  '/originCode/': [
    '/originCode/vue2/',
    {
      title: '前期准备',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        '/originCode/vue2/prepare/directory',
        '/originCode/vue2/prepare/version',
        '/originCode/vue2/prepare/build',
        '/originCode/vue2/prepare/entry',
      ]
    },
    {
      title: '生命周期',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        '/originCode/vue2/lifecycle/',
        '/originCode/vue2/lifecycle/newVue',
      ]
    },
  ]
}