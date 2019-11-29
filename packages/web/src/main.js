import App from './App.svelte';

import { map } from './map';

const app = new App({
  target: document.body,
  props: {
    map,
  },
});

export default app;
