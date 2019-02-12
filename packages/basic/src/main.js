import Vue from "vue";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.config.productionTip = false;
Vue.use(Vuetify)

import components from './components';

Vue.component('font-awesome-icon', FontAwesomeIcon);

components.forEach((component) => {
  if (component.name) {
    Vue.component(component.name, component);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
