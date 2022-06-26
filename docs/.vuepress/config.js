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
    }
}