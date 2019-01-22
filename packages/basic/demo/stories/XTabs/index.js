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

let tabs = storiesOf('XTabs', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

tabs.add(
  'Tabs',
  withDocs(docs, () => ({
    data() {
      return {
        buttonScheme: {
          content: 'this is button'
        },
        scheme: {
          type: select('type', {
            card: 'card',
            line: 'line'
          }),
          position: select('position', {
            top: 'top',
            bottom: 'bottom',
            left: 'left',
            right: 'right'
          }),
          control: boolean('control', true),
          tabs: object('tabs', [
            { label: 'aaa', slot: 'aaa' },
            { label: 'bbb', slot: 'bbb' },
            { label: 'ccc', slot: 'ccc' }
          ])
        }
      };
    },
    template: `
      <x-tabs v-bind="scheme">
        <div slot="aaa">this is aaa</div>
        <div slot="bbb">this is bbb</div>
        <div slot="ccc">this is ccc</div>
      </x-tabs>
    `
  }))
);
