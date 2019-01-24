# Donut Chart

### Usage

```html
<x-donut v-bind="scheme" />
```

### Scheme

| name         | type    | default        | accepted values       | description                               |
| ------------ | ------- | -------------- | --------------------- | ----------------------------------------- |
| data         | Array   | -              | -                     | donut data                                |
| radius       | Array   | ['30%', '50%'] | -                     | inner and outer radius of the donut chart |
| legendShow   | Boolean | true           | -                     | display or hide legend                    |
| legendOrient | String  | vertical       | vertical / horizontal | the orient of legend                      |
| legendX      | String  | left           | left / center / right | position of x-axis of legend              |
| legendY      | String  | top            | top / middle / bottom | position of y-axis of legend              |
| colors       | Array   | -              | -                     | donut chart colors                        |

### Example

```html
<template>
  <x-donut v-bind="donutScheme" />
</template>

<script>
  export default {
    data() {
      return {
        donutScheme: {
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
          radius: ['40%', '50%'],
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
