import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XNotification, {
  propOptions
} from '../../../src/components/XNotification';
import { generateScheme } from '../../utils/generateStory';

export default withReadme(docs, () => ({
  data() {
    return {
      scheme: generateScheme(XNotification, propOptions)
    };
  },
  template: `
  <div>
    <x-notification ref="notification" v-bind="scheme"></x-notification>
    <button @click.stop="$refs.notification.open()">This is trigger</button>
  </div>
  `
}));
