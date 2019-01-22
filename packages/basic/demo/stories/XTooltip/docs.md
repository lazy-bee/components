# Tooltip

### Usage

```html
<x-tooltip v-bind="scheme">
  <div slot="activator">Trigger</div>
</x-tooltip>
```

### Scheme

| name          | type    | default | accepted values              | description                        |
| -----------   | ------- | ------- | ---------------------------- |----------------------------------- |
| value         | Boolean | false   | -                            | Controls visibility                |
| content       | String  | -       | -                            | tooltip content                    |
| contentClass  | String  | -       | -                            | set a custom class to define tooltip style|
| color         | String  | #2A2E3D | -                            | tooltip background color           |
| maxWidth      | String  | 200px   | -                            | the maximum width of the content   |
| direction     | String  | bottom  | top / right / bottom / left  | direction of content               |
 

### Slot

| name       | description              |
| ---------- | ------------------------ |
| activator  | place trigger content    |

### Example

```html
<template>
  <x-tooltip v-bind="scheme">
    <div slot="activator">Trigger</div>
  </x-tooltip>
</template>

<script>
export default {
  data () {
    return {
      tooltipScheme: {
        content: 'Hello! This is tootip content box',
        direction:'bottom',
        contentClass:'customClass'
      }
    }
  }
}
</script>

<style scoped>
  .customClass{
    border-radius:10px;
  }
</style>
```
