# Table

### Usage

```html
<x-table v-bind="scheme" />
```

### Action Icon

> Material Design Icon: https://material.io/tools/icons

> Font Awesome: https://fontawesome.com/icons?s=solid

### Scheme

| name            | type     | default | description                                                    |
| --------------- | -------- | ------- | -------------------------------------------------------------- |
| headers         | Array    | -       | table header column                                            |
| items           | Array    | -       | table data                                                     |
| multiSelectable | Boolean  | true    | select multiple item                                           |
| selectCallback  | Function | -       | select item callback                                           |
| draggable       | Boolean  | false   | draggable                                                      |
| loading         | Boolean  | false   | Loading status of table                                        |
| actions         | Array    | -       | table action coloumn                                           |
| contant         | String   | -       | material design icon for action button                         |
| faIcon          | String   | -       | font awesome icon for action button                            |
| type            | String   | -       | add type as 'switch', show switch column                        |
| onSwitchChange  | Function | -       | get switch value when the input is changed by user interaction |

### Headers

```javascript
headers: [
  { value: 'id', text: 'ID' },
  { value: 'name', text: 'Name' },
  { value: 'age', text: 'Age' },
  { value: 'status', text: 'Status' },
  { value: 'action', text: 'Actions' }
];
```

### Items

```javascript
items: [
  {
    value: false,
    id: '001',
    name: 'Ashley',
    age: '25',
    status: 'fail',
    tooltipContent: 'Ashley Foster'
  },
  {
    value: false,
    id: '002',
    name: 'Kathryn',
    age: '35',
    status: 'inprogress',
    tooltipContent: 'Kathryn Spencer'
  },
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
    id: '004',
    name: 'Nathan',
    age: '28',
    status: 'pending',
    tooltipContent: 'Nathan Tucker'
  }
];
```

```javascript
actions: [
  {
    content: 'search', // Material Design Icon name
    click: function(item, event) {
      console.log(this); // XTable component
      console.log(this.getSelected()); // XTable method
      console.log(item); // Row item object
      console.log(event); // Click event
    }
  },
  {
    faIcon: 'trash-alt', // Font Awesome Icon name
    click: (item) => {
      console.log(item);
    }
  }
];
```

### Example

```html
<template>
  <x-table v-bind="tableScheme" />
</template>

<script>
  export default {
    data() {
      return {
        tableScheme: {
          headers: [
            {
              value: 'thumbnail',
              text: 'Thumbnail',
              render: (item) => {
                const { thumbnailImage = '' } = item;
                return `<div> <img src="${thumbnailImage}" style="width:70px; height:70px; padding:8px"> </div>`;
              }
            },
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
            {
              value: 'switch',
              text: 'On/Off',
              type: 'switch',
              onSwitchChange: function(val, item) {
                console.log('data:, ', val, item);
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
                  case 'confirm': // status case defined by yourself
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
          ],
          items: [
            {
              value: false,
              thumbnailImage:
                'https://a0.muscache.com/im/pictures/269b75cc-82a1-477c-81f4-db5d059b0242.jpg',
              id: '003',
              name: 'Howard',
              tooltipContent: 'Howard Stanley',
              switch: true,
              age: '30',
              status: 'complete'
            },
            {
              value: false,
              thumbnailImage:
                'https://a0.muscache.com/im/pictures/2c7388f7-a899-4034-b67c-b36a902b6e35.jpg',
              id: '002',
              name: 'Kathryn',
              tooltipContent: 'Kathryn Spencer',
              switch: true,
              age: '35',
              status: 'confirm'
            },
            {
              value: false,
              thumbnailImage:
                'https://a0.muscache.com/im/pictures/1d0cd98d-efa4-4ffc-b233-17861f4efca2.jpg',
              id: '001',
              name: 'Ashley',
              tooltipContent: 'Ashley Foster',
              switch: false,
              age: '25',
              status: 'confirm'
            },
            {
              value: false,
              thumbnailImage:
                'https://a0.muscache.com/im/pictures/93537e16-042e-4dd5-b145-e14f3ed35c66.jpg',
              id: '<a href="#">004</a>',
              name: 'Nathan',
              tooltipContent: 'Nathan Tucker',
              switch: false,
              age: '28',
              status: 'pending'
            }
          ],
          actions: [
            {
              content: 'search', //using material design icon
              color: '$slate-grey',
              square: true,
              outline: true,
              borderRadius: 4,
              click: (item) => {
                console.log('search', item.id);
              }
            },
            {
              faIcon: 'qrcode', //using font Awesome icon
              color: '$slate-grey',
              square: true,
              outline: true,
              borderRadius: 4,
              click: (item) => {
                console.log('qrcode', item.id);
              }
            },
            {
              faIcon: 'trash-alt', //using font Awesome icon
              color: '$slate-grey',
              square: true,
              outline: true,
              borderRadius: 4,
              click: (item) => {
                console.log('delete', item.id);
              }
            }
          ]
        }
      };
    }
  };
</script>

<style lang="stylus" scoped>

  /* ---- status ---- */
  span.dot {
    &:before {
      content: '';
      display: inline-block;
      border-radius: 50%;
      width: 7px;
      height: 7px;
      margin-right: 6px;
      background:red;
    }
    &.confirm:before {
      background:#6289f5;
    }
    &.pending:before {
      background:#ffa74c;
    }
    &.complete:before {
      background:#20c785;
    }
  }
</style>
```
