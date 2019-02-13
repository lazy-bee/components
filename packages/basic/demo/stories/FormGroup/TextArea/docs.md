# Text Area

### Usage

```html
<x-textarea v-bind="scheme" />
```

### Scheme

| name          | type    | default | description                      |
| ------------- | ------- | ------- | -------------------------------- |
| name          | String  | -       | input name                       |
| label         | String  | -       | input label                      |
| description   | String  | -       | input description                |
| required      | Boolean | false   | -                                |
| value         | String  | -       | input value                      |
| placeholder   | String  | -       | input placeholder                |
| prependIcon   | String  | -       | prepend an icon to the component |
| appendIcon    | String  | -       | append an icon to the component  |
| tip           | String  | -       | input tip                        |
| errorMessages | String  | -       | error message                    |
| disable       | Boolean | false   | -                                |
| rules         | Array   | -       | field validate rules             |
| id            | String  | -       | id                               |

### Example

```html
<template>
  <x-textarea v-bind="textareaScheme" />
</template>

<script>
  export default {
    date() {
      return {
        textareaScheme: {
          labe: 'Comment',
          name: 'comment',
          placeholder: 'Please leave your comment here'
        }
      };
    }
  };
</script>
```
