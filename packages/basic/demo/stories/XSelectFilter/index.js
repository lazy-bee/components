import { text } from '@storybook/addon-knobs/dist/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XSelectFilter from '../../../src/components/XSelectFilter';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XSelectFilter,
    {},
    {
      result: null,
      items: [
        {
          text: 'New York',
          value: 'New York',
        },
        {
          text: 'Chicago',
          value: 'Chicago'
        },
        {
          text: 'Seattle',
          value: 'Seattle',
          disabled: true
        }
      ],
      label: text('label', 'Select City'),
      placeholder: text('placeholder', 'Select City')
    },
    `
    <div style="width: 70%">
      <h3 style="margin-bottom:25px;">Select City : <span style="color:#0149FF"> {{scheme.result}} </span></h3>
      <x-select-filter v-bind="scheme" v-model="scheme.result"/>
    </div>
    `
  )
);
