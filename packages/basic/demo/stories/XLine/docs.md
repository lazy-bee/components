# x-line


## Demo
<!-- STORY -->


## Usage
```html
<x-line v-bind="scheme"></x-line>
```


## Scheme
| name      | type   | default   | description                                               |
| --------- | ------ | --------- | --------------------------------------------------------- |
| xAxis     | Object | -         | x axis type and data                                      |
| yAxis     | Object | -         | y axis type and data                                      |
| data      | Array  | -         | main data                                                 |
| authority | String | available | component authority (available / unavailable / invisible) |

## Example
```html
<template>
  <x-line v-bind="lineScheme"></x-line>
</template>

<script>
export default {
  data () {
    return {
      lineScheme: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        data: [120, 200, 150, 80, 70, 110, 130]
      }
    }
  }
}
</script>
```