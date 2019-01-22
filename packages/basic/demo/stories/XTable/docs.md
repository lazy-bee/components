# Table

### Usage

```html
<x-table v-bind="scheme" />
```

### Scheme

| name            | type     | default | description             |
| --------------- | -------- | ------- | ----------------------- |
| headers         | Array    | -       | table header column     |
| items           | Array    | -       | table data              |
| actions         | Array    | -       | table action coloumn    |
| multiSelectable | Boolean  | true    | select multiple item    |
| selectCallback  | Function | -       | select item callback    |
| draggable       | Boolean  | false   | draggable               |
| loading         | Boolean  | false   | Loading status of table |

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

### Actions

> Refer to Material Icon to get the content of icon: https://material.io/tools/icons

```javascript
actions: [
  {
    content: 'search', // Material icon name
    click: function(item, event) {
      console.log(this); // XTable component
      console.log(this.getSelected()); // XTable method
      console.log(item); // Row item object
      console.log(event); // Click event
    }
  },
  {
    content: 'delete_outline',
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
    data () {
      return {
        tableScheme: {
          headers: [
            { value: 'id', text: 'ID' },
            { value: 'name', text: 'Name',
              render: (item) => {
              const {tooltipContent, name} = item;
              return `<div class="tooltip"> ${name}
              <i class="material-icons infoIcon">live_help</i>
              <span class="tooltiptext"> ${tooltipContent} </span></div>`;
              }
            },
            { value: 'age', text: 'Age' },
            { value: 'status', text: 'Status',
              render: (item) => {
                let customColor = '';
                const {status} = item;
                switch (status) {
                  case 'confirm':  // status case defined by yourself
                    customColor = 'confirm';
                    break;
                  case 'pending':
                    customColor = 'pending';
                    break;
                  case 'complete':
                    customColor = 'complete';
                }
                return `<span class="dot ${customColor}" >${status}</span>`; },
            { value: 'action', text: 'Actions' }
          ],
          items: [
            { value: false, id: '003', name: 'Howard', age: '30', status: 'complete' ,tooltipContent: 'Howard Stanley'},
            { value: false, id: '002', name: 'Kathryn', age: '35', status: 'confirm' , tooltipContent: 'Kathryn Spencer'},
            { value: false, id: '001', name: 'Ashley', age: '25', status: 'confirm' ,tooltipContent: 'Ashley Foster'},
            { value: false, id: '004', name: 'Nathan', age: '28', status: 'pending' ,tooltipContent: 'Nathan Tucker' }
          ],
          actions: [
            {
              content: 'search',
              square:true,
              outline:true,
              borderRadius:4,
              color:'666',
              click: (item) => {
                console.log(item);
              }
            },
            {
              content: 'delete_outline',
              click: (item) => {
                console.log(item);
              }
            }
          ]
        }
      }
    }
  }
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
