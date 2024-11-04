import {defineConfig} from 'vitepress';

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: 'pms-doc-html',
    description: '性能优异、转换准确的 js 中文转拼音工具',
    srcDir: './docs',
    appearance: 'dark', // 默认配置，可以切换
    // base: '.',
    server: {
        host: '0.0.0.0', // 绑定到所有网络接口
        port: 5173,       // 监听的端口
    },
    themeConfig: {
        search: {
            provider: 'local',
        },
        logo: '/images/logo-circle.svg',
        footer: {
            message:
                '<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023031871号</a>',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: '运营系统',
                link: 'http://www.zhgcraft.com',
            },
            {
                text: '测试系统',
                link: 'https://ceshib.zhgcraft-pms.com/login',
            },
        ],
        outline: {
            level: [2, 6],
        },

        sidebar: [
            {
                text: '指南',
                items: [
                    {text: '介绍', link: '/guide/compare.md'},
                    {text: '快速开始', link: '/guide/start.md'},
                    {text: '更新日志', link: '/guide/changelog.md'},
                ],
            },
            {
                text: 'API及示例',
                items: [
                    {text: 'pinyin: 拼音转换', link: '/use/pinyin.md'},
                    {text: 'segment: 分词', link: '/use/segment.md'},
                    {text: 'match: 拼音汉字匹配', link: '/use/match.md'},
                    {text: 'convert: 格式转换', link: '/use/convert.md'},
                    {text: 'customPinyin: 自定义拼音', link: '/use/customPinyin.md'},
                    {text: 'html: HTML字符串', link: '/use/html.md'},
                    {text: 'polyphonic: 全部读音', link: '/use/polyphonic.md'},
                    {text: 'addDict: 提高准确率', link: '/use/addDict.md'},
                    {text: 'others: 其他 API', link: '/use/others.md'},
                ],
            },
            {
                text: '更多',
                items: [{text: '交流', link: '/more/contact.md'}],
            },
        ],

        // socialLinks: [
        //     {
        //         icon: 'github',
        //         link: 'https://github.com/zh-lx/pinyin-pro',
        //     },
        // ],
    },
    // locales: {
    //     root: {
    //         label: '简体中文',
    //         lang: 'zh',
    //     },
    //     fr: {
    //         label: 'English',
    //         lang: 'en',
    //         link: 'https://pinyin-pro.cn/en', // default /fr/ -- shows on navbar translations menu, can be external
    //     },
    // },
});
