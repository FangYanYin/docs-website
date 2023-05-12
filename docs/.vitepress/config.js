import { defineConfig } from 'vitepress';

export default defineConfig({
    title: '文档站点',
    outDir: '../dist',
    description: '自定义的 description',
    lastUpdated: true,
    themeConfig: {
      outlineTitle: '目录',
      nav: [
        { text: 'Teacher', link: '/guide/what-is-vitepress', activeMatch: '/guide/what-is-vitepress' },
        {
          text: '相关链接',
          items: [
            { text: 'options-1', link: '/' },
            { text: 'options-2', link: 'http://www.baidu.com' }
          ]
        }
      ],
      sidebar: [
        {
          text: 'Teacher',
          items: [
            { text: 'Introduction', link: '/guide/what-is-vitepress' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
          collapsible: true,
          collapsed: true
        },
        {
          text: 'First Student',
          items: [
            {text: '深度学习', link: '/first/deeplearning'}
          ],
          collapsible: true,
          collapsed: true
        }
      ],
      docFooter: { prev: '上一篇', next: '下一篇' },
      lastUpdatedText: "最近更新时间",
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © SWU CIS LAB'
      }
    },
  });