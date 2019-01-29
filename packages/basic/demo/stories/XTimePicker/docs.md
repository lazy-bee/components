# TimePicker

### Usage

```html
<x-time-picker v-bind="scheme" @onChange="onChangeHandler" />
```

### Scheme

| name     | type    | default | accepted values           | description |
| -------- | ------- | ------- | ------------------------- | ----------- |
| format   | String  | hh:mm:A | hh:mm:A / HH:mm / hh:mm:a | time format |
| label    | String  | -       | -                         | input label |
| id       | String  | -       | -                         |          id |
| required | Boolean | false   | -                         | -           |

### Event

| name     | description           |
| -------- | --------------------- |
| onChange | get the updated value |

### Example

```html
<template>
  <x-time-picker v-bind="timeScheme" @onChange="onChangeHandler" />
</template>

<script>
  export default {
    data() {
      return {
        timeScheme: {
          format: 'hh:mm:A',
          label: 'Select time',
          required: true
        }
      };
    },
    methods: {
      onChangeHandler: function(data) {
        console.log(data.startTime);
      }
    }
  };
</script>
```
