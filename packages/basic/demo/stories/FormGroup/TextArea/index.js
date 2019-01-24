import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTextArea from '../../../../src/components/XTextArea';
import { generateStory } from '../../../utils/generateStory';
import { text } from '@storybook/addon-knobs/vue';

export default withReadme(docs, () =>
  generateStory(
    XTextArea,
    {},
    {
      label: text('label', 'Comment'),
      name: text('name', 'Comment'),
      placeholder: text('placeholder', 'Please leave your comment here')
    },
    `
    <div style="width: 70%">
      <x-textarea v-bind="scheme" />
    </div>
    `
  )
);
