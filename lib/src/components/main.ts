import type { App } from 'vue';
import { VuePlotly } from "@/components";

export default {
  install: (app: App) => {
    app.component('VuePlotly', VuePlotly);
  }
};

export { VuePlotly };
