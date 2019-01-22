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

let tooltip = storiesOf('XTooltip', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

tooltip.add(
  'Tooltip',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          direction: select(
            'direction',
            {
              left: 'left',
              right: 'right',
              top: 'top',
              bottom: 'bottom'
            },
            'right'
          ),
          content: text('content', 'this is tooltip content')
        }
      };
    },
    template: `
    <x-tooltip v-bind="scheme">
      <span slot="trigger">This is trigger</span>
    </x-tooltip>
    `
  }))
);
