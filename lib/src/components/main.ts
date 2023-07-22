import type { App } from 'vue';
import { VuePlotly } from ".";

export default {
  install: (app: App) => {
    app.component('VuePlotly', VuePlotly);
  }
};

export { VuePlotly };
