const nav = require("./nav.js");
module.exports = {
    title: '北城code',
    description: 'Just playing around',
    // theme:'reco',
    locales:{
        '/':{
            lang:'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/assets/img/BC.jpg',
        nav,
        sidebar: 'auto',
        subSidebar:'auto',
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
          }
    },
    plugins:[
        // 插件的配置
        ['@vuepress/back-to-top'],
        ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
            theme: ["z16"],
            clean: false,
            info: 'https://github.com/mengqiuleo',
            messages: {
              welcome: '',
              home: '心里的花，我想要带你回家',
              theme: '好吧，希望你能喜欢我的其他小伙伴。',
              close: '再见哦'
            }
          }],
          ["vuepress-plugin-auto-sidebar", {}]
    ]
}