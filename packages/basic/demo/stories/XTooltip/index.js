import { boolean } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTooltip, { propOptions } from '../../../src/components/XTooltip';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XTooltip,
    propOptions,
    {
      value: boolean('value', true)
    },
    `
    <x-tooltip v-bind="scheme">
      <div slot="activator">Trigger</div>
    </x-tooltip>  
    `
  )
);
