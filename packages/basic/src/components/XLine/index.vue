<template>
<chart
  v-if="authority !== 'invisible'"
  auto-resize
  :options="option"
/>
</template>

<script>
export default {
  name: 'x-line',
  props: {
    data: { type: Array, default: () => [] },
    colors: {
      type: Array,
      default: () => [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ]
    },
    xAxis: { type: Object, default: () => {} },
    yAxis: { type: Object, default: () => {} },
    authority: { type: String, default: 'available' }
  },
  data() {
    const series = (Array.isArray(this.data[0]) ? this.data : [this.data]).map(
      (datum) => ({
        data: datum,
        type: 'line'
      })
    );

    return {
      option: {
        colors: this.colors,
        tooltip: {
          trigger: 'axis'
        },
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: series
      }
    };
  }
};
</script>
