import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue3-plotly/',
  title: "vue3-plotly",
  description: "Thin vue wrapper for plotly.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: './' },
      { text: 'Usage', link: './usage' },
      { text: 'Installation', link: './install' }
    ],

    sidebar: [
      {
        text: 'User Guide',
        items: [
          {
            text: 'Usage', link: './usage',
          },
          {
            text: 'Installation', link: './install',
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clalarco/vue-plotly' }
    ]
  }
})
