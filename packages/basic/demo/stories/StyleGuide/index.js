import Vue from 'vue';
import { withDocs, withReadme } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import docs from './docs.md';
import styleguide from './StyleGuide';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.component('styleguide', styleguide);

export default withDocs(docs, () => ({
  beforeCreate() {
    setOptions({
      showAddonPanel: false
    });
  },
  beforeDestroy() {
    setOptions({
      showAddonPanel: true
    });
  },
  template: '<styleguide />'
}));
