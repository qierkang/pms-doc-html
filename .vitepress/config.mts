import {defineConfig} from 'vitepress';
import './hello.js'

/**
 * 配置VitePress应用的参数
 *
 * @returns {object} VitePress配置对象
 * @author xyqierkang@163.com
 */

export default defineConfig({
    title: 'PMS用户帮助文档',
    description: '南京中造软件有限公司｜开箱即用的数据建模平台',
    srcDir: './docs',
    appearance: 'dark', // 默认配置，可以切换
    base: '/pms-doc-html/', // 发布到GitPage
    // base: '/pms-doc-html/.vitepress/dist/', // 发布本地访问静态地址
    server: {
        host: '0.0.0.0', // 绑定到所有网络接口
        port: 5173,// 监听的端口
    },
    themeConfig: {
        search: {
            provider: 'local',
        },
        logo: '/images/logo-circle.svg',
        footer: {
            message: '© 2024 南京中造软件有限公司',
            copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023031871号</a>',
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
                link: '/基础设置/首页.md',
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
                    {
                        text: '品质管理',
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
    vite: {
        plugins: [
            {
                name: 'PMS帮助文档',
                transform(code, id) {
                    if (id.includes('.vitepress/dist/client/app/data.js')) {
                        return code.replace(
                            'const dataSymbol = Symbol();',
                            'const dataSymbol = "__vitepress_data__";'
                        )
                    }
                }
            },
        ]
    },
});
