# DateTimePicker

### Usage

```html
<x-datetime-picker v-bind="scheme" @onChange="onChangeHandler" />
```

### Scheme

| name        | type    | default | accepted values           | description                    |
| ----------- | ------- | ------- | ------------------------- | ------------------------------ |
| startDate   | Date    | -       | new Date()                | start date of the range        |
| endDate     | Date    | -       | new Date()                | end date of the range          |
| singleDate  | Boolean | false   | -                         | select period or a single date |
| timeFormat  | String  | hh:mm:A | hh:mm:A / HH:mm           | time format                    |
| label       | String  | -       | -                         | input label                    |
| description | String  | -       | input description         | -                              |
| required    | Boolean | false   | -                         | -                              |

### Event

| name     | description           |
| -------- | --------------------- |
| onChange | get the updated value |

### Example

```html
<template>
  <x-datetime-picker v-bind="datetimeScheme" @onChange="onChangeHandler" />
</template>

<script>
  export default {
    data() {
      return {
        datetimeScheme: {
          singleDate: true,
          alignRight: true,
          timeFormat: 'HH:mm',
          id: 'dateInputId',
          label: 'Select Date',
          required: true
        }
      };
    },
    methods: {
      onChangeHandler: function(data) {
        console.log(data.startDate);
        console.log(data.startTime);
        // console.log(data.startDate) for multiple selection
        // console.log(data.startTime) for multiple selection
      }
    }
  };
</script>
```
