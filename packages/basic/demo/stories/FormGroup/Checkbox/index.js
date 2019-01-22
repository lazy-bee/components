import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XCheckbox from '../../../../src/components/XCheckbox';
import { generateStory } from '../../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XCheckbox,
    {},
    {
      items: [
        {
          label: 'New York',
          value: 'New York'
        },
        {
          label: 'Chicago',
          value: 'Chicago'
        },
        {
          label: 'Seattle',
          value: 'Seattle'
        }
      ],
      value: [] // what selected
    },
    `
    <div style="min-width:380px;">
      <h3 style="margin-bottom:25px;">Select City : <span style="color:#0149FF"> {{scheme.value}} </span></h3>
      <x-checkbox v-bind="scheme" v-model="scheme.value" />  
    </div>
    `
  )
);
