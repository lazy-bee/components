# x-bar


## Demo
<!-- STORY -->



## Usage
```html
<x-bar v-bind="scheme"></x-bar>
```


## Scheme
| name      | type   | default   | description                                             |
| --------- | ------ | --------- | ------------------------------------------------------- |
| xAxis     | Object | -         | x axis type and data                                    |
| yAxis     | Object | -         | y axis type and data                                    |
| data      | Array  | -         | main data                                               |
| authority | String | available | component authority (available / unavailable / invisible) |


## Example
```html
<template>
  <x-bar v-bind="barScheme"></x-bar>
</template>

<script>
export default {
  data () {
    return {
      barScheme: {
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