// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blog",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "blog", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/default_style.scss"],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: "",
        logo: {
          alt: "",
          src: "img/logo.svg",
          href: "https://www.novaichain.com/#/",
        },
        items: [
          {
            href: "https://github.com/NovaiChain7256/Room",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [],
          // },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/Novai_Community",
              },
              {
                label: "X",
                href: "https://x.com/NovaiChain_",
              },
              {
                label: "Medium",
                href: "https://medium.com/@novaidao",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/NovaiChain7256/Room",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 Novai Chian All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
    }),

  plugins: ["docusaurus-plugin-sass"],
};

export default config;
