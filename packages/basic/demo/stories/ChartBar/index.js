import { array, text, object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XBar, { propOptions } from '../../../src/components/XChartBar';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(XBar, propOptions, {
    data: object('data', [
      {
        name: 'Product A',
        data: [25, 95, 162, 90]
      },
      {
        name: 'Product B',
        data: [40, 48, 120, 70]
      },
      {
        name: 'Product C',
        data: [20, 60, 100, 35]
      }
    ]),
    xAxisName: text('xAxisName', 'year'),
    xAxisData: array('xAxisData', ['Q1', 'Q2', 'Q3', 'Q4']),
    yAxisName: text('yAxisName', 'Revenue (MM)'),
    yAxisLabelFormatter: text('yAxisLabelFormatter', '${value}')
  })
);
