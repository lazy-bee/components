import { storiesOf } from '@storybook/vue';
import { withDocs } from 'storybook-readme';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from '@storybook/addon-knobs/vue';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let pagination = storiesOf('XPagination', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

pagination.add(
  'Pagination',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          value: 2,
          length: number('length', 6),
          circle: boolean('circle', true),
          click: function(page) {
            console.log(page);
          }
        }
      };
    },
    template: `
    <div>
      <x-pagination v-bind="scheme"></x-pagination>
    </div>
    `
  }))
);
