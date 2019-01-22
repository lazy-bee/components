# x-table


## Demo
<!-- STORY -->


## Usage
```html
<x-table v-bind="scheme"></x-table>
```


## Scheme
| name            | type    | default | description             |
| --------------- | ------- | ------- | ----------------------- |
| headers         | Array   | -       | table header col        |
| items           | Array   | -       | table data              |
| actions         | Array   | -       | table action col        |
| multiSelectable | Boolean | true   | select multiple item    |
| selectCallback | Function | -   | select item callback    |
| draggable       | Boolean | false   | draggable               |
| loading         | Boolean | false   | Loading status of table |
| authority | String | available | component authority (available / unavailable / invisible) |


## Headers
```javascript
headers: [
  { value: 'id', text: 'ID' },
  { value: 'name', text: 'Name' },
  { value: 'age', text: 'Age' },
  { value: 'sexy', text: 'Sexy' },
  { value: 'action', text: 'Actions' }
]
```


## Items
```javascript
items: [
  { value: false, id: '1', name: 'a', age: '1', sexy: '1' },
  { value: false, id: '2', name: 'b', age: '2', sexy: '2' },
  { value: false, id: '3', name: 'c', age: '3', sexy: '3' },
  { value: false, id: '4', name: 'd', age: '4', sexy: '4' }
]
```


## Actions
```javascript
actions: [
  {
    content: 'add',
    size: 'small',
    color: '#1565C0',
    click: (item) => {
      console.log(item);
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
]
```


## Example
```html
<template>
  <x-table v-bind="tableScheme"></x-table>
</template>

<script>
export default {
  data () {
    return {
      tableScheme: {
        headers: [
          { value: 'id', text: 'ID' },
          { value: 'name', text: 'Name' },
          { value: 'age', text: 'Age' },
          { value: 'sexy', text: 'Sexy' },
          { value: 'action', text: 'Actions' }
        ],
        items: [
          { value: false, id: '1', name: 'a', age: '1', sexy: '1' },
          { value: false, id: '2', name: 'b', age: '2', sexy: '2' },
          { value: false, id: '3', name: 'c', age: '3', sexy: '3' },
          { value: false, id: '4', name: 'd', age: '4', sexy: '4' }
        ],
        actions: [
          {
            content: 'add',
            size: 'small',
            color: '#1565C0',
            click: (item) => {
              console.log(item);
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
        ]
      }
    }
  }
}
</script>
```