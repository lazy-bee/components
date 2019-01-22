# Tabs



### Usage
```html
<x-tabs v-bind="scheme"> ... </x-tabs>
```


### Scheme
| name     | type    | default | accepted values | description               |
| -------- | ------- | ------- | --------------- | ------------------------- |
| type     | String  | card    | card / line     | tabs type                 |
| control  | Boolean | false   | -               | show next and prev button |
| position | String  | top     | -               | tab position              |
| tabs     | Array   | -       | -               | tabs config               |
| prev     | Object  | -       | -               | prev button config        |
| next     | Object  | -       | -               | next button config        |
| authority | String | available | available / unavailable / invisible | component authority |


### Tabs
```javascript
tabs: [ { label: 'New York', slot: 'tab1' }, { label: 'Chicago', slot: 'tab2' } ]
```

### Example
```html
<template>
  <x-tabs v-bind="tabsScheme">
    <div slot="tab1">
      this is some tab1 content
    </div>

    <div slot="tab2">
      this is some tab2 content
    </div>

    <div slot="tab3">
      this is some tab3 content
    </div>
  </x-tabs>
</template>

<script>
export default {
  data () {
    return {
      tabsScheme: {
        tabs: [
          { label: 'New York', slot: 'tab1' },
          { label: 'Chicago', slot: 'tab2' },
          { label: 'Califonia', slot: 'tab3' }
        ],
        prev: {
          content: 'Prev button'
        }
      }
    }
  }
}
</script>
```