import Vue from "vue";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuetify)

import components from './components';

components.forEach((component) => {
  if (component.name) {
    Vue.component(component.name, component);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
