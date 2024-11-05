import {defineConfig} from 'vitepress';
import imageFigures from 'markdown-it-image-figures'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: 'pms-doc-html',
    description: '性能优异、开箱即用的数据建模',
    srcDir: './docs',
    appearance: 'dark', // 默认配置，可以切换
    base: '/pms-doc-html/.vitepress/dist/index.html/',
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
        // sidebar: [
        //     {
        //         text: '指南',
        //         items: [
        //             {text: '介绍', link: '/guide/compare.md'},
        //             {text: '快速开始', link: '/guide/start.md'},
        //             {text: '更新日志', link: '/guide/changelog.md'},
        //         ],
        //     },
        //     {
        //         text: 'API及示例',
        //         items: [
        //         ],
        //     },
        // ],
    },
    // locales: {
    //     root: {
    //         label: '简体中文',
    //         lang: 'zh',
    //     },
    // },
    markdown: {
        // Adding a markup-it plugin
        config: md => {
            const _super = md.renderer.rules.image
            md.renderer.rules.image = function (tokens, idx, options, env, self) {
                if (tokens[idx].attrs[2]) {
                    const title = tokens[idx].attrs[2][1]
                    const src = tokens[idx].attrs[0][1]
                    const alt = tokens[idx].content
                    return `
                    <figure>
                        <img src="${src}" alt="${alt}" title="${title}" />
                        <figcaption align="center">
                            <small style="opacity: 0.8">${title}</small>
                        </figcaption>
                    </figure>`
                }
                return _super(tokens, idx, options, env, self)
            }
        }
    },
});
