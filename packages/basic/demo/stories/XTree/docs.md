# x-tree


## Demo
<!-- STORY -->

## Usage
```html
<x-tree v-bind="scheme"></x-tree>
```


## Scheme
| name      | type    | default   | description                                               |
| --------- | ------- | --------- | --------------------------------------------------------- |
| data      | Array   | -         | tree data                                                 |
| draggable | Boolean | false     | tree draggable                                            |
| authority | String  | available | component authority (available / unavailable / invisible) |


## Example
```html
<template>
  <x-tree v-bind="treeScheme"></x-tree>
</template>

<script>
export default {
  data () {
    return {
      treeScheme: {
        data: [
          {
            label: '一级 1',
            children: [
              {
                label: '二级 1-1',
                children: [
                  {
                    label: '三级 1-1-1'
                  }
                ]
              }
            ]
          },
          {
            label: '一级 2',
            children: [
              {
                label: '二级 2-1'
              }
            ]
          }
        ]
        draggable: true
      }
    }
  }
}
</script>
```