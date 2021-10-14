module.exports = {
  title: "LMZ's Site",              // 站点名称
  tagline: 'Learning notes',  // 站点描述
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',           // 站点的图标
  
  url: 'https://your-docusaurus-test-site.com', // GitHub 页面的 URL
  baseUrl: '/',                         // 项目的基本 URL 设置为 /仓库名/
  //organizationName: '',            // 设置为 Github 用户名
  //projectName: '',   // 设置为 Github 仓库名
  
  
  themeConfig: {

    // 配置搜索栏需要到 algolia 配置
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section bellow
    //   contextualSearch: true,

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    // 导航栏配置
    navbar: {
      title: "Lmz's Site",                 // 名称
      hideOnScroll: false,
      // 设置logo 如果需要可以取消注释  logo文件推荐转为 .svg 格式
      // logo: {
      //   alt: 'My Site Logo',            
      //   src: 'img/logo.svg',
      // },
      
      // 导航栏上的按钮  按照相应的格式可以创建新的按钮
      items: [
        {
          to: "docs/",                   // 要跳转的页面
          label: '博客',                // 按钮名称
          position: 'left'              // 按钮位于左边还是右边
        },
        
    //    {
    //     to: 'docs/',
    //      activeBasePath: 'docs',
    //      label: 'Docs',
    //      position: 'left',
    //    },
        
        {
          href: 'https://github.com/rcxxx/docusaurus-template',  // 如果要跳转链接则使用 herf
          label: '本站源码',
          position: 'right',
        },
      ],
    },

    // 页脚配置
    footer: {
      style: 'dark',                    // 页脚风格
      links: [

        // 同样的方式创建一个分类
        {
          title: 'Docs',
          // 同样的格式创建新的按钮
          items: [
            {
              label: 'start',           // 标签
              to: 'docs/',              // 要跳转的页面
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: "https://github.com/powerLMZ/wiki_Docusaurus/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          path: "./blog",
          routeBasePath: "/",           // 这里将 blog/ 设置为首页
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
          // 修改为自己的链接，在文章底部添加编辑此页面的链接
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
