import { object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XDonut, { propOptions } from '../../../src/components/XChartDonut';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(XDonut, propOptions, {
    data: object('data', [
      {
        value: 600,
        name: 'New York'
      },
      {
        value: 310,
        name: 'Chigago'
      },
      {
        value: 234,
        name: 'Seattle'
      },
      {
        value: 200,
        name: 'Boston'
      },
      {
        value: 600,
        name: 'Los Angles'
      }
    ])
  })
);
