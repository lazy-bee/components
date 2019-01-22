# x-tooltip


## Demo
<!-- STORY -->

## Usage
```html
<x-tooltip v-bind="scheme">
  <span slot="trigger">This is trigger</span>
</x-tooltip>
```


## Scheme
| name      | type   | default | accepted values             | description      |
| --------- | ------ | ------- | --------------------------- | ---------------- |
| direction | String | right   | top / bottom / left / right  | tooltip position |
| content   | String | -   | - | tooltip content  |
| authority | String | available | available / unavailable / invisible | component authority |


## Slot
| name    | description                   |
| ------- | ----------------------------- |
| trigger | which element trigger tooltip |


## Example
```html
<template>
  <x-tooltip v-bind="tooltipScheme"></x-tooltip>
</template>

<script>
export default {
  data () {
    return {
      tooltipScheme: {
        direction: 'bottom',
        content: 'This is some tooltip'
      }
    }
  }
}
</script>
```