# Bar Chart

### Usage

```html
<x-bar v-bind="scheme" />
```

### Scheme

| name                | type               | default | accept value | description                   |
| ------------------- | ------------------ | ------- | ------------ | ----------------------------- |
| data                | Array              | -       | -            | main data                     |
| xAxisName           | String             | -       | -            | category name                 |
| xAxisData           | Array              | -       | -            | category data                 |
| yAxisName           | String             | -       | -            | capacity name                 |
| yAxisLabelFormatter | String or Function | -       | -            | capacity unit & value. Example: https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.axisLabel.formatter |
| paddingLeft         | String             | 10%     | % or px      | the bar chart's padding-left  |
| paddingRight        | String             | 10%     | % or px      | the bar chart's padding-right |
| barWidth            | Number             | -       | -            | width of each bar             |
| barMaxWidth         | Number             | -       | -            | max width of each bar         |
| barGap              | String             | 30%     | -            | gap of eachbar                |
| barCategoryGap      | String             | 20%     | -            | gap of each Category          |
| legendShow          | Boolean            | true    | -            | display or hide legend        |
| legendY             | String             | top     | top / bottom | position of y-axis of legend |
| colors              | Array              | -       | -            | bar chart color               |

### Example

```html
<template>
  <x-bar v-bind="barScheme" />
</template>

<script>
  export default {
    data() {
      return {
        barScheme: {
          data: [
            {
              name: 'Product A',
              data: [25, 95, 162, 90]
            },
            {
              name: 'Product B',
              data: [40, 48, 120, 70]
            },
            {
              name: 'Product C',
              data: [20, 60, 100, 35]
            }
          ],
          xAxisName: 'year',
          xAxisData: ['Q1', 'Q2', 'Q3', 'Q4'],
          yAxisName: 'Revenue (MM)',
          yAxisLabelFormatter: '{value} kg'
        }
      };
    }
  };
</script>
```
