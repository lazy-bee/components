import { text } from '@storybook/addon-knobs/dist/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XSelect from '../../../src/components/XSelect';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XSelect,
    {},
    {
      items: [
        {
          text: 'New York',
          value: 'New York'
        },
        {
          text: 'Chicago',
          value: 'Chicago'
        },
        {
          text: 'Seattle',
          value: 'Seattle'
        }
      ],
      label: text('label', 'Select City'),
      placeholder: text('placeholder', 'Select City')
    },
    `
    <div style="width: 70%">
      <h3 style="margin-bottom:25px;">Select City : <span style="color:#0149FF"> {{scheme.value}} </span></h3>
      <x-select v-bind="scheme" v-model="scheme.value" />
    </div>
    `
  )
);
