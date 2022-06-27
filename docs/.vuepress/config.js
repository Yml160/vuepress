module.exports = {
    title: '北城watch',
    description: 'Just playing around',

    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/assets/img/BC.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/foo/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto',
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
          }]
    ]
}