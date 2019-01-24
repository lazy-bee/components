# Spin


### Usage
```html
<x-spin v-bind="scheme"/>
```


### Scheme
| name | type   | default | accepted values | description |
| ---- | ------ | ------- | --------------- | ----------- |
| name | String | -       | see list below   | spin name   |
| color | String | -       | -               | spin color  |
| size  | String | -       | -               | spin size   |

### Spin Name List
- line-scale
- line-scale-party
- line-scale-pulse-out
- line-scale-pulse-out-rapid
- line-spin-fade
- ball-beat
- ball-clip-rotate
- ball-clip-rotate-multiple
- ball-clip-rotate-pulse
- ball-grid-beat
- ball-grid-pulse
- ball-pulse
- ball-pulse-sync
- ball-rotate
- ball-scale
- ball-scale-multiple
- ball-scale-ripple
- ball-scale-ripple-multiple
- ball-spin-fade
- ball-triangle-path
- cube-transition
- square-spin


### Example
```html
<template>
  <x-spin v-bind="spinScheme"/>
</template>

<script>
export default {
  data () {
    return {
      spinScheme: {
        name: 'line-scale',
        color: '#FF0039'
        size: '20px'
      }
    }
  }
}
</script>
```