module.exports = {
  title: 'vue-wiki',
  description: '我的个人网站',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  dest: './dist',
  base: './',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      { text: '前端基础', link: '/accumulate/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
  }
};