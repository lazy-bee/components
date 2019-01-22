import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let notification = storiesOf('XNotification', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

notification.add(
  'Notification',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          xAxis: 'right',
          yAxis: 'top',
          message: 'this is notification',
          value: true,
          color: '#43A047'
        }
      };
    },
    template: `
    <div>
      <x-notification ref="notification" v-bind="scheme"></x-notification>
      <button @click.stop="$refs.notification.open()">This is trigger</button>
    </div>
    `
  }))
);
