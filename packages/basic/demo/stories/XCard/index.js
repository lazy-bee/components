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

let card = storiesOf('XCard', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

card.add(
  'Card',
  withDocs(docs, () => ({
    data() {
      return {
        content: text('content', 'This is card content'),
        scheme: {
          title: text('title', 'This is card title'),
          mediaUrl: text('mediaUrl', ''),
          mediaHeight: text('mediaHeight', '')
        }
      };
    },
    template: `
      <x-card v-bind="scheme">{{ content }}</x-card>
    `
  }))
);
