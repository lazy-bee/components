# Line Chart

### Usage

```html
<x-line v-bind="scheme" />
```

### Scheme

| name                | type               | default | accept value | description                              |
| ------------------- | ------------------ | ------- | ------------ | ---------------------------------------- |
| data                | Array              | -       | -            | main data                                |
| xAxisName           | String             | -       | -            | category name                            |
| xAxisData           | Array              | -       | -            | category data                            |
| yAxisName           | String             | -       | -            | capacity name                            |
| yAxisLabelFormatter | String or Function | -       | -            | capacity unit & value. Example: https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.axisLabel.formatter |
| paddingLeft         | String             | 10%     | % or px      | the bar chart's padding-left             |
| paddingRight        | String             | 10%     | % or px      | the bar chart's padding-right            |
| legendShow          | Boolean            | true    | -            | display or hide legend                   |
| legendY             | String             | top     | top / bottom | position of y-axis of legend             |
| isGradientColor     | Boolean            | true    | -            | use default gradient colors on line chart (4 groups in default gradient) |
| colors              | Array              | -       | -            | set 'isGradientColor' as false to apply solid colors on the line chart|

### Example

```html
<template>
  <x-line v-bind="lineScheme" />
</template>

<script>
  export default {
    data() {
      return {
        lineScheme: {
          data: [
            {
              name: 'Product A',
              data: [50, 30, 50, 40, 110, 90]
            },
            {
              name: 'Product B',
              data: [40, 60, 20, 90, 40, 60]
            }
          ],
          xAxisName: 'year',
          xAxisData: ['Q1', 'Q2', 'Q3', 'Q4'],
          yAxisName: 'Revenue (MM)',
          yAxisLabelFormatter: '{value} %'
        }
      };
    }
  };
</script>
```
