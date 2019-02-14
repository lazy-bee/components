import { object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTable from '../../../src/components/XTable';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XTable, {}, {
      dragEndCallback: (data) => {
        console.log('dragEndCallback: ', data);
      },
      clickCallback: (data) => {
        console.log('clickCallback: ', data);
      },
      selectCallback: (data) => {
        console.log('selectCallback: ', data);
      },
      headers: object('headers', [
        {
          value:'thumbnail',
          text:'Thumbnail',
          render: (item) => {
            const{
              thumbnailImage = ''
            } = item;
            return `<div> <img src="${thumbnailImage}" style="width:70px; height:70px; padding:8px"> </div>`
          }
        },
        {
          value: 'id',
          text: 'ID'
        },
        {
          value: 'name',
          text: 'Name',
          render: (item) => {
            const {
              tooltipContent,
              name
            } = item;
            return `<div class="tooltip"> ${name}
            <i class="material-icons infoIcon">live_help</i>
            <span class="tooltiptext"> ${tooltipContent} </span></div>`;
          }
        },
        {
          value: 'switch',
          text: 'On/Off',
          type: 'switch',
          onSwitchChange: function(val, item){
            console.log('data:, ', val, item);
          },
        },
        {
          value: 'age',
          text: 'Age'
        },
        {
          value: 'status',
          text: 'Status',
          render: (item) => {
            let customColor = '';
            const {
              status
            } = item;
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
        {
          value: 'action',
          text: 'Actions'
        }
      ]),
      items: object('items', [{
          value: false,
          thumbnailImage:'https://a0.muscache.com/im/pictures/269b75cc-82a1-477c-81f4-db5d059b0242.jpg',
          id: '003',
          name: 'Howard',
          tooltipContent: 'Howard Stanley',
          switch: true,
          age: '30',
          status: 'complete'       
        },
        {
          value: false,
          thumbnailImage:'https://a0.muscache.com/im/pictures/2c7388f7-a899-4034-b67c-b36a902b6e35.jpg',
          id: '002',
          name: 'Kathryn',
          tooltipContent: 'Kathryn Spencer',
          switch: true,
          age: '35',
          status: 'confirm'        
        },
        {
          value: false,
          thumbnailImage:'https://a0.muscache.com/im/pictures/1d0cd98d-efa4-4ffc-b233-17861f4efca2.jpg',
          id: '001',
          name: 'Ashley',
          tooltipContent: 'Ashley Foster',
          switch: false,
          age: '25',
          status: 'confirm'         
        },
        {
          value: false,
          thumbnailImage:'https://a0.muscache.com/im/pictures/93537e16-042e-4dd5-b145-e14f3ed35c66.jpg',
          id: '<a href="#">004</a>',
          name: 'Nathan',
          tooltipContent: 'Nathan Tucker',
          switch: false,
          age: '28',
          status: 'pending'        
        }
      ]),
      actions: object('actions', [{
          content: 'search',
          color: '$slate-grey',
          square: true,
          outline: true,
          borderRadius: 4,
          click: (item) => {
            console.log('search', item.id);
          }
        },
        {
          faIcon: 'qrcode',
          color: '$slate-grey',
          square: true,
          outline: true,
          borderRadius: 4,
          click: (item) => {
            console.log('qrcode', item.id);
          }
        },
        {
          faIcon: 'trash-alt',
          color: '$slate-grey',
          square: true,
          outline: true,
          borderRadius: 4,
          click: (item) => {
            console.log('delete', item.id);
          }
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