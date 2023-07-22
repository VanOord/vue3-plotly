import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue3-plotly/docs/',
  title: "vue3-plotly",
  description: "Thin vue wrapper for plotly.js",
  outDir: '../dist/gh-pages/docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: './' },
      { text: 'Usage', link: './usage' },
      { text: 'Installation', link: './install' },
      { text: 'Demo', link: 'https://clalarco.github.io/vue3-plotly/demo' },
      { text: 'Go to Code', link: 'https://github.com/clalarco/vue3-plotly' }
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
          },
          {
            text: 'Demo', link: 'https://clalarco.github.io/vue3-plotly/demo',
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clalarco/vue3-plotly' }
    ]
  }
})
