# x-dialog


## Demo
<!-- STORY -->


## Usage
```html
<x-dialog v-bind="scheme"></x-dialog>
```


## Scheme
| name      | type   | default   | description                                               |
| --------- | ------ | --------- | --------------------------------------------------------- |
| persistent      | Boolean | true         | clicking outside will not dismiss the dialog                                         |
| width      | String | -         | dialog width                                        |

| authority | String | available | component authority (available / unavailable / invisible) |

## Example
```html
<template>
  <x-dialog v-bind="dialogScheme"></x-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialogScheme: {
        persistent: true,
        width: '50%'
      }
    }
  }
}
</script>
```