//const math = require('remark-math');
//const katex = require('rehype-katex');

module.exports = {
  title: "LMZ's Site",              // 站点名称
  tagline: 'Learning notes',  // 站点描述
  url: "https://wiki-docusaurus-orpin.vercel.app/docs/",
  baseUrl: '/',                         // 项目的基本 URL 设置为 /仓库名/
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',           // 站点的图标
  
  hideableSidebar: false,

    navbar: {                           //导航栏
      title: "Lmz's Site",                 // 名称
      hideOnScroll: false,
      items: [
       /* {
          to: "docs/home",                  // 要跳转的页面
          label: "wiki",               // 按钮名称
          position: "left",              // 按钮位于左边还是右边
        },*/
        {
          href: 'https://github.com/rcxxx/docusaurus-template',  // 如果要跳转链接则使用 herf
          label: '本站源码',
          position: 'left',
        },
      ],
    },
  
    /*  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/gh/linyuxuanlin/Wiki_Docusaurus/static/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],*/
    
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "./docs",
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",      // 这里将 docs/ 设置为首页
          //sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: "https://github.com/powerLMZ/wiki_Docusaurus/edit/main/",
          //remarkPlugins: [math],
          //rehypePlugins: [katex],
        },
        blog: {
          
          blogSidebarCount: 8,
          postsPerPage: 8,
          showReadingTime: false,
          path: "./blog",
          blogSidebarTitle: 'Recent',
          editUrl: "https://github.com/powerLMZ/wiki_Docusaurus/edit/main/",

        },
        
        theme: {
          //customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
