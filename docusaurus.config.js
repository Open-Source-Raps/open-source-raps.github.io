// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenSourceRaps!',
  tagline: 'Learn to the beat for free!~',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://opensourceraps.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'open-source-raps', // Usually your GitHub org/user name.
  projectName: 'open-source-raps.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      image: 'img/opensourceraps.png',
      navbar: {
        title: 'Open Source Raps!',
        logo: {
          alt: 'Open Source Raps!',
          src: 'img/opensourceraps.png',
        },
        items: [
          {
            href: 'http://raps.opensourceraps.com',
            label: 'Code',
            position: 'right',
          },
          {
            href: 'http://music.opensourceraps.com',
            label: 'Music',
            position: 'right',
          },
          { 
            href: 'http://github.com/open-source-raps/open-source-raps.github.io',
            label: 'This Site\'s Code',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Rap Lessons',
            items: [
              {
                label: 'Get Started',
                to: '/docs/Raps',
              },
              {
                label: 'Get Rapping',
                to: '/docs/raps/0001/accessibility-daze',
              },
              {
                label: 'Lesson Downloads',
                to: 'http://code.opensourceraps.com',
              },
            ],
          },
          {
            title: 'Open Source Raps!',
            items: [
              {
                label: 'About',
                href: 'http://www.opensourceraps.com/docs/about'
              },
              {
                label: 'Code',
                href: 'http://code.opensourceraps.com'
              },
              {
                label: 'Music',
                href: 'http://raps.opensourceraps.com'
              },
              {
                label: 'Music',
                href: 'http://raps.opensourceraps.com'
              },
              {
                label: 'Videos',
                href: 'https://raps.opensourceraps.com'
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/open.source.raps'
              },
              { 
                label: 'This Site\'s Code',
                href: 'http://github.com/open-source-raps/open-source-raps.github.io'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open Source Raps!™.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
