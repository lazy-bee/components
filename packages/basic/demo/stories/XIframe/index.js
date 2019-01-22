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

let iframe = storiesOf('XIframe', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

iframe.add(
  'Iframe',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          url: 'https://www.baidu.com'
        }
      };
    },
    template: `
    <x-iframe v-bind="scheme">
    </x-iframe>
    `
  }))
);
