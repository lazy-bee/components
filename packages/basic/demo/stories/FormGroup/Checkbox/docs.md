# Checkbox

### Usage

```html
<x-checkbox v-bind="scheme" />
```

### Scheme

| name          | type    | default | description           |
| ------------- | ------- | ------- | --------------------- |
| checkboxTitle | String  | -       | Title of the checkbox |
| required      | Boolean | false   | -                     |
| items         | Array   | -       | -                     |

### Example

```html
<template>
  <x-checkbox v-bind="checkboxScheme" />
</template>

<script>
  export default {
    data() {
      return {
        checkboxScheme: {
          checkboxTitle: 'Select City:',
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
          value: []
        }
      };
    }
  };
</script>
```
