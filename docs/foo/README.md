无障碍
写文章
登录/注册
手把手教你用vuepress搭建网站（3）
itclanCoder
itclanCoder
前端开发-coder.itclan.cn
1 人赞同了该文章
配置插件
有时候,我们想让我们的网站博客更加顺畅,用户体验更好,可以结合一些第三方的插件,开箱即用

配置内置的全局 UI,首先需要在当前项目下使用npm或者yarn安装插件

// 回到顶部插件,推荐使用yarn安装插件,它安装比npm更快,不熟悉的,可以去了解下yarn的,包管理工具
yarn add -D @vuepress/plugin-back-to-top
然后在,config.js 中进行配置

module.exports = {
  plugins: ['@vuepress/back-to-top']
}
警告

安装插件的版本需要与 vuepress 的版本保持一致,如果低版本的back-to-top,会出现不了,其他插件配置也是如此
凡是带有@开头的插件,都是官方维护的插件,需要与当前项目的 vuepress 版本保持一致
非@开头的插件,则是社区或者个人开发的插件,vuepress 版本每个一段时间,或许都会升级,以你自己的为准
// 在package.json中就可以看到安装过的一些插件版本情况
"devDependencies": {
    "@vuepress/plugin-back-to-top": "^1.5.0",
    "vuepress": "^1.5.0",
    "vuepress-plugin-auto-sidebar": "^1.4.1",
    "vuepress-plugin-img-lazy": "^1.0.3",
  }
可配置的插件选项
在vuepress提供的插件系统中,可以对插件进行一些额外的配置,进行控制,分别提供了Babel 式,对象式

module.exports = {
  plugins: [
         [
            "@vuepress/medium-zoom",
            {
              selector: ".medium-zoom", // 指定含有medium-zoom的类缩放,后面这个类名可自定义,markdown中的img的class类保持一致就可以了的,没有指明的图片类将不支持缩放
              delay: 1000, // 延迟1秒
              options: {
                margin: 24,
                scrollOffset: 0
              }
            }
        ],
        [
          "vuepress-plugin-auto-sidebar",
            {
              titleMode: "titlecase", // 标题模式
              collapsable: true,     // 设置为true,开启折叠
              // sidebarDepth: 0,    // 标题的深度
              collapseList: [
                // 折叠的路由列表
                // "/frontend/css/"
              ],
              uncollapseList: [
                // 不折叠的路由列表
              ]
            }
      ],

  ]
}
有时候,当你看到网上一些博客,配置的选项,五花八门,各有不一的,其实无外乎就两种,babel与对象式的,两种方式都可以,取决于你自己,不过我个人比较倾向于babel式风格的,因为每个插件都集中在一块配置,内聚性高,后续修改或者删除之类的也容易,不容易出错,保持插件时可插播式的,互不干扰

详细介绍可参考官方文档 https://www.vuepress.cn/plugin/using-a-plugin.html#%E6%8F%92%E4%BB%B6%E7%9A%84%E7%BC%A9%E5%86%99

支持-PWA
vuepress有一个比较好的优势, 就是它是支持 PWA,也是支持响应式的,无论是在pc端浏览还是在手机端浏览器浏览,显示都很友好,而当用户没有网的情况下,一样能继续的访问我们的网站

安装-pwa
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
在 config.js中进行配置:

module.exports = {
  plugins: [
     [
      '@vuepress/pwa', {
         serviceWorker: true,
         updatePopup: true
       }
     ]
  ]
}
注意

为了让你的网站完全地兼容 PWA，你需要提供 manifest文件和在头部head 进行引用:

在.vuepress/public 提供 Manifest 和 icons
在 .vuepress/config.js添加正确的 head links
在config.js的head配置项中

// 配置
module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
}
manifest.json文件

{
  "name": "itclanCoder",
  "short_name": "itclanCoder",
  "version": "1.0.0",
  "description": "itclanCoder,随笔川迹博主, itclanCoder的博客,川川的博客",
  "manifest_version": 2,
  "icons": [
    {
      "src": "/icons/apple-touch-icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#3eaf7c"
}
生成iconfont图标
Mainifest各个字段含义
配置评论插件
一个网站,莫过于内容的载体,令你三连击之外,有用户访问,并且能够与你进行互动,有反馈,才会有交流,添加评论,留言的功能也很重要

静态的留言系统有很多:例如

Disqus
畅言
LiveRe
GitTalk
vssue
valine
大家可以根据自己的喜好,选择一款自己适宜的评论系统的,其中vssue是官方推出的,也有专门的团队在维护,也很强大,支持多个平台

今天给大家介绍的是valine评论插件

插件 Valine
一款快速、简洁且高效的无后端评论系统
官方文档:valine
在使用 valine 之前,先前往leancloud 注册账号 然后创建应用, 获取APP ID和APP KEY


安装-vuepress-plugin-comment
yarn add -D  vuepress-plugin-comment
快速使用
在.vuepress下的config.js的plugin插件选项中进行配置

module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
  ]
}
其中appid和appkey为你创建的应用的APP ID 和APP Key，把刚才获取到的秘钥复制过来即可,经过配置之后


删除管理评论
在leancloud后台管理里,在存储中,支持删除评论操作

若有骚扰,或违反法律法规的评论,可以进行删除操作的,避免给自己带来不必要的麻烦


valine-样式的修改-适配
在您安装好valine后,会发现valine默认宽度是 100%的,很显然不满足我们的网站,无论是在 pc 端还是移动端,样式会出现问题

这时,需要我们对插件的样式进行修改:

在.vuepress/public/目录下创建styles文件夹,并创建index.styl与palette.styl两个文件,文件的名字是固定的

index.styl:将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级
palette.styl:用于重写默认颜色常量，或者设置新的 stylus 颜色常量
详细介绍可参考文档styling-index-palette介绍
打开 chrome 的控制台,审查元素,找到valine评论的 ID,在index.styl文件中,即可写入样式,进行更改,只要你想改主题中的样式,都可以通过这种方式,它会默认覆盖原有的样式

// .vuepress/public/styles/index.styl
#valine-vuepress-comment {
  max-width: 750px;
  margin: 0 auto;
}


#valine-vuepress-comment .vheader input[name="link"] {
  display: none;
}

#valine-vuepress-comment .vheader .vinput {
  width: 50%;
}
主题样式修改
vuepress默认是主题颜色是绿色, 如果你不喜欢可以对其进行更改. 如果要对默认设置的样式进行简单颜色替换, 或者自定义一些颜色变量供以后使用, 可以在.vuepress/styles中的palette.styl文件进行更改,这个文件是你手动创建的

你可以调整的颜色变量:

// 参考文档: https://vuepress.vuejs.org/zh/config/#patterns中 palette.styl配置
// 用于重写默认颜色常量，或者设置新的 stylus 颜色常量

// 颜色
$textColor ?= #2c3e50
$accentColor ?= #3eaf7c
$grayTextColor ?= #666
$lightTextColor ?= #999
$borderColor ?= #eaecef
$codeBgColor ?= #282c34
$arrowBgColor ?= #ccc
$navbarColor ?= #fff
$headerColor ?= #fff
$headerTitleColor ?= #fff
$nprogressColor ?= $accentColor

// 布局
$navbarHeight ?= 3.6rem
$bannerHeight ?= 12rem

// 响应式 breakpoints
$MQWide ?= 1440px
$MQNarrow ?= 1024px
$MQMobile ?= 768px
$MQMobileNarrow ?= 480px

// 修改meduiumZoomZindex的层级,默认是100
$mediumZoomZIndex = 10000
注意

你应该只在这个文件中写入颜色变量。因为 palette.styl 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制

另外一种方式修改样式
除了上面一种覆盖默认样式的方式,还有另外一种方式,你可以在.vuepress/public/目录下创建一个css文件,style.css 然后在config.js中的head配置属性中通过link的方式引入

module.exports = {
  head: [
    ["link", { rel: "stylesheet", href: "/css/style.css" }], // 这种方式也可以覆盖默认样式
  ]
}
注意

这个文件夹下覆盖的默认样式,优先级要大于,根目录下的 styles 中的 index.styl,相当于是行内样式>外部样式

移动端下禁止用户屏幕缩放
当你在手机浏览器端打开vuepress的网站时,你会发现你可以对屏幕进行放大和缩小,有时候,这并不是一个很好的操作 如何禁用？ 在.vuepress/public/目录下创建一个js文件夹,在这个js文件夹下创建一个disable-user-zoom.js,写一段js代码即可

window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};
然后在config.js的head头部引入即可,同时也引入meta移动端禁止用户缩放的标签,禁止用户对屏幕进行方法和缩小

module.exports = {
  head: [
    [
      "meta", // 移动端禁止用户缩放
      {
        name: "viewport",
        content:
          "width=device-width,width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }
    ],
    ["link", { rel: "stylesheet", href: "/css/style.css" }], //
    ["script", { charset: "utf-8", src: "/js/disable-user-zoom.js" }] // 移动端,禁止用户缩放,引入你写的js
  ]
}

自动生成侧边栏
有时候,你会发现,每次管理侧边栏,都需要手动去创建管理侧边栏的,虽然已经对 slidbar 以及 nav 做了拆分,但是依旧不完美,可以 借助vuepress-plugin-auto-sidebar,这个插件,自动去配置管理我们的侧边栏的

vuepress-plugin-auto-sidebar 仓库
vuepress-plugin-auto-sidebar 使用文档经过上面的操作,相信聪明的你,完成这个插件的使用,应该是不难了
一定要耐心的学着葫芦画瓢,如果让自己从零开始写,用vue,vue-router,webpack去写这么一个网站,还是多多少少有些复杂度的 目前,你只需知道怎么配置,怎么修改配置,能达到自己的效果就可以了的

发布于 2020-09-12 08:01
VuePress
网站开发
​赞同 1​
​添加评论
​分享
​喜欢
​收藏
​申请转载
​

赞同 1

​
分享
还没有评论
写下你的评论...



发布
推荐阅读
分分钟教会你搭建企业级的 npm 私有仓库
文章来源：分分钟教会你搭建企业级的 npm 私有仓库 - 政采云前端团队 (zoo.team)前言npm 作为一种包管理工具，无论你是泛前端还是大前端都已经离不开它。它的出现方便了万千少年。让我们跨…

穿山贾
深入浅出 npm & yarn & pnpm 包管理机制
深入浅出 npm & yarn & pnpm 包管理机制
Leecason
搭建自己的私有npm库
搭建自己的私有npm库
vivi chen
为什么我不使用 shrinkwrap（lock）
为什么我不使用 shrinkwrap（lock）
死马


选择语言
登录即可查看 超5亿 专业优质内容
超 5 千万创作者的优质提问、专业回答、深度文章和精彩视频尽在知乎。
立即登录/注册