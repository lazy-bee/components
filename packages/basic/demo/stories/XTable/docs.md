# Table

### Usage

```html
<x-table v-bind="scheme" />
```

### Action Icon

> Material Design Icon: https://material.io/tools/icons

> Font Awesome: https://fontawesome.com/icons?s=solid

### Scheme

| name            | type     | default | description                            |
| --------------- | -------- | ------- | -------------------------------------- |
| headers         | Array    | -       | table header column                    |
| items           | Array    | -       | table data                             |
| multiSelectable | Boolean  | true    | select multiple item                   |
| selectCallback  | Function | -       | select item callback                   |
| draggable       | Boolean  | false   | draggable                              |
| loading         | Boolean  | false   | Loading status of table                |
| actions         | Array    | -       | table action coloumn                   |
| contant         | String   | -       | material design icon for action button |
| faIcon          | String   | -       | font awesome icon for action button    |

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
              id: '004',
              name: 'Nathan',
              age: '28',
              status: 'pending',
              tooltipContent: 'Nathan Tucker'
            }
          ],
          actions: [
            {
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
