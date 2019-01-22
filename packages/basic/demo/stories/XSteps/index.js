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

let steps = storiesOf('XSteps', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

steps.add(
  'Steps',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          steps: object('steps', [
            { label: 'aaa', slot: 'a' },
            { label: 'bbb', slot: 'b' },
            { label: 'ccc', slot: 'c' }
          ]),
          type: select(
            'type',
            {
              vertical: 'vertical',
              horizontal: 'horizontal'
            },
            'horizontal'
          ),
          finish: {
            content: 'Done',
            click: () => {
              console.log('done!');
            }
          }
        }
      };
    },
    template: `
    <x-steps v-bind="scheme">
      <div slot="a">this is aaa</div>
      <div slot="b">this is aaa</div>
      <div slot="c">this is aaa</div>
    </x-steps>
    `
  }))
);
