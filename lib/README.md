# @clalarco/vue3-plotly

## Thin Vue 3 wrapper for [plotly.js](https://plot.ly/javascript/)

Based on project from[VanOord](https://github.com/VanOord/vue3-plotly).

- Typescript support
- Improves Vue implementation based on `<script setup>`
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

