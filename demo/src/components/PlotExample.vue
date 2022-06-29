<template>
  <br/>
  <button @click="() => {trace0 = !trace0} "> {{trace0 ? "Hide Trace 0" : "Show Trace 0"}} </button >
  <button @click="() => {trace1 = !trace1} "> {{trace0 ? "Hide Trace 1" : "Show Trace 1"}} </button >
  <button @click="() => {trace2 = !trace2} "> {{trace0 ? "Hide Trace 2" : "Show Trace 2"}} </button >
  <button @click="() => {showPlot = !showPlot} "> {{trace0 ? "Hide plot" : "Show plot"}} </button >
  <VuePlotly v-if="showPlot" :data="data" :layout="layout" />
</template>

<script>

import { VuePlotly } from 'vue3-plotly'

export default {
  name:'PlotExample',

  components:{ VuePlotly },

  computed:{
    data(){
      var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        marker: {
          color: 'rgb(219, 64, 82)',
          size: 12
        }
      };

      var trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        line: {
          color: 'rgb(55, 128, 191)',
          width: 3
        }
      };

      var trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        marker: {
          color: 'rgb(128, 0, 128)',
          size: 8
        },
        line: {
          color: 'rgb(128, 0, 128)',
          width: 1
        }
      };

      var data = [];
      if (this.trace0) data.push(trace1)
      if (this.trace1) data.push(trace2)
      if (this.trace2) data.push(trace3)
      return data
    }
  },

  data(){
    return {
      layout:{
         title: 'Line and Scatter Styling'
      },
      trace0:true,
      trace1:true,
      trace2:true,
      showPlot:true,
    }
  }


}
</script>
