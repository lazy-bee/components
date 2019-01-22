import { text, object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XGeoChart, { propOptions } from '../../../src/components/XChartGeo';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(XGeoChart, propOptions, {
    googleApiKey: text(
      'googleApiKey',
      'AIzaSyBrUL1x6cdU_8ihWvqe52B9uHVfPEWQsIM'
    ),
    region: text('region', '142'),
    dataHeader: object('data', ['Country', 'Some Value']),
    data: object('data', [
      ['Taiwan', 67890],
      ['indonesia', 56789],
      ['Hong Kong', 23456],
      ['Shanghai', 2345],
      ['Philippine', 234567],
      ['Vietnam', 123456]
    ])
  })
);
