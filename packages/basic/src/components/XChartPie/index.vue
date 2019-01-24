<template>
  <chart :options="options" auto-resize/>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';
export const propOptions = {
  legendOrient: ['vertical', 'horizontal'],
  legendX: ['left', 'center', 'right'],
  legendY: ['top', 'middle', 'bottom']
};
const DEFAULT_SERIES = {
  type: 'pie',
  center: ['50%', '50%'],
  avoidLabelOverlap: false,
  label: {
    normal: {
      show: false,
      position: 'center'
    }
  },
  labelLine: {
    normal: {
      show: false
    }
  },
  itemStyle: {
    emphasis: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.1)'
    }
  }
};
const DEFAULT_LEGEND = {
  itemWidth: 15,
  itemHeight: 10
};

export default {
  name: 'x-pie',
  props: {
    data: { type: Array, default: () => [] },
    radius: { type: String, default: '50%' },
    legendShow: { type: Boolean, default: true },
    legendOrient: {
      type: String,
      default: propOptions.legendOrient[0],
      validator: oneOf(propOptions.legendOrient)
    },
    legendX: {
      type: String,
      default: propOptions.legendX[0],
      validator: oneOf(propOptions.legendX)
    },
    legendY: {
      type: String,
      default: propOptions.legendY[0],
      validator: oneOf(propOptions.legendY)
    },
    colors: {
      type: Array,
      default: () => [
        '#90F7C6',
        '#3caee5',
        '#8c61df',
        '#3e2fe7',
        '#3FDEE8',
        '#E84D75',
        '#8EEDD6',
        '#204374',
        '#6A97C1'
      ] // default regular colors
    }
  },
  computed: {
    options() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        color: this.colors,
        series: this.series,
        legend: this.legend
      };
    },
    legend() {
      if (!this.legendShow) return false;
      return {
        orient: this.legendOrient,
        x: this.legendX,
        y: this.legendY,
        data: this.data,
        ...DEFAULT_LEGEND
      };
    },
    series() {
      return {
        radius: this.radius,
        data: this.data,
        ...DEFAULT_SERIES
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.echarts {
  width: 100%;
  min-width: 450px;
}
</style>
