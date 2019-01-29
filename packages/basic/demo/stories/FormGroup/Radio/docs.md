# Radio

### Usage

```html
<x-radio v-bind="scheme" />
```

### Scheme

| name       | type    | default | description             |
| ---------- | ------- | ------- | ----------------------- |
| radioTitle | String  | -       | Title of the radios     |
| required   | Boolean | false   | -                       |
| column     | Boolean | false   | vertical or horizobntal |
| items      | Array   | -       | radio items             |

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
          radioTitle: 'Select City:',
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
          column: true,
          value: ''
        }
      };
    }
  };
</script>
```
