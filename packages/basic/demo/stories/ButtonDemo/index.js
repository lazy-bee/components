import Vue from 'vue';
import { withDocs, withReadme } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import docs from './docs.md';
import ButtonDemo from './ButtonDemo';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.component('buttondemo', ButtonDemo);

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
  template: '<buttondemo />'
}));
