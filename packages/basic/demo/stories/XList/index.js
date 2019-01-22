import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let list = storiesOf('XList', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

list.add(
  'List',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          router: '/aaaa',
          class: 'elevation-3',
          params: object('params', null),
          list: object('list', [
            {
              name: 'This is a group',
              icon: 'group'
            },
            {
              name: 'aaa',
              path: '',
              icon: 'person',
              list: [
                {
                  name: 'This is sub a ClassA',
                  class: 'classA',
                  id: 'idA',
                  path: '/aaaa'
                },
                {
                  name: 'aaa-1',
                  class: 'classA-1',
                  id: 'idA-1',
                  path: '',
                  disabled: true
                },
                {
                  name: 'aaa-2',
                  class: 'classA-2',
                  id: 'idA-2',
                  path: '',
                  click: (item, params) => {
                    console.log(params);
                  }
                }
              ]
            },
            {
              name: 'This is b group'
            },
            {
              name: 'bbb',
              path: ''
            },
            {
              divider: true
            },
            {
              name: 'ccc',
              path: ''
            }
          ])
        }
      };
    },
    template: `
    <div style="text-align:left">
      <x-list v-bind="scheme"></x-list>
    </div>
    `
  }))
);
