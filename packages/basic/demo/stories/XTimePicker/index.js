import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTimePicker, { propOptions } from '../../../src/components/XTimePicker';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XTimePicker,
    propOptions,
    {},
    `<x-time-picker v-bind="scheme" style="width:460px;" />`
  )
);
