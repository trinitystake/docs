/* eslint-disable */

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

// const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const posthogPlugin = require('./plugins/posthog-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */ defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      //editUrl: 'https://github.com/sentinel-official/docs/tree/main/',
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('getting-started'),
  defineSection('sentinel-core'),
  defineSection('sentinel-cli'),
  defineSection('networks'),
  defineSection('tools'),
  defineSection('guides'),
  defineSection('node-setup'),
  defineSection('validator-setup'),
  defineSection('node-monitoring'),
  defineSection('apis'),
  defineSection('support'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sentinel Docs',
  tagline: 'Build on the leading decentralized VPN. 🚀',
  // TODO: Update base url
  url: 'https://docs.sentinel.co',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/logo/sentinel.svg',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sentinel-official', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/sentinel-official/docs/tree/main/',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    ...SECTIONS,
    // ...UIKitReferencePlugins,
    webpackPlugin,
    posthogPlugin,
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/sentinel-docs-card.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        title: 'SENTINEL DOCS',
        logo: {
          href: '/',
          src: '/logo/sentinel.svg',
          srcDark: '/logo/sentinel.svg',
          alt: 'Sentinel Docs',
          //height: '26px',
          //width: '114px',
        },
        items: [
          {
            label: 'Getting Started',
            to: 'getting-started/introduction',
            position: 'left',
          },
          {
            label: 'Develop',
            to: 'sentinel-core',
            position: 'left',
            // className: 'new-badge',
            //activeBaseRegex: '(.*ui-kit|.*web-core)',
          },
          {
            label: 'Networks',
            to: '/networks',
            position: 'left',
            // className: 'new-badge',
          },
          {
            label: 'Run a Node',
            to: 'node-setup',
            position: 'left',
          },
          {
            label: 'Validate',
            to: 'validator-setup',
            position: 'left',
          },
          {
            label: 'API Reference',
            to: 'apis',
            position: 'left',
          },
          {
            label: 'Support',
            to: 'support',
            position: 'left',
          },
          {
            label: 'Find us',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://github.com/sentinel-official',
                label: 'GitHub',
              },
              {
                href: 'https://x.com/sentinelvpn',
                label: 'X/Twitter',
              },
              {
                href: 'https://t.me/sentinel_co',
                label: 'Telegram',
              },
              {
                href: 'https://discord.com/invite/mmAA8qF',
                label: 'Discord',
              },
              {
                href: 'https://www.reddit.com/r/dVPN/',
                label: 'Reddit',
              },
              {
                href: 'https://commonwealth.im/sentinel/',
                label: 'Commonwealth',
              },
              {
                href: 'https://medium.com/@sentinel',
                label: 'Medium',
              },
            ],
          },
          {
            label: 'Sentinel',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://sentinel.co',
                label: 'Website',
              },
              {
                href: 'https://stats.sentinel.co',
                label: 'Stats',
              },
              {
                href: 'https://map.sentinel.co',
                label: 'Node Explorer',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: 'http://sentinel.co',
          src: '/logo/sentinel.svg',
          srcDark: '/logo/sentinel.svg',
          alt: 'Sentinel Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                href: 'getting-started',
              },
              {
                label: 'Developer Portal',
                href: 'sentinel-core',
              },
              {
                label: 'Networks',
                to: 'networks',
              },
              {
                label: 'Guides',
                href: 'guides',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'dVPN Apps',
                href: 'getting-started/apps',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sentinel-official',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@sentinel',
              },
              {
                label: 'Sentinel Website',
                href: 'https://sentinel.co',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/sentinelvpn',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/sentinel_co',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/mmAA8qF',
              },
              {
                label: 'Commonwealth',
                href: 'https://commonwealth.im/sentinel/',
              },
            ],
          },
        ],
        copyright: "Copyright © Sentinel dVPN since 2017 - Built by <a href='https://trinityvalidator.com'>Trinity Validator</a>. Maintained by <a href='https://x.com/CommunityStakin'>CommunityStaking Validator</a>",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      algolia: {
        // Algolia Application ID
        appId: '8LDAK2HFBK',
        // Algolia Search-Only API Key
        apiKey: 'c9d8f3352bff883ef5cec536ca8ba591',
        indexName: 'Docs',
        contextualSearch: true,
        searchParameters: {},
      },
      posthog: {
        apiKey: '00',
      },
    }),
    // Tally and Kapa.ai Scripts
    // scripts: [
    //   "https://tally.so/widgets/embed.js",
    //   {
    //     src: "https://widget.kapa.ai/kapa-widget.bundle.js",
    //     "data-website-id": "XXX-XXX-XXX",
    //     "data-project-name": "Sentinel",
    //     "data-project-color": "#HEX_COLOR_CODE",
    //     "data-project-logo": "https://LINK_TO_LOGO.com/logo.png",
    //     async: true,
    //   },
    // ],
  };

module.exports = config;
