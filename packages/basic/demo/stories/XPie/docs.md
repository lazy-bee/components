# x-pie


## Demo
<!-- STORY -->

## Usage
```html
<x-pie v-bind="scheme"></x-pie>
```

## Scheme
| name      | type   | default   | description                                               |
| --------- | ------ | --------- | --------------------------------------------------------- |
| data      | Array  | -         | pie data                                                  |
| authority | String | available | component authority (available / unavailable / invisible) |


## Example
```html
<template>
  <x-pie v-bind="pieScheme"></x-pie>
</template>

<script>
export default {
  data () {
    return {
      pieScheme: {
        data: [
          { value: 335, name: 'aaa' },
          { value: 310, name: 'bbb' },
          { value: 234, name: 'ccc' },
          { value: 135, name: 'ddd' },
          { value: 1548, name: 'eee' }
        ]
      }
    }
  }
}
</script>
```