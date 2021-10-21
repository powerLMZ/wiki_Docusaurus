module.exports = {
  title: "LMZ's Site",              // 站点名称
  tagline: 'Learning notes',  // 站点描述
  url: "https://wiki-docusaurus-orpin.vercel.app/docs/",
  baseUrl: '/',                         // 项目的基本 URL 设置为 /仓库名/
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',           // 站点的图标
  organizationName: 'lmz',
  projectName: 'lmz-docusaurus2',
  //onBrokenMarkdownLinks: 'warn',
  
themeConfig: {
  hideableSidebar: false,
    navbar: {                           //导航栏
      title: "Lmz's Site",                 // 名称
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},        
        {
          href: 'https://github.com/powerLMZ/wiki_Docusaurus',  // 如果要跳转链接则使用 herf
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  //My site的页脚
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/Home',
            },
            {
              label: '基本元器件-电阻',
              to: 'docs/基本元器件-电阻',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
       ], 
     },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "./docs",
          //sidebarCollapsible: true, 默认折叠
          routeBasePath: "/",      // 这里将 docs/ 设置为首页
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: "https://github.com/powerLMZ/wiki_Docusaurus/edit/main/",
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
         customCss: require.resolve('./src/css/custom.css'),
               },
      },
    ],
  ],
};
