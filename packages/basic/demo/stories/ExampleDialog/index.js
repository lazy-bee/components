import Vue from 'vue';
import { withDocs, withReadme } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import docs from './docs.md';
import ExampleDialog from './ExampleDialog';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.component('exampledialog', ExampleDialog);

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
  template: '<exampledialog />'
}));
