import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from './router'


// import '@lazy-bee/basic/dist/basic.css'
import lb from '@lazy-bee/basic'

// console.log('lb: ', lb)

Vue.config.productionTip = false;
// Vue.use(lb)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
