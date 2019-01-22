# DateTimePicker

### Usage

```html
<x-datetime-picker v-bind="scheme" @onChange="onChangeHandler" />
```

### Scheme

| name       | type    | default | accepted values | description                    |
| ---------- | ------- | ------- | --------------- | ------------------------------ |
| singleDate | Boolean | false   | -               | select period or a single date |
| alignRight | Boolean | false   | -               | modal align-right              |

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
          singleDate: true
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
