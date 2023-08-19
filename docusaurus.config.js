// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "D&D 5e SRD API",
  tagline: "An API for the D&D 5e SRD",
  url: "https://dnd5eapi.co",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "5e-bits", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "D&D 5e SRD API",
        logo: {
          alt: "A Red D20 Die depicting the number 20",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Get Started",
          },
          {
            type: "doc",
            docId: "tutorials/index",
            position: "left",
            label: "Tutorials",
          },
          { to: "/api", label: "API", position: "left" },
          {
            type: "doc",
            docId: "faq",
            position: "left",
            label: "FAQ",
          },
          {
            to: "https://5e-bits.github.io/dnd-uptime",
            label: "Status",
            position: "right",
          },
          {
            href: "https://github.com/5e-bits",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/tutorials/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/TQuYTv7",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/5e-bits",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 5e-bits. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
