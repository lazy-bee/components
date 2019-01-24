import Vue from 'vue';
import { withDocs, withReadme } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import docs from './docs.md';

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
  }
}));
