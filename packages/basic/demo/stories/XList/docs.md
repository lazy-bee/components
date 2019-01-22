# x-list


## Demo
<!-- STORY -->


## Usage
```html
<x-list v-bind="scheme"></x-list>
```


## Scheme
| name      | type   | default   | description                                               |
| --------- | ------ | --------- | --------------------------------------------------------- |
| params    | Object | -         | params pass to list item click callback                   |
| list      | Array  | -         | list item explained below                                 |
| authority | String | available | component authority (available / unavailable / invisible) |

## List
```javascript
list: [
  { name: 'aaa', path: '/aaa' },
  { name: 'bbb', path: '/bbb' },
  { divider: true }
]
```

## Example
```html
<template>
  <x-list v-bind="listScheme"></x-list>
</template>

<script>
export default {
  data () {
    return {
      listScheme: {
        list: [
          {
            name: 'aaa',
            path: '/aaa',
            list: [
              { name: 'aaa-1', path: '/aaa-1' },
              { name: 'aaa-2', path: '/aaa-2' }
            ]
          },
          { name: 'bbb', path: '/bbb' },
          { divider: true },
          { title: 'ccc', path: '/ccc' }
        ]
      }
    }
  }
}
</script>
```