# x-tabs


## Demo
<!-- STORY -->


## Usage
```html
<x-tabs v-bind="scheme"></x-tabs>
```


## Scheme
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
tabs: [ { label: 'aaa', slot: 'a' }, { label: 'bbb', slot: 'b' } ]
```

## Example
```html
<template>
  <x-tabs v-bind="tabsScheme">
    <div slot="a">
      this is some a content
    </div>

    <div slot="b">
      this is some b content
    </div>

    <div slot="c">
      this is some c content
    </div>
  </x-tabs>
</template>

<script>
export default {
  data () {
    return {
      tabsScheme: {
        tabs: [
          { label: 'aaa', slot: 'a' },
          { label: 'bbb', slot: 'b' },
          { label: 'ccc', slot: 'c' }
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