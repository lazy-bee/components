# Select Filter

### Usage

```html
<x-select-filter v-bind="scheme" />
```

### Scheme

| name           | type    | default | description                                                         |
| -------------- | ------- | ------- | ------------------------------------------------------------------- |
| items          | Array   | -       | items's value                                                       |
| label          | String  | -       | input label                                                         |
| id             | String  | -       | id                                                                  |
| placeholder    | String  | -       | input placeholder                                                   |
| required       | Boolean | false   | -                                                                   |
| multiple       | Boolean | false   | Changes select to multiple. Accepts array for value                 |
| chips          | Boolean | false   | Changes display of selections to chips                              |
| deletableChips | Boolean | false   | Adds a remove icon to selected chips                                |
| clearable      | Boolean | false   | Add input clear functionality, default icon is Material Icons clear |
| prependIcon    | String  | -       | use the Material Icon to prepends an icon to the component          |
| suffix         | String  | -       | Displays suffix text                                                |
| errorMessages  | String  | -       | error message                                                       |
| disabled       | Boolean | false   | Disables the input                                                  |

### Example

```html
<template>
  <x-select-filter v-bind="selectFilterScheme" />
</template>

<script>
  export default {
    date() {
      return {
        selectFilterScheme: {
          label: 'Select City',
          items: [
            {
              text: 'New York',
              value: 'New York'
            },
            {
              text: 'Chicago',
              value: 'Chicago'
            },
            {
              text: 'Seattle',
              value: 'Seattle',
              disabled: true
            }
          ],

          chips: true,
          multiple: true
        }
      };
    }
  };
</script>
```
