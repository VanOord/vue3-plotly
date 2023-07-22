# vue3-plotly

# Thin vue wrapper for [plotly.js](https://plot.ly/javascript/)

Forked from <https://github.com/VanOord/vue3-plotly>

THIS CODE IS STILL UNDER DEVELOPMENT, IT MIGHT NOT WORK YET.

It provides:
  - all plotly.js methods and events
  - data reactivity
  - Redraw on resizing

## Usage

### As Single-page Compoment
```vue
<VuePlotly :data="data" :layout="layout" :display-mode-bar="false"></VuePlotly>
```

### Using Plain Javascript

```javascript
import { VuePlotly } from '@clalarco/vue3-plotly'

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

More documentation at <https://clalarco.github.io/vue3-plotly/>

Packaging instructions at <https://medium.com/@blaster203/how-to-create-a-component-library-with-vue-3-vitejs-typescript-8eb41f799045>
