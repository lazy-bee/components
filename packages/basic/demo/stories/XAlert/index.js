import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let alert = storiesOf('XAlert', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

alert.add(
  'Alert',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          value: true,
          type: 'error',
          message: 'this is error message'
        }
      };
    },
    template: `
    <x-alert v-bind="scheme"></x-alert>
    `
  }))
);
