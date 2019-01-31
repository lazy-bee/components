<template>
  <chart :options="options" auto-resize/>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';

export const propOptions = {
  legendY: ['top', 'bottom']
};

const DEFAULT_LEGEND = {
  textStyle: {
    color: '#525862'
  },
  itemGap: 20,
  itemWidth: 15,
  itemHeight: 15
};
const DEFAULT_Y_AXIS = {
  type: 'value',
  nameTextStyle: {
    color: '#525862',
    fontWeight: 'bold'
  },
  axisLine: {
    lineStyle: {
      color: 'transparent'
    }
  },
  axisTick: {
    show: false,
    lineStyle: {
      color: '#93A8B3'
    }
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: '#D5DBDE',
      type: 'dotted'
    }
  }
};
const DAFAULT_X_AXIS = {
  type: 'category',
  nameTextStyle: {
    color: '#525862',
    fontWeight: 'bold'
  },
  axisLabel: {
    color: '#525862'
  },
  axisLine: {
    lineStyle: {
      color: '#D5DBDE'
    }
  },
  axisTick: {
    show: false,
    lineStyle: {
      color: '#93A8B3'
    }
  },
  splitLine: {
    show: false,
    lineStyle: {
      color: '#D5DBDE'
    }
  }
};
const DEFAULT_GRID = {
  show: false,
  top: '60px',
  bottom: '60px'
};

export default {
  name: 'x-bar',
  props: {
    data: { type: Array, default: () => [] },
    xAxisName: { type: String, default: '' },
    xAxisData: { type: Array, default: () => [] },
    yAxisName: { type: String, default: '' },
    yAxisLabelFormatter: {}, // type could be either string or function, so no assigned here
    paddingLeft: { type: String, default: '10%' },
    paddingRight: { type: String, default: '10%' },
    barWidth: { type: Number, default: undefined },
    barMaxWidth: { type: Number, default: undefined },
    barGap: { type: String, default: '30%' },
    barCategoryGap: { type: String, default: '20%' },
    legendShow: { type: Boolean, default: true },
    legendY: {
      type: String,
      default: propOptions.legendY[0]
    },
    legendGap: { type: Number, default: 10 },
    colors: {
      type: Array,
      default: () => [
        '#8EEDD6',
        '#204374',
        '#6A97C1',
        '#3FDEE8',
        '#8C61DF',
        '#3CAEE5'
      ] // default regular colors
    }
  },
  computed: {
    options() {
      return {
        series: this.series,
        grid: this.grid,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        legend: this.legend,
        color: this.colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        }
      };
    },
    series() {
      const series = this.data.map((item) => {
        return {
          ...item,
          type: 'bar',
          barWidth: this.barWidth,
          barMaxWidth: this.barMaxWidth,
          barGap: this.barGap,
          barCategoryGap: this.barCategoryGap
        };
      });
      return series;
    },
    grid() {
      return {
        left: this.paddingLeft,
        right: this.paddingRight,
        ...DEFAULT_GRID
      };
    },
    xAxis() {
      return {
        name: this.xAxisName,
        data: this.xAxisData,
        ...DAFAULT_X_AXIS
      };
    },
    yAxis() {
      return {
        name: this.yAxisName,
        axisLabel: {
          formatter: this.yAxisLabelFormatter,
          color: '#525862'
        },
        ...DEFAULT_Y_AXIS
      };
    },
    legend() {
      if (!this.legendShow) return false;

      return {
        ...DEFAULT_LEGEND,
        y: this.legendY,
        itemGap: this.legendGap
      };
    }
  }
};
</script>

<style lang="stylus">
@import '../../styles/_variables.styl';

.echarts {
  width: 100%;
  min-width: 500px;
}
</style>
