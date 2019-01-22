# x-alert


## Demo
<!-- STORY -->

## Usage
```html
<x-alert v-bind="scheme"></x-alert>
```


## Scheme
| name | type   | default | accepted values | description |
| ---- | ------ | ------- | --------------- | ----------- |
| type | String | -       |   | alert name   |
| message | String | -       | -               | alert  message  |
| value  | Boolean | -       | -               |  |


## Example
```html
<template>
  <x-alert v-bind="alertScheme"></x-alert>
</template>

<script>
export default {
  data () {
    return {
      alertScheme: {
        name: 'line-scale',
        color: '#1565C0'
        size: '20px'
      }
    }
  }
}
</script>
```