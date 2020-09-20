const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Thinkingc',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '前端基础',
        link: '/base/',
        items: [
          { text: 'HTML', link: '/base/html/' },
          { text: 'CSS', link: '/base/css/' },
          { text: 'JavaScript', link: '/base/js/' },
          { text: 'TypeScript', link: '/base/ts/' }
        ]
      },
      {
        text: '前端框架',
        link: '/frame/',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Vue', link: '/frame/vue/' },
          { text: 'React', link: '/frame/react/' }
        ]
      },
      {
        text: '算法与数据结构',
        link: '/arithmetic/',
        ariaLabel: 'Language Menu',
        items: [
          { text: '算法', link: '/arithmetic/arithmetic/' },
          { text: '数据结构', link: '/arithmetic/japanese/' }
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
    sidebar: {
      '/base/': [
        {
          title: 'base',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
