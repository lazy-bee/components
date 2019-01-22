# x-iframe


## Demo
<!-- STORY -->

## Usage
```html
<x-iframe v-bind="scheme">
</x-iframe>
```


## Scheme
| name      | type   | default | accepted values             | description      |
| --------- | ------ | ------- | --------------------------- | ---------------- |
| url | String | -   | -  | url |
| encode   | Boolean | -   | - | encode url  |


## Example
```html
<template>
  <x-iframe v-bind="iframeScheme"></x-iframe>
</template>

<script>
export default {
  data () {
    return {
      iframeScheme: {
        url: 'https://www.baidu.com',
      }
    }
  }
}
</script>
```