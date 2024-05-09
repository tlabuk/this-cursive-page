// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'This.cursive | Expert technical writing',
  tagline: 'Discourse rules all',
  favicon: 'img/favicon.ico',
  url: 'https://tlabuk.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/this-cursive-page/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'labtom', // Usually your GitHub org/user name.
  projectName: 'this-cursive-page', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/index.yaml',
            route: '/api',
          },
        ],
        theme: {
          primaryColor: '#fff',
        },
      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Site logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          style: { paddingRight: '25px' },
          width: '200px'
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            activeBaseRegex: '^/this-cursive-page/$',
          },
          {
            to: '/about/bio',
            label: 'About me',
            position: 'left',
          },
          {
            to: '/this-cursive-page/api/',
            label: 'Dummy docs',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: '/',
              },
              {
                label: 'Discord',
                href: '/',
              },
              {
                label: 'Twitter',
                href: '/',
              },
            ],
          },
          {
            title: 'Other places',
            items: [
              {
                html:
                  `
                    <a href="https://www.linkedin.com/in/tomasz-labuk/" target="_blank" rel="noreferrer noopener">
                      <img src="img/footer/linkedin-icon.svg" alt="Deploys by Netlify" width="20" height="20" />
                    </a>
                  `
              },
              {
                html:
                  `
                  <a href="https://independent.academia.edu/TomaszLabuk" target="_blank" rel="noreferrer noopener">
                    <img src="img/footer/academia-logo.svg" width="20" height="20">
                  </a>
                `
              },
              {
                html:
                  `
                  <a href="https://github.com/tlabuk" target="_blank" rel="noreferrer noopener">
                    <img src="img/footer/github-icon.svg" width="20" height="20">
                  </a>
                `
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} this.cursive | labtom.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: ['docusaurus-plugin-sass'],
};

export default config;
