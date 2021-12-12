// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title:                 'Deploy Local',
    tagline:               'Site deployment assistant locally',
    url:                   'https://dl.varme.pw',
    baseUrl:               '/',
    onBrokenLinks:         'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon:               'img/favicon.ico',
    organizationName:      'local-deploy',
    projectName:           'dl',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs:  {
                    sidebarPath:   require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl:       'https://github.com/local-deploy/docs/edit/master/',
                    admonitions:   {},
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
                        type:     'doc',
                        docId:    'intro',
                        position: 'left',
                        label:    'Docs',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href:     'https://github.com/local-deploy/dl',
                        label:    'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style:     'dark',
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
            prism:  {
                theme:     lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['apacheconf', 'docker', 'editorconfig', 'php', 'nginx', 'regex'],
            },
             colorMode: {
                 defaultMode: 'dark',
             },
        }),
};

module.exports = config;
