import 'babel-polyfill';
import Vue from "vue";
import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';

import buildConfig from '../../src/build'
buildConfig.install(Vue)

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
