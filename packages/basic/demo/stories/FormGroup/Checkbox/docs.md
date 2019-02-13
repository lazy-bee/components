# Checkbox

### Usage

```html
<x-checkbox v-bind="scheme" />
```

### Scheme

| name          | type    | default | description           |
| ------------- | ------- | ------- | --------------------- |
| title         | String  | -       | title of the checkbox |
| description   | String  | -       | input description     |
| required      | Boolean | false   | -                     |
| tip           | String  | -       | input tip             |
| errorMessages | String  | -       | error message         |
| items         | Array   | -       | -                     |
| id            | String  | -       | id                    |

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
          title: 'Select City:',
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
              value: 'Seattle',
              disabled: true
            }
          ],
          value: []
        }
      };
    }
  };
</script>
```
