# menu


### Usage
```html
<x-menu v-bind="scheme"/>
```


### Scheme
| name      | type   | default   | accepted values                     | description                                 |
| --------- | ------ | --------- | ----------------------------------- | ------------------------------------------- |
| openType  | String | click     | click / hover                       | open menu in click trigger or hover trigger |
| menuList  | Array  | -         | -                                   | menu list, just list list component         |
| authority | String | available | available / unavailable / invisible | component authority                         |

### Slot
| name    | description                |
| ------- | -------------------------- |
| trigger | which element trigger menu |


### Example
```html
<template>
  <x-menu v-bind="menuScheme"/>
</template>

<script>
export default {
  data () {
    return {
      menuScheme: {
        openType: 'hover',
        menuList: {
          list: [
            { name: 'aaa' },
            { name: 'bbb' }
          ]
        }
      }
    }
  }
}
</script>
```