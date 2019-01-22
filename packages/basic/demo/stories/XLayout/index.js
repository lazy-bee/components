import { boolean, number } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XLayout, { propOptions } from '../../../src/components/XLayout';
import { generateScheme } from '../../utils/generateStory';

export const adminLayout = withReadme(docs, () => ({
  data() {
    return {
      scheme: generateScheme(XLayout, propOptions, {
        type: 'admin'
      })
    };
  },
  template: `
  <x-layout v-bind="scheme">
    <div slot="toolbar">this is toolbar</div>
    <div slot="drawer">this is drawer</div>
    <div slot="content">this is admin content</div>
  </x-layout>
`
}));

export const simpleLayout = withReadme(docs, () => ({
  data() {
    return {
      scheme: generateScheme(XLayout, propOptions, {
        type: 'simple'
      })
    };
  },
  template: `
    <x-layout v-bind="scheme" class="blue darken-4" >
      <div slot="header">this is header</div>
      <div slot="content">this is simple content</div>
      <div slot="footer">this is footer</div>
    </x-layout>
  `
}));
