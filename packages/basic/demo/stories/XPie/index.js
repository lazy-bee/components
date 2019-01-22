import { storiesOf } from '@storybook/vue';
import { withKnobs, object } from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let pie = storiesOf('XPie', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

pie.add(
  'Pie',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          data: object('data', [
            {
              value: 335,
              name: 'aaa'
            },
            {
              value: 310,
              name: 'bbb'
            },
            {
              value: 234,
              name: 'ccc'
            },
            {
              value: 135,
              name: 'ddd'
            },
            {
              value: 1548,
              name: 'eee'
            }
          ])
        }
      };
    },
    template: `
    <x-pie v-bind="scheme"></x-pie>
    `
  }))
);
