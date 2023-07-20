# Usage

## Usage with Single-file Component (SFC)

```vue
<VuePlotly :data="data" :layout="layout" :display-mode-bar="false"></VuePlotly>
```

## Usage with Plain Javascript

```javascript
import { VuePlotly } from 'vue3-plotly'

export default {
  components: {
    Plotly
  },
  data() {
    return {
      data:[{
        x: [1,2,3,4],
        y: [10,15,13,17],
        type:"scatter"
      }],
      layout:{
        title: "My graph"
      }
    }
  }
}
```

## Props

- `data` ***Array*** (*optional*)

  [Data](https://plot.ly/javascript/reference/) to be displayed

- `layout` ***Object*** (*optional*)

  Graphic [layout](https://plot.ly/javascript/reference/#layout)

- `id` ***String*** (*optional*)

  Id of the root HTML element of the component.

- Others:

  Plotly component implements the [transparent wrapper pattern](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html).
  All other props will be passed as plotly graphic [option](https://plot.ly/javascript/configuration-options/).
