import Vue from 'vue';
import { withDocs, withReadme } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import docs from './docs.md';
import Welcome from './Welcome';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.component('welcome', Welcome);

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
  template: '<welcome />'
}));
