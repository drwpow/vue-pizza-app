import Vue from 'vue';
import App from './App.vue';

import filters from './lib/filters';

Vue.config.productionTip = false;
filters.forEach(({ name, action }) => Vue.filter(name, action));

new Vue({
  el: '#app',
  render: h => h(App)
});
