import { defineConfig } from 'vitepress';

export default defineConfig({
    themeConfig: {
      nav: [
        { text: 'Guide', link: '/guide', activeMatch: '/guide/what-is-vitepress' },
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
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/what-is-vitepress' },
            { text: 'Getting Started', link: '/getting-started' },
          ],
          collapsible: true,
          collapsed: true
        },
        {
          text: 'First',
          items: [
            {text: 'dl相关', link: '/first/deeplearning'}
          ],
          collapsible: true,
          collapsed: true
        }
      ],
    },
  });