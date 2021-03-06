// 定义每一篇文章的 url，children值和文件路径对应。
const sidebar = {
  js: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/js/',
      ]
    },
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/js/interview/is-array',
        '/js/interview/js-coding'
      ]
    }
  ],
  ts: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/ts/',
      ]
    },
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/ts/interview/interface-type',
      ]
    }
  ],
  vue: [
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/vue/',
        '/vue/interview-2021',
        '/vue/vue-set'
      ]
    }
  ],
  react: [
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/react/',
        '/react/react17-changelog',
      ]
    }
  ],
  npm: [
    {
      title: 'ast',
      collapsable: true,
      children: [
        '/npm/ast/babel',
        '/npm/ast/jscodeshift',
        '/npm/ast/recast',
      ]
    },
    {
      title: 'node',
      collapsable: true,
      children: [
        '/npm/node/dotenv',
        '/npm/node/chalk',
        '/npm/node/log-symbols',
        '/npm/node/yargs',
        '/npm/node/yargs-parser',
        '/npm/node/glob',
        '/npm/node/globby',
        '/npm/node/ora',
        '/npm/node/inquirer',
        '/npm/node/commander',
        '/npm/node/shell',
        '/npm/node/download-git-repo',
        '/npm/node/mkdirp',
        '/npm/node/execa',
        '/npm/node/semver',
        '/npm/node/address',
        '/npm/node/np',
      ]
    },
    {
      title: 'util',
      collapsable: true,
      children: [
        '/npm/util/lerna',
        '/npm/util/mustache',
      ]
    },
  ],
  arithmetic: [
    {
      title: '前端算法题库',
      collapsable: false,
      children: [
        '/arithmetic/',
        '/arithmetic/fe/is-reverse-string',
        '/arithmetic/fe/fibonacci',
      ]
    }
  ],
  network: [
    {
      title: '面试题',
      collapsable: false,
      children: [
        '/network/',
        '/network/sso'
      ]
    }
  ]
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
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
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
          { text: 'React', link: '/react/' },
          { text: 'npm', link: '/npm/' },
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
        text: '网络和浏览器',
        link: '/network/',
      },
      // {
      //   text: '浏览器',
      //   link: '/browser/',
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    sidebarDepth: 2,
    // 定义侧边栏入口
    sidebar: {
      collapsable: false,
      '/js/': sidebar.js,
      '/ts/': sidebar.ts,
      '/vue/': sidebar.vue,
      '/react/': sidebar.react,
      '/npm/': sidebar.npm,
      '/arithmetic/': sidebar.arithmetic,
      '/network/': sidebar.network
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
