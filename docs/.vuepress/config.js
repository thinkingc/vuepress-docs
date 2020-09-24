const sidebar = {
  js: [{
    title: '基础',
    collapsable: false,
    children: [
      '/js/',
    ]
  }],
  vue: [{
    title: '面试题',
    collapsable: false,
    children: [
      '/vue/',
      '/vue/vue-set-theory'
    ]
  }],
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Front-End Document',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '前端学习资料整理',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: 'https://v1.vuepress.vuejs.org/hero.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/thinkingc/vuepress-docs.git',
    editLinks: true,
    docsDir: 'docs',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/thinkingc/vuepress-docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/js/' },
          { text: 'TypeScript', link: '/ts/' }
        ]
      },
      {
        text: '前端框架',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'React', link: '/react/' }
        ]
      },
      {
        text: '算法与数据结构',
        ariaLabel: 'Language Menu',
        items: [
          { text: '算法', link: '/arithmetic/' },
          { text: '数据结构', link: '/data-structure/' }
        ]
      },
      {
        text: '设计模式',
        link: '/design/',
        ariaLabel: 'Language Menu',
      },
      {
        text: '网络',
        link: '/network/',
      },
      {
        text: 'Linux',
        link: '/linux/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/js/': sidebar.js,
      '/ts/': sidebar.js,
      '/vue/': sidebar.vue,
      '/react/': sidebar.react,
    }
  },

  smoothScroll: true,

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/last-updated',
  ]
}
