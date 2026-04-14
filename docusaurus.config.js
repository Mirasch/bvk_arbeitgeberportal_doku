import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BVK Arbeitgeberportal',
  tagline: 'Benutzerhandbuch und Online-Dokumentation',
  favicon: 'img/favicon_bvk.ico',

  url: 'https://deine-domain.ch',
  baseUrl: '/',

  organizationName: 'bvk',
  projectName: 'arbeitgeberportal-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        
        blog: {
          routeBasePath: 'aktuelles',
          blogTitle: 'Aktuelles',
          blogDescription: 'News, Hinweise und interessante Themen für Arbeitgeber',
          postsPerPage: 10,
          blogSidebarTitle: 'Aktuelle Beiträge',
          blogSidebarCount: 10,
          showReadingTime: true,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      navbar: {
        // title: 'BVK Arbeitgeberportal',
        logo: {
          alt: 'BVK Logo',
          src: 'img/bvk_logo.png',
        },
        items: [
          {
            to: '/docs/getting-started',
            label: 'Schnellstart',
            position: 'left',
          },
          {
            to: '/docs/benutzerhandbuch',
            label: 'Benutzerhandbuch',
            position: 'left',
          },
          {
            to: '/docs/adminhandbuch',
            label: 'Adminhandbuch',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'releaseNotesSidebar',
            to: '/docs/release',
            label: 'Release Notes',
            position: 'left',
          },
          {
            to: '/docs/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
          to: '/aktuelles',
          label: 'Aktuelles',
          position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentation',
            items: [
              {
                label: 'Schnellstart',
                to: '/docs/getting-started',
              },
              {
                label: 'Benutzerhandbuch',
                to: '/docs/benutzerhandbuch',
              },
              {
                label: 'Adminhandbuch',
                to: '/docs/adminhandbuch',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Wichtige Themen',
            items: [
              {
                label: 'Login & Sicherheit',
                to: '/docs/login-und-sicherheit',
              },
              {
                label: 'Release Notes',
                to: '/docs/release-notes',
              },
            ],
          },
          {
            title: 'Kontakt',
            items: [
              {
                label: 'BVK Website',
                href: 'https://www.bvk.ch',
              },
              {
                label: 'Support',
                to: '/docs/adminhandbuch/support-und-kontakt',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BVK. Alle Rechte vorbehalten.`,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;