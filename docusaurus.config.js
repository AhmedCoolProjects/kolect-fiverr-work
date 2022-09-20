// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kolect Docs",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "developers",
        path: "developers",
        routeBasePath: "developers",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "marketplace",
        path: "marketplace",
        routeBasePath: "marketplace",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "d570c663e8dd3ea36e42feecc19638fa",
        appId: "BA9CSVC7BK",
        indexName: "dev_test_version",
        contextualSearch: true,
      },
      navbar: {
        title: "DOCS",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "About",
          },
          {
            label: "Guides",
            position: "left",
            to: "/guides",
          },
          {
            label: "Developers",
            position: "left",
            to: "/developers",
          },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/team", label: "Team", position: "right" },
          { to: "/marketplace", label: "Marketplace", position: "right" },

          // {
          //   href: "#",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "ABOUT",
            items: [
              {
                label: "Welcome to Kolect",
                to: "/docs/intro",
              },
            ],
          },

          {
            title: "GUIDES",
            items: [
              {
                label: "Welcome",
                to: "/guides",
              },
            ],
          },
          {
            title: "DEVELOPERS",
            items: [
              {
                label: "Getting Started",
                to: "/developers",
              },
            ],
          },
          {
            title: "LINKS",
            items: [
              {
                label: "Kolect",
                href: "#",
              },
              {
                label: "Team",
                to: "/team",
              },
              {
                label: "GitHub",
                href: "#",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        logo: {
          alt: "Kolect Logo",
          src: "img/logo.svg",
          href: "https://Kolect.org/",
          width: 75,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Kolect. Built with Docusaurus.</br>
        <div class="items-footer-container-custom">
        <a href="#" class="item-footer-custom">
        <img src="/img/svgs/twitter.svg" class="item-footer-custom-img" alt="logo" />
        <span>twitter
        </span>
        </a>
        <a href="#" class="item-footer-custom">
        <img src="/img/svgs/discord.svg" class="item-footer-custom-img" alt="logo" />
        <span>discord
        </span>
        </a>
        <a href="#" class="item-footer-custom">
         <img src="/img/svgs/telegram.svg" class="item-footer-custom-img" alt="logo" />
        <span>telegram
        </span>
        </a>
        <a href="#" class="item-footer-custom">
         <img src="/img/svgs/instagram.svg" class="item-footer-custom-img" alt="logo" />
        <span>instagram
        </span>
        </a>
        <a href="#" class="item-footer-custom">
         <img src="/img/svgs/github2.svg" class="item-footer-custom-img" alt="logo" />
        <span>github
        </span>
        </a>
        </div>`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
