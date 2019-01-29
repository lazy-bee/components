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
          value: 'Seattle',
          disabled: true
        }
      ],
      value: [] // what selected
    },
    `
    <div style="min-width:380px;">
      <x-checkbox v-bind="scheme" v-model="scheme.value" /> 
      <h3 style="margin-top:50px;">Print Value: <span style="color:#0149FF"> {{scheme.value}} </span></h3> 
    </div>
    `
  )
);
