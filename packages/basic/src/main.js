import App from "./App.vue";
import buildConfig from './build'
import Vue from "vue";

buildConfig.install(Vue)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
