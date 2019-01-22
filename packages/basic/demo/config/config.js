import 'babel-polyfill';
import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';

import Vue from 'vue';
import VueBus from 'vue-bus';
Vue.use(VueBus);

import Vuetify from 'vuetify';
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

import ECharts from 'vue-echarts';
Vue.component('chart', ECharts);

import '../../src/styles/base.styl';

import components from '../../src/components';
components.forEach((component) => {
  if (component.name) {
    Vue.component(component.name, component);
  }
});

setOptions({
  name: 'Lazybee',
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false,
  sidebarAnimations: true,
  enableShortcuts: false
});

function loadStories() {
  require('../index');
}

configure(loadStories, module);
