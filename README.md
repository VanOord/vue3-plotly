# @clalarco/vue3-plotly

## Thin Vue 3 wrapper for [plotly.js](https://plot.ly/javascript/)

Based on project from[VanOord](https://github.com/VanOord/vue3-plotly), but adding some improvements:

- Typescript compatible
- Improving implementation based on `<script setup>`
- Using Vite for building process

Also, the [documentation](https://clalarco.githb.io/vue3-plotly/docs/) and 
the [demo page](https://clalarco.github.io/vue3-plotly/demo/) [(source code)](demo) are published at GitHub.

## Usage

## Usage with Single-file Component (SFC)

Usage from another component:

```html
<Template>
  <VuePlotly :data="data" :layout="layout"></VuePlotly>
</Template>

<script setup>
  import { VuePlotly } from 'vue3-plotly';

  const data = [ ... ];
  const layout = { ... };
</script>
```

More documentation at <https://clalarco.github.io/vue3-plotly/>

## Code improvements

I made a bunch of code organization and refactor, without losing backward compatibility:

- Implementation of library in Typescript
- Code is separated in lib, demo and docs, using npm workspaces
- Migrating building process to [Vite](https://vitejs.dev/), using [this article as reference](https://medium.com/@blaster203/how-to-create-a-component-library-with-vue-3-vitejs-typescript-8eb41f799045)
- Updating documentation, using [Vitepress](https://vitepress.dev/)
- Publishing documentation and demo in GitHub Pages

Future building improvements:

- Add testing
- Add semantic release
- Add automatic deployment
