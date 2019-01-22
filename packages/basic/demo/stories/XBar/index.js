import { storiesOf } from '@storybook/vue';
import { withKnobs, object } from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let bar = storiesOf('XBar', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

bar.add(
  'Bar',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          colors: ['#43A047', '#6e7074', '#546570', '#c4ccd3'],
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
    <x-bar v-bind="scheme"></x-bar>
    `
  }))
);
