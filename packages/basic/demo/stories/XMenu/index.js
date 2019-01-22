import { object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XMenu, { propOptions } from '../../../src/components/XMenu';
import { generateScheme } from '../../utils/generateStory';

export default withReadme(docs, () => ({
  data() {
    return {
      scheme: generateScheme(XMenu, propOptions, {
        menuList: object('menuList', {
          list: [{ name: 'aaa' }, { name: 'bbb' }]
        })
      })
    };
  },
  template: `
  <x-menu v-bind="scheme">
    <x-button slot="trigger" v-bind="{ content: 'trigger' }"></x-button>
  </x-menu>
  `
}));
