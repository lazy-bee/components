import { object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XPie, { propOptions } from '../../../src/components/XChartPie';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(XPie, propOptions, {
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
