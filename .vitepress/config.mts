import {defineConfig} from 'vitepress';
import imageFigures from 'markdown-it-image-figures'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: 'pms-doc-html',
    description: '性能优异、开箱即用的数据建模',
    srcDir: './docs',
    appearance: 'dark', // 默认配置，可以切换
    base: '/pms-doc-html/', // gitPage
    // base: '/pms-doc-html/.vitepress/dist/', // 本地静态地址
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
        sidebar: [
            {
                text: '首页',
                link: '/基础设置/home.md',
                items: [
                    {
                        text: '基础设置',
                        collapsed: true,
                        items: [
                            {
                                text: '公司信息',
                                collapsed: true,
                                items: [
                                    {text: '人员信息', link: '/基础设置/公司信息/人员信息.md'},
                                    {text: '印章授权', link: '/基础设置/公司信息/印章授权.md'},
                                    {text: '基本资料', link: '/基础设置/公司信息/基本资料.md'},
                                    {text: '菜单设置', link: '/基础设置/公司信息/菜单设置.md'},
                                    {text: '部门岗位', link: '/基础设置/公司信息/部门岗位.md'},
                                ],
                            },
                            {
                                text: '流程权限管理',
                                link: '/基础设置/流程权限管理.md',
                            }
                        ]
                    },
                    {text: '品质管理',
                        collapsed: true,
                        items: [
                            {text: '设备分类', link: '/品质管理/质检设备分类.md'},
                        ],
                    },
                ],
            },
            // {
            //     text: 'API及示例',
            //     items: [
            //         {text: '官网设置', link: '/基础设置/process-management.md'},
            //     ],
            // },
        ],
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
