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

let icon = storiesOf('XIcon', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

icon.add(
  'Icon',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          name: text('name', 'email'),
          size: text('size', '18px')
        }
      };
    },
    template: `
    <x-icon v-bind="scheme"></x-icon>
    `
  }))
);
