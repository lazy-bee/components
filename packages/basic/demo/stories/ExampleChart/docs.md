## Sample Code

### Example A

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
              data: [60, 95, 162, 90]
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
          yAxisLabelFormatter: '{value} kg',
          barGap: '-100%',
          barWidth: 40
        }
      };
    }
  };
</script>
```

### Example B

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
              data: [50, 30, 50, 30, 100, 80]
            },
            {
              name: 'Product B',
              data: [50, 80, 20, 80, 400, 30]
            }
          ],
          xAxisName: 'Month',
          xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          yAxisName: 'Conversion',
          yAxisLabelFormatter: '{value}%',
          stroke: 1,
          isAreaStyle: true,
          areaOpacity: 0.4
        }
      };
    }
  };
</script>
```

### Example C

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
          legendShow: true,
          legendOrient: 'horizontal',
          legendX: 'center',
          legendY: 'bottom'
        }
      };
    }
  };
</script>
```

### Example D

```html
<template>
  <x-donut v-bind="donutScheme2" />
</template>

<script>
  export default {
    data() {
      return {
        donutScheme2: {
          data: [
            {
              value: 500,
              name: 'New York'
            },
            {
              value: 400,
              name: 'Chigago'
            },
            {
              value: 300,
              name: 'Seattle'
            },
            {
              value: 200,
              name: 'Boston'
            },
            {
              value: 100,
              name: 'Los Angles'
            }
          ],
          radius: ['25%', '65%'],
          legendShow: true,
          legendOrient: 'vertical',
          legendX: 'left',
          legendY: 'middle',
          isRoseType: true,
          legendGap: 20
        }
      };
    }
  };
</script>
```
