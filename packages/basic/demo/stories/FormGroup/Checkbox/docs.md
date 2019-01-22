# Checkbox

### Usage

```html
<x-checkbox v-bind="scheme"/> 
```

### Scheme

| name   | type   | default | description |
| ------ | ------ | ------- | ----------- |
| items  | Array  | -       | -           |


### Example

```html
<template>
  <x-checkbox v-bind="checkboxScheme"/>
</template>

<script>
  export default {
    data() {
      return {
        checkboxScheme: {
          items: [
            {
             label: 'New York',
             value: 'New York'
            },
            {
             label: 'Chicago',
             value: 'Chicago'
            },
            {
             label: 'Seattle',
             value: 'Seattle'
            }
          ],
          value:[]
        }
      };
    }
  };
</script>
```