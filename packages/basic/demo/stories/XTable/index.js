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

let table = storiesOf('XTable', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

table.add(
  'Table',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          loading: boolean('loading', false),
          draggable: boolean('draggable', true),
          multiSelectable: boolean('multiSelectable', true),
          dragEndCallback: (data) => {
            console.log(data);
          },
          headers: object('headers', [
            { value: 'id', text: 'ID' },
            { value: 'name', text: 'Name' },
            { value: 'age', text: 'Age' },
            { value: 'sexy', text: 'Sexy' },
            { value: 'action', text: 'Actions' }
          ]),
          items: object('items', [
            { value: false, id: '3', name: 'c', age: '3', sexy: '3' },
            { value: false, id: '2', name: 'b', age: '2', sexy: '2' },
            { value: false, id: '1', name: 'a', age: '1', sexy: '1' },
            {
              value: false,
              id: '<a href="#">4</a>',
              name: 'd',
              age: '4',
              sexy: '4'
            }
          ]),
          actions: object('actions', [
            {
              content: 'add',
              size: 'small',
              color: '#1565C0',
              click: (item) => {
                this.$refs.table.setSelect(0);
                //console.log(item);
              }
            },
            {
              content: 'delete',
              size: 'small',
              color: '#FF5252',
              click: (item) => {
                console.log(item);
              }
            }
          ])
        }
      };
    },
    template: `
      <x-table ref="table" v-bind="scheme"></x-table>
    `
  }))
);
