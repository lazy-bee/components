<template>
  <chart :options="options" auto-resize/>
</template>

<script>
export const propOptions = {
  legendY: ['top', 'bottom']
};

const DEFAULT_LEGEND = {
  textStyle: {
    color: '#525862'
  },
  itemGap: 20,
  itemWidth: 20,
  itemHeight: 8
};

const DEFAULT_GRADIENT_SETTING = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  globalCoord: false // false by default
};

// default gradient colors
const DEFAULT_GRADIENT = [
  {
    colorStops: [
      // blue tone
      {
        offset: 0,
        color: '#91DCFF' // color at 0% position
      },
      {
        offset: 1,
        color: '#6797FF' // color at 100% position
      }
    ],
    shadowColor: 'rgba(174,210,255,0.2)'
  },
  {
    colorStops: [
      // orange tone
      {
        offset: 0,
        color: '#FFD584' // color at 0% position
      },
      {
        offset: 1,
        color: '#FF9674' // color at 100% position
      }
    ],
    shadowColor: 'rgba(255,255,177,0.2)'
  },

  {
    colorStops: [
      // gray tone
      {
        offset: 0,
        color: '#DEE5FA' // color at 0% position
      },
      {
        offset: 1,
        color: '#8B99B5' // color at 100% position
      }
    ],
    shadowColor: 'rgba(218,225,246,0.2)'
  },
  {
    colorStops: [
      // green tone
      {
        offset: 0,
        color: '#D7F5F1' // color at 0% position
      },
      {
        offset: 1,
        color: '#82E6E3' // color at 100% position
      }
    ],
    shadowColor: 'rgba(200,250,245,0.2)'
  }
];

const DEFAULT_GRID = {
  show: false,
  top: '60px',
  bottom: '60px'
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

export default {
  name: 'x-line',
  props: {
    data: { type: Array, default: () => [] },
    xAxisName: { type: String, default: '' },
    xAxisData: {
      type: Array,
      default: () => []
    },
    yAxisName: { type: String, default: '' },
    yAxisLabelFormatter: {}, // type could be either string or function, so no assigned here
    paddingLeft: { type: String, default: '10%' },
    paddingRight: { type: String, default: '10%' },
    legendShow: { type: Boolean, default: true },
    legendY: {
      type: String,
      default: propOptions.legendY[0]
    },
    isGradientColor: { type: Boolean, default: true },
    colors: {
      type: Array,
      default: () => ['#73ABFF', '#FFBC5E', '#61E9E6', '#A99CFC', '#6A97C1'] // default regular colors
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
        color: this.color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        }
      };
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
        y: this.legendY
      };
    },
    color() {
      return this.isGradientColor
        ? DEFAULT_GRADIENT.map(({ colorStops }) => {
            return {
              ...DEFAULT_GRADIENT_SETTING,
              colorStops
            };
          })
        : this.colors;
    },
    series() {
      const series = this.data.map((item, index) => {
        return {
          ...item,
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            width: 5,
            shadowColor: this.isGradientColor
              ? DEFAULT_GRADIENT[index].shadowColor
              : null,
            shadowOffsetY: this.isGradientColor ? 10 : undefined,
            shadowBlur: this.isGradientColor ? 6 : undefined
          }
        };
      });
      return series;
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
