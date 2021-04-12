module.exports = {
  title: 'wiki-前端开发文档',
  description: 'wiki-前端开发文档',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  dest: './dist',
  base: '/',
  markdown: {
    lineNumbers: false
  },
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: '0.x',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '开发文档',
            link: '/api/',
          },
        ],
        sidebar: {
          '/api/': genSidebarConfig('开发文档')
        }
      },
    }
  },
  themeConfig: {
    nav: [
      { text: '前端基础', link: '/guide/' },
      { text: 'JS', link: '/js/' },
    ],
    sidebar: {
      '/': [
        '',
      ],
      '/guide': [
        '',
      ],
      '/js': [
        '',
      ],
    },
    sidebar: 'auto',
    sidebarDepth: 2,
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'guide',
      ]
    }
  ]
}