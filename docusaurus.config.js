// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "D&D 5e SRD API",
  tagline: "REST + GraphQL API for the 5e SRD database",
  url: "https://5e-bits.github.io",
  trailingSlash: false,
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "5e-bits", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  themes: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    "@docusaurus/theme-mermaid",
  ],
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
  plugins: [
    "./src/plugins/dynamic-tutorials-list"
  ],
  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      languageTabs: [
        {
          tabName: "cURL",
          highlight: "bash",
          language: "curl",
          variant: "curl",
          options: {
            longFormat: false,
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "Javascript",
          highlight: "javascript",
          language: "javascript",
          variant: "fetch",
          options: {
            ES6_enabled: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "Python",
          highlight: "python",
          language: "python",
          variant: "requests",
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "Go",
          highlight: "go",
          language: "go",
          variant: "native",
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "C#",
          highlight: "csharp",
          language: "csharp",
          variant: "httpclient",
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
        {
          tabName: "Java",
          highlight: "java",
          language: "java",
          variant: "okhttp",
          options: {
            followRedirect: true,
            trimRequestBody: true,
          },
        },
      ],
      image: "https://www.dnd5eapi.co/public/DnD-5e-meta-4k.png",
      // announcementBar: {
      //   content: "Join us on our community <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/TQuYTv7'>Discord</a>!",
      // },
      metadata: [
        {
          name: "keywords",
          content: "Dungeons, Dragons, 5th, Edition, API, SRD",
        },
        { name: "theme-color", content: "#D81921" },
        { property: "og:title", content: "D&D 5e SRD API" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://5e-bits.github.io/docs/" },
      ],
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
        additionalLanguages: [
          "powershell",
          "csharp",
          "java",
          "kotlin",
          "swift",
          "rust",
          "ruby",
        ],
      },
    }),
};

module.exports = config;
