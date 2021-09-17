const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Every Given Sunday',
  tagline: 'where fantasy fiends compete',
  url: 'http://www.everygivensunday.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fata13xception', // Usually your GitHub org/user name.
  projectName: 'everygivensunday', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: // theme overrides go here
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Home',
        logo: {
          alt: 'Ever Given Sunday Logo',
          src: 'img/egs-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro', // name of the md doc to navigate to
            position: 'left',
            label: 'Bylaws',
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          // {
            // href: 'https://github.com/facebook/docusaurus',
            // label: 'GitHub',
            // position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Leagues',
            items: [
              {
                label: 'EGS CLA',
                href: 'https://www58.myfantasyleague.com/2021/home/49205#0',
              },
              {
                label: 'EGS PRO',
                href: 'https://www61.myfantasyleague.com/2021/home/73667#0',
              },
              {
                label: 'EGS SFX',
                href: 'https://www58.myfantasyleague.com/2021/home/62923#0',
              },
              {
                label: 'EGS SIM',
                href: 'https://www58.myfantasyleague.com/2021/home/67057#0',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Every Given Sunday`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      "colorMode": { // https://docusaurus.io/docs/api/themes/configuration
        "defaultMode": "light",
        "disableSwitch": true,
        "respectPrefersColorScheme": true,
        "switchConfig": {
          "darkIcon": "🌙",
          "darkIconStyle": {},
          "lightIcon": "☀",
          "lightIconStyle": {}
        }
      },
    }),
  plugins: [require.resolve('docusaurus-lunr-search')],
});