# Notification



### Usage
```html
<x-notification v-bind="scheme"/>
```


### Scheme
| name | type   | default | accepted values | description |
| ---- | ------ | ------- | --------------- | ----------- |




### Example
```html
<template>
  <x-notification v-bind="notificationScheme"/>
</template>

<script>
export default {
  data () {
    return {
      notificationScheme: {
        xAxis: 'right',
        yAxis: 'top'
        text: 'this is notification'
      }
    }
  }
}
</script>
```