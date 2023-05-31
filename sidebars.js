/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
      {
        type: 'link',
        label: 'Get Started',
        href: '/docs/raps',
      },
      {
        type: 'category',
        label: 'Raps',
        items: [
            {
                type: 'link',
                label: '#0001 - Accessibility Daze',
                href: '/docs/raps/0001/accessibility-daze',
            },
            {
                type: 'link',
                label: '#0002 - Always Greene, No Longer Green',
                href: '/docs/raps/0002/always-greene-no-longer-green',
            },
        ],
      },
      {
        type: 'link',
        label: 'About Us',
        href: '/docs/about',
      }],
};

module.exports = sidebars;
