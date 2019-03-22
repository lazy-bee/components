import VueBus from 'vue-bus';

// vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

// echart
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';

// front awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

// components of this project
import components from './components';
import './styles/base.styl';
const install = function(Vue) {
  Vue.use(VueBus);
  Vue.use(Vuetify);

  Vue.component('chart', ECharts);

  Vue.component('font-awesome-icon', FontAwesomeIcon);
  
  components.forEach((component) => {
    if (component.name) {
      Vue.component(component.name, component);
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
