<template>
<chart
  v-if="authority !== 'invisible'"
  :options="option"
  auto-resize
/>
</template>

<script>
export default {
  name: 'x-bar',
  props: {
    data: { type: Array, default: () => [] },
    xAxis: { type: Object, default: () => {} },
    yAxis: { type: Object, default: () => {} },
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
    authority: { type: String, default: 'available' }
  },
  data() {
    return {
      option: {
        color: this.colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: [
          {
            data: this.data,
            type: 'bar'
          }
        ]
      }
    };
  }
};
</script>

<style lang="stylus">
.echarts {
  width: 100%;
  min-width: 400px;
}
</style>
