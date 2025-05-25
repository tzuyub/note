import { defineConfig } from 'vitepress';
import fs from "fs";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tzuyub's note",
  base: "/note/",
  description: "tzuyub's note for everything",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'AI',
        items: [
          { text: 'AI Agent', link: '/ai/ai-agent' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tzuyub' }
    ]
  }
})
