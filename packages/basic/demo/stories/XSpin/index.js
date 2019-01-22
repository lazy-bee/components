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

let spin = storiesOf('XSpin', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

spin.add(
  'Spin',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          name: select(
            'name',
            {
              'line-scale-party': 'line-scale-party',
              'line-scale-pulse-out': 'line-scale-pulse-out',
              'line-scale-pulse-out-rapid': 'line-scale-pulse-out-rapid',
              'line-spin-fade': 'line-spin-fade',
              'ball-beat': 'ball-beat',
              'ball-clip-rotate': 'ball-clip-rotate',
              'ball-clip-rotate-multiple': 'ball-clip-rotate-multiple',
              'ball-clip-rotate-pulse': 'ball-clip-rotate-pulse',
              'ball-grid-beat': 'ball-grid-beat',
              'ball-grid-pulse': 'ball-grid-pulse',
              'ball-pulse': 'ball-pulse',
              'ball-pulse-sync': 'ball-pulse-sync',
              'ball-rotate': 'ball-rotate',
              'ball-scale': 'ball-scale',
              'ball-scale-multiple': 'ball-scale-multiple',
              'ball-scale-ripple': 'ball-scale-ripple',
              'ball-scale-ripple-multiple': 'ball-scale-ripple-multiple',
              'ball-spin-fade': 'ball-spin-fade',
              'ball-triangle-path': 'ball-triangle-path',
              'cube-transition': 'cube-transition',
              'square-spin': 'square-spin'
            },
            'line-scale'
          ),
          color: text('color', '#1565C0'),
          size: text('size', '15px')
        }
      };
    },
    template: `
    <x-spin v-bind="scheme"></x-spin>
    `
  }))
);
