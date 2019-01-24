import { date } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XDateTimePicker from '../../../src/components/XDateTimePicker';
import { generateStory } from '../../utils/generateStory';

const dateKnob = (label) => {
  const defaultValue = new Date('2019-01-17T10:32:58.320Z');
  const stringTimestamp = date(label, defaultValue);
  return new Date(stringTimestamp);
};

export default withReadme(docs, () =>
  generateStory(
    XDateTimePicker,
    {},
    {},
    `<x-datetime-picker v-bind="scheme" style="width:460px;" />`
  )
);
