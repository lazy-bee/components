import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let menu = storiesOf('XMenu', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

menu.add(
  'Menu',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          openType: select(
            'openType',
            {
              click: 'click',
              hover: 'hover'
            },
            'click'
          ),
          menuList: object('menuList', {
            list: [{ name: 'aaa' }, { name: 'bbb' }]
          })
        }
      };
    },
    template: `
    <x-menu v-bind="scheme">
      <x-button slot="trigger" v-bind="{ content: 'trigger' }"></x-button>
    </x-menu>
    `
  }))
);
