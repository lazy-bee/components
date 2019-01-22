# x-icon


## Demo
<!-- STORY -->


## Usage
```html
<x-icon v-bind="scheme"></x-icon>
```


## Scheme
| name      | type   | default   | description                                               |
| --------- | ------ | --------- | --------------------------------------------------------- |
| name      | String | -         | icon name                                                 |
| size      | String | -         | icon size eg.16px                                         |
| authority | String | available | component authority (available / unavailable / invisible) |

## Example
```html
<template>
  <x-icon v-bind="iconScheme"></x-icon>
</template>

<script>
export default {
  data () {
    return {
      iconScheme: {
        name: 'email',
        size: '18px'
      }
    }
  }
}
</script>
```