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

let dialog = storiesOf('XDialog', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

dialog.add(
  'Dialog',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          persistent: false,
          width: '50%'
        }
      };
    },
    template: `
    <div>
      <x-dialog ref="dialog" v-bind="scheme">
        <div style="width: 100%;height: 100%;background: #fff;color: #333;">
          this is some content

          <button style="border: 1px solid #ddd;display:block;margin: 10px;" @click.stop="$refs.dialog.close()">close</button>
        </div>
      </x-dialog>
      <div @click.stop="$refs.dialog.open()">trigger dialog</div>
    </div>
    `
  }))
);
