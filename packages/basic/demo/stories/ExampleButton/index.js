import Vue from 'vue';
import { withDocs } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import docs from './docs.md';
import ExampleButton from './ExampleButton';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.component('examplebutton', ExampleButton);

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
  template: '<examplebutton />'
}));
