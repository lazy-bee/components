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

let layout = storiesOf('XLayout', module).addDecorator(withKnobs);

layout.add(
  'Admin Layout',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          type: 'admin',
          drawerWidth: number('drawerWidth', 200),
          drawerRight: boolean('drawerRight', false),
          clipped: boolean('clipped', true)
        }
      };
    },
    template: `
    <x-layout v-bind="scheme">
      <div slot="toolbar">this is toolbar</div>
      <div slot="drawer">this is drawer</div>
      <div slot="content">this is admin content</div>
    </x-layout>
  `
  }))
);

layout.add(
  'Simple Layout',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          type: 'simple'
        }
      };
    },
    template: `
      <x-layout v-bind="scheme" class="blue darken-4" >
        <div slot="header">this is header</div>
        <div slot="content">this is simple content</div>
        <div slot="footer">this is footer</div>
      </x-layout>
    `
  }))
);
