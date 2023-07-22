# Usage

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

Check [Demo page](https://clalarco.github.io/vue3-plotly/demo) [(source code)](https://github.com/clalarco/vue3-plotly/blob/main/demo/src/components/PlotExample.vue) for more details to manage visualzation.

## Properties

- `data` ***Plotly.Data[]***

  [Data](https://plot.ly/javascript/reference/) to be displayed

- `layout` ***Plotly.Layout***

  Graphic [layout](https://plot.ly/javascript/reference/#layout)

- `config` ***Object*** (*optional*)

  Configuration parameters allowed by [Plotly.newPlot](https://plotly.com/javascript/plotlyjs-function-reference/#plotlynewplot) as [configuration options](https://plotly.com/javascript/configuration-options/)

  - default: `{ responsive: true }`
