import { object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTable from '../../../src/components/XTable';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XTable,
    {},
    {
      dragEndCallback: (data) => {
        console.log(data);
      },
      clickCallback: (data) => {
        console.log(data);
      },
      headers: object('headers', [
        { value: 'id', text: 'ID' },
        {
          value: 'name',
          text: 'Name',
          render: (item) => {
            const { tooltipContent, name } = item;
            return `<div class="tooltip"> ${name}
            <i class="material-icons infoIcon">live_help</i>
            <span class="tooltiptext"> ${tooltipContent} </span></div>`;
          }
        },
        { value: 'age', text: 'Age' },
        {
          value: 'status',
          text: 'Status',
          render: (item) => {
            let customColor = '';
            const { status } = item;
            switch (status) {
              case 'confirm':
                customColor = 'confirm';
                break;
              case 'pending':
                customColor = 'pending';
                break;
              case 'complete':
                customColor = 'complete';
            }
            return `<span class="dot ${customColor}" >${status}</span>`;
          }
        },
        { value: 'action', text: 'Actions' }
      ]),
      items: object('items', [
        {
          value: false,
          id: '003',
          name: 'Howard',
          age: '30',
          status: 'complete',
          tooltipContent: 'Howard Stanley'
        },
        {
          value: false,
          id: '002',
          name: 'Kathryn',
          age: '35',
          status: 'confirm',
          tooltipContent: 'Kathryn Spencer'
        },
        {
          value: false,
          id: '001',
          name: 'Ashley',
          age: '25',
          status: 'confirm',
          tooltipContent: 'Ashley Foster'
        },
        {
          value: false,
          id: '<a href="#">004</a>',
          name: 'Nathan',
          age: '28',
          status: 'pending',
          tooltipContent: 'Nathan Tucker'
        }
      ]),
      actions: object('actions', [
        {
          content: 'search',
          color: '$slate-grey',
          square: true,
          outline: true,
          borderRadius: 4,
          size: 'small',
          click: (item) => {
            console.log('search', item.id);
          }
        },
        {
          content: 'delete_outline',
          color: '$slate-grey',
          square: true,
          outline: true,
          borderRadius: 4,
          size: 'small'
        }
      ])
    },
    `
<div style="width:80vw">
  <x-table v-bind="scheme"></x-table>
</div>
    `
  )
);
