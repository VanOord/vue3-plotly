# vue3-plotly

<h2>Thin vue wrapper for <a
              href="https://plot.ly/javascript/"
              target="_blank"
            >plotly.js</a></h2>
<span>It provides:</span>
<ul>
  <li>all plotly.js methods and events</li>
  <li>data reactivity</li>
  <li>Redraw on resizing</li>
</ul>

## Usage
```HTML
<VuePlotly :data="data" :layout="layout" :display-mode-bar="false"></VuePlotly>
```
```javascript
import { VuePlotly } from 'vue-plotly'

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
## API

#### Props 

- `data` ***Array*** (*optional*) 

  [Data](https://plot.ly/javascript/reference/) to be displayed

- `layout` ***Object*** (*optional*) 

  Graphic [layout](https://plot.ly/javascript/reference/#layout)

- `id` ***String*** (*optional*) 

  Id of the root HTML element of the component.

- Others:

  Plotly component implements the [transparent wrapper pattern](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html):<br>All other props will be passed as plotly graphic [option](https://plot.ly/javascript/configuration-options/).

## Installation
```
npm install vue3-plotly
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```