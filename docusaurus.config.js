const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "LMZ's Site",              // 站点名称
  tagline: 'Learning notes',  // 站点描述
  url: "https://wiki-docusaurus-orpin.vercel.app/docs/",
  baseUrl: '/',                         // 项目的基本 URL 设置为 /仓库名/
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',           // 站点的图标
  //organizationName: '',            // 设置为 Github 用户名
  //projectName: '',   // 设置为 Github 仓库名
  
  
  themeConfig: {

    image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
    algolia: {
      apiKey: "5c07d8bf9c9928c4453857f6cad0420e",
      indexName: "power",
      contextualSearch: true,
      searchParameters: {},
    },
      colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,

      switchConfig: {
       
        darkIcon: '🌙',
        lightIcon: '🌞',

        darkIconStyle: {
          marginLeft: "2px",
        },

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    hideableSidebar: false,
    navbar: {                           //导航栏
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
          to: "docs/",                  // 要跳转的页面
          label: "wiki",               // 按钮名称
          position: "left",              // 按钮位于左边还是右边
        },
        {
          href: 'https://github.com/rcxxx/docusaurus-template',  // 如果要跳转链接则使用 herf
          label: '本站源码',
          position: 'left',
        },
      ],
    },

    // 页脚配置
    //footer: {
    //  style: 'dark',                    // 页脚风格
     // links: [

        // 同样的方式创建一个分类
     //   {
      //    title: 'Docs',
          // 同样的格式创建新的按钮
      //    items: [
       //     {
       //       label: 'start',           // 标签
       //       to: 'docs/',              // 要跳转的页面
       //     },
       //   ],
      //  },
     // ],
   //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
   // },
//  },
  
      stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/gh/linyuxuanlin/Wiki_Docusaurus/static/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
    
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "./docs",
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",      // 这里将 docs/ 设置为首页
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: "https://github.com/powerLMZ/wiki_Docusaurus/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          
          blogSidebarCount: 8,
          postsPerPage: 8,
          showReadingTime: false,
          path: "./blog",
          blogSidebarTitle: 'Recent',
          editUrl: "https://github.com/powerLMZ/wiki_Docusaurus/edit/main/",
         // routeBasePath: "/",           // 这里将 blog/ 设置为首页
        },
   /*     docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
          // 修改为自己的链接，在文章底部添加编辑此页面的链接
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
