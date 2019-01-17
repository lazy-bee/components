<template>
<chart
  v-if="authority !== 'invisible'"
  auto-resize
  :options="option"
></chart>
</template>

<script>
export default {
  name: 'x-pie',
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
    authority: { type: String, default: 'available' }
  },
  data() {
    return {
      option: {
        color: this.colors,
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    };
  }
};
</script>
