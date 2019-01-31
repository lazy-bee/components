# Pie Chart

### Usage

```html
<x-pie v-bind="scheme" />
```

### Scheme

| name         | type    | default  | accepted values       | description                  |
| ------------ | ------- | -------- | --------------------- | ---------------------------- |
| data         | Array   | -        | -                     | pie data                     |
| radius       | String  | 50%      | -                     | radius of the pie chart      |
| legendShow   | Boolean | true     | -                     | display or hide legend       |
| legendOrient | String  | vertical | vertical / horizontal | the orient of legend         |
| legendX      | String  | left     | left / center / right | position of x-axis of legend |
| legendY      | String  | top      | top / middle / bottom | position of y-axis of legend |
| legendGap    | Number  | 10       | -                     | the gap of each legend item  |
| colors       | Array   | -        | -                     | pie chart colors             |

### Example

```html
<template>
  <x-pie v-bind="pieScheme" />
</template>

<script>
  export default {
    data() {
      return {
        pieScheme: {
          data: [
            {
              value: 600,
              name: 'New York'
            },
            {
              value: 310,
              name: 'Chigago'
            },
            {
              value: 234,
              name: 'Seattle'
            },
            {
              value: 200,
              name: 'Boston'
            },
            {
              value: 600,
              name: 'Los Angles'
            }
          ],
          legendShow: false,
          legendOrient: 'horizontal',
          legendX: 'center',
          legendY: 'bottom'
        }
      };
    }
  };
</script>
```
