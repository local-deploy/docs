// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Deploy Local',
    tagline: 'Site deployment assistant locally',
    url: 'https://local-deploy.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'local-deploy',
    projectName: 'local-deploy.github.io',
    deploymentBranch: 'master',
    trailingSlash: false,

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl: 'https://github.com/local-deploy/docs/edit/master/',
                    admonitions: {},
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Deploy Local',
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'left',
                    },
                    {
                        href: 'https://pay.cloudtips.ru/p/ef395fb0',
                        position: 'right',
                        label: 'Sponsor',
                        className: 'sponsorship-link',
                    },
                    {
                        href: 'https://github.com/local-deploy/dl',
                        position: 'right',
                        label: 'Github',
                        className: 'github-link',
                    }
                ],
            },
            footer: {
                style: 'dark',
                // links:     [
                //     {
                //         title: '',
                //         items: [
                //             {
                //                 label: '',
                //                 to:    '',
                //             },
                //         ],
                //     }
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Varrcan`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['apacheconf', 'docker', 'editorconfig', 'php', 'nginx', 'regex'],
            },
            colorMode: {
                defaultMode: 'dark',
            },
        }),
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    plugins: [
        [
            '@docusaurus/plugin-sitemap',
            {
                changefreq: 'weekly',
                priority: 0.5,
                id: 'en',
            },
        ],
        [
            '@docusaurus/plugin-sitemap',
            {
                changefreq: 'weekly',
                priority: 0.5,
                id: 'ru',
            },
        ],
        [
            'docusaurus-plugin-yandex-metrica',
            {
                counterID: '90991055',
                webvisor: true,
            },
        ],
        [
            'docusaurus-lunr-search',
            {
                languages: ['en', 'ru']
            }
        ]
    ],
};

module.exports = config;
