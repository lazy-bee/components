# x-pagination


## Demo
<!-- STORY -->


## Usage
```html
<x-pagination v-bind="scheme"></x-pagination>
```


## Scheme
| name   | type    | default | accepted values | description             |
| ------ | ------- | ------- | --------------- | ----------------------- |
| length | String  | 6       | -               | pagination count          |
| circle | Boolean | false   | -               | pagination item circle |
| click | Function | -   | -               | pagination item click |
| authority | String  | available | available / unavailable / invisible | component authority                  |

## Example
```html
<template>
  <x-pagination v-bind="paginationScheme"></x-pagination>
</template>

<script>
export default {
  data () {
    return {
      paginationScheme: {
        length: 6,
        circle: true
      }
    }
  }
}
</script>
```