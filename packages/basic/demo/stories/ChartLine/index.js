import { array, text, object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XLine from '../../../src/components/XChartLine';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XLine,
    {},
    {
      data: object('data', [
        {
          name: 'Product A',
          data: [50, 30, 50, 30, 100, 80]
        },
        {
          name: 'Product B',
          data: [40, 60, 20, 90, 40, 60]
        }
      ]),
      xAxisName: text('xAxisName', 'Month'),
      xAxisData: array('xAxisData', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']),
      yAxisName: text('yAxisName', 'Conversion'),
      yAxisLabelFormatter: text('yAxisLabelFormatter', '{value}%')
    }
  )
);
