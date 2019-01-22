# Radio

### Usage

```html
<x-radio v-bind="scheme" />
```

### Scheme

| name   | type    | default | description |
| ------ | ------- | ------- | ----------- |
| items  | Array   | -       | -           |
| column | Boolean | false   | -           |

### Example

```html
<template>
  <x-radio v-bind="radioScheme" />
</template>

<script>
  export default {
    data() {
      return {
        radioScheme: {
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
          column:true,
          value:''
        }
      };
    }
  };
</script>
```
