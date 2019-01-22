import { storiesOf } from '@storybook/vue';
import { withDocs } from 'storybook-readme';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs/vue';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let button = storiesOf('XButton', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

button.add(
  'Button',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          content: text('content', 'button'),
          color: text('color', '#039BE5'),
          round: boolean('round', false),
          flat: boolean('flat', false),
          circular: boolean('flat', false),
          icon: boolean('icon', false),
          disabled: boolean('disabled', false),
          size: select(
            'size',
            {
              small: 'small',
              medium: 'medium',
              large: 'large'
            },
            'medium'
          )
        }
      };
    },
    template: `
    <div>
      <x-button v-bind="scheme"></x-button>
    </div>
    `
  }))
);
