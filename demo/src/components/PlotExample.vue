<template>
  <br/>
  <button @click="() => {trace0 = !trace0} "> {{trace0 ? "Hide Trace 0" : "Show Trace 0"}} </button >
  <button @click="() => {trace1 = !trace1} "> {{trace0 ? "Hide Trace 1" : "Show Trace 1"}} </button >
  <button @click="() => {trace2 = !trace2} "> {{trace0 ? "Hide Trace 2" : "Show Trace 2"}} </button >
  <button @click="() => {showPlot = !showPlot} "> {{trace0 ? "Hide plot" : "Show plot"}} </button >
  <VuePlotly v-if="showPlot" :data="data" :layout="layout" />
</template>

<script setup lang="ts">

import { VuePlotly } from '@clalarco/vue3-plotly';
import { Ref, onMounted, ref, watchEffect } from 'vue';

const trace0 : Ref<boolean> = ref(true);
const trace1 : Ref<boolean> = ref(true);
const trace2 : Ref<boolean> = ref(true);
const showPlot : Ref<boolean> = ref(true);
const isReady : Ref<boolean> = ref(false);

const layout = {
  title: 'Line and Scatter Styling'
};

const getData = () => [
  ... trace0.value ? [{
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    marker: {
      color: 'rgb(219, 64, 82)',
      size: 12
    }
  }] : [],
  ... trace1.value ? [{
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    line: {
      color: 'rgb(55, 128, 191)',
      width: 3
    }
  }] : [],
  ... trace2.value ? [{
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
  }] : []
];

const data = ref(getData());

onMounted(() => {
  isReady.value = true;
  data.value = getData();
});

watchEffect(() => {
  if (!isReady.value) return;
  data.value = getData();
});
</script>
