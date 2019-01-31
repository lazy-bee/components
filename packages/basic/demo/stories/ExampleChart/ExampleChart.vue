<template>
  <div class="demoWrap">
    <div class="boxWrap">
      <h3>A</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-bar v-bind="barScheme"/>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-a' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>B</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-line v-bind="lineScheme"/>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-b' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>C</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-donut v-bind="donutScheme"/>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-c' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>D</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-donut v-bind="donutScheme2"/>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-d' }">View Sample Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartExample',
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
            data: [20, 30, 100, 35]
          }
        ],
        xAxisName: 'year',
        xAxisData: ['Q1', 'Q2', 'Q3', 'Q4'],
        yAxisName: 'Revenue (MM)',
        yAxisLabelFormatter: '{value} kg',
        barGap: '-100%',
        barWidth: 40
      },
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
      },
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
            value: 450,
            name: 'Los Angles'
          }
        ],
        radius: ['40%', '50%'],
        legendShow: true,
        legendOrient: 'horizontal',
        legendX: 'center',
        legendY: 'bottom'
      },
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

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';
@import '../../styles/example-layout.styl';

.demoWrap {
  .boxWrap {
    width: calc(100% / 2 - 20px);
    min-width: 500px !important;
  }
}
</style>
