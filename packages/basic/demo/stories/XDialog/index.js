import { text, boolean } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XDialog, { propOptions } from '../../../src/components/XDialog';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XDialog,
    propOptions,
    {
      value: boolean('trigger', true),
      title: text('title', 'You have unsaved changes!'),
      content: text(
        'content',
        'Are you sure you want to leave this page without saving it?'
      ),
      cancelText: text('cancelText', 'No, go back'),
      confirmText: text('confirmText', 'Yes, leave this page')
    },
    ` 
      <x-dialog v-bind="scheme" v-model="scheme.value"/>
    `
  )
);
