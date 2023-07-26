# @clalarco/vue3-plotly

## Thin Vue 3 wrapper for [plotly.js](https://plot.ly/javascript/)

This is the umbrella folder for this project. Please check the README in the following sections for details:

- (Library)[lib/README.md]. This README is also used by npm publish.
- (Demo Page)[demo/README.md]

## Code improvements

I made a bunch of code organization and refactor, without losing backward compatibility:

- Implementation of library in Typescript
- Code is separated in lib, demo and docs, using npm workspaces
- Migrating building process to [Vite](https://vitejs.dev/), using [this article as reference](https://medium.com/@blaster203/how-to-create-a-component-library-with-vue-3-vitejs-typescript-8eb41f799045)
- Updating documentation, using [Vitepress](https://vitepress.dev/)
- Publishing documentation and demo in GitHub Pages

## Future improvements:

- Add testing
- Add semantic release
- Add automatic deployment
