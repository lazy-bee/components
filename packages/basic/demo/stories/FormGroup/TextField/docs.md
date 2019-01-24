# Text Field

### Usage

```html
<x-textfield v-bind="scheme" />
```

### Scheme

| name          | type    | default | description                      |
| ------------- | ------- | ------- | -------------------------------- |
| name          | String  | -       | input name                       |
| type          | String  | -       | input type                       |
| label         | String  | -       | input label                      |
| value         | String  | -       | input value                      |
| placeholder   | String  | -       | input placeholder                |
| prependIcon   | String  | -       | prepend an icon to the component |
| appendIcon    | String  | -       | append an icon to the component  |
| prefix        | String  | -       | displays prefix text             |
| suffix        | String  | -       | Displays suffix text             |
| required      | Boolean | false   | -                                |
| errorMessages | String  | -       | error message                    |
| disable       | Boolean | false   | -                                |
| rules         | Array   | -       | field validate rules             |

### Example

```html
<template>
  <x-textfield v-bind="textFieldScheme" />
</template>

<script>
  export default {
    date() {
      return {
        textFieldScheme: {
          type: 'text',
          labe: 'Email',
          name: 'email',
          placeholder: 'email'
        }
      };
    }
  };
</script>
```
