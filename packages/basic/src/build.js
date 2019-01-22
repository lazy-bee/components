import VueBus from 'vue-bus';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import './styles/base.styl';
import components from './components';

const install = function(Vue) {
  Vue.use(VueBus);
  Vue.use(Vuetify);

  Vue.component('chart', ECharts);

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
// export default ECharts
