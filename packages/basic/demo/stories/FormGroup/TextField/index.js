import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTextField, { propOptions } from '../../../../src/components/XTextField';
import { generateStory } from '../../../utils/generateStory';

import { text } from '@storybook/addon-knobs/vue';

export default withReadme(docs, () =>
  generateStory(
    XTextField,
    propOptions,
    {
      label: text('label', 'Email'),
      appendIcon: text('appendIcon', 'email'),
      suffix: text('suffix', '@gmail.com')
    },
    `
    <div style="width: 70%">
      <x-textfield v-bind="scheme"/>
    </div>
    `
  )
);
