# x-layout


## Demo
<!-- STORY -->


## Usage
```html
<x-layout v-bind="scheme" ></x-layout>
```


## Scheme
| name         | type    | default | accepted values        | description                                        |
| ------------ | ------- | ------- | ---------------------- | -------------------------------------------------- |
| type         | String  | admin   | admin / simple / error | -                                                  |
| toolbarClass | String  | -       | -                      | -                                                  |
| drawerClass  | String  | -       | -                      | -                                                  |
| drawerWidth  | Number  | 200     | -                      | navigation drawer width                            |
| drawerRight  | Boolean | false   | -                      | places navigation drawer on the right              |
| clipped      | Boolean | true    | -                      | places clipped navigation drawer under the toolbar |

## Slot
| name    | description                         |
| ------- | ----------------------------------- |
| toolbar | app toolbar                         |
| drawer  | app navigation drawers              |
| content | app content                         |
| header  | app header (only for simple layout) |
| footer  | app footer (only for simple layout) |


## Example
```html
<template>
  <x-layout v-bind="layoutScheme">
    <div slot="toolbar">this is toolbar</div>
    <div slot="drawer">this is drawer</div>
    <div slot="content">this is admin content</div>
  </x-layout>
</template>

<script>
export default {
  data () {
    return {
      layoutScheme: {
        type: 'admin',
        drawerWidth: 300,
        drawerRight: true,
        clipped: true
      }
    }
  }
}
</script>
```