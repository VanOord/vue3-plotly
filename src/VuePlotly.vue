<template>
<div :id="plotlyId"></div>
</template>

<script>
let Plotly;
import events from "./events.js";
import { v4 as uuidv4 } from 'uuid';

let timeOutFunctionId;

export default {
  name: 'VuePlotly',

  data() {
    return {
      plotlyId: `plotly-${uuidv4()}`,
    };
  },

  props: {
		'data' : {
			type : Array,
			required:false,
		}, 
		'layout': {
			type : Object,
			required:false,
		}, 
		'config':{
			type : Object,
			required:false,
		}, 
		'bundle':{
			type : String,
			default : "full",
			required:false
		}
	},

  watch: {
    data() { this.setGraph(); },
    layout() { this.setGraph(); },
    config() { this.setGraph(); },
  },

  mounted() {
    switch(this.bundle){
			case "basic" : Plotly = await import("plotly.js-basic-dist-min"); break;
			case "cartesian" : Plotly = await import("plotly.js-cartesian-dist-min"); break;
			case "geo" : Plotly = await import("plotly.js-geo-dist-min"); break;
			case "gl3d" : Plotly = await import("plotly.js-gl3d-dist-min"); break;
			case "gl2d" : Plotly = await import("plotly.js-gl2d-dist-min"); break;
			case "mapbox" : Plotly = await import("plotly.js-mapbox-dist-min"); break;
			case "finance" : Plotly = await import("plotly.js-finance-dist-min"); break;
			case "strict" : Plotly = await import("plotly.js-strict-dist-min"); break;*/
			default : Plotly = await import("plotly.js-dist");
		}		
    this.setGraph();
    events.forEach(evt => {
			this.$el.on(evt.completeName, evt.handler(this));
		});
    this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(timeOutFunctionId); // debounce the reset
      timeOutFunctionId = setTimeout(this.setGraph, 100);
    });
    this.resizeObserver.observe(document.getElementById(this.plotlyId));
  },

  beforeUnmount() { 
    events.forEach(event => this.$el.removeAllListeners(event.completeName));
    this.resizeObserver.disconnect(); 
  },

  methods: {
    setGraph() {
      Plotly.newPlot(this.plotlyId, this.data, this.layout, this.config);
    },
  },
};
</script>
