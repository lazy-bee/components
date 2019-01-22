import { storiesOf } from '@storybook/vue';
import { withKnobs, object } from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let line = storiesOf('XLine', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

line.add(
  'Line',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          xAxis: object('xAxis', {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }),
          yAxis: object('yAxis', {
            type: 'value'
          }),
          data: object('data', [120, 200, 150, 80, 70, 110, 130])
        }
      };
    },
    template: `
    <x-line v-bind="scheme"></x-line>
    `
  }))
);
