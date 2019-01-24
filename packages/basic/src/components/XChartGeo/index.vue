<template>
  <div ref="geoChart" v-if="data.length"></div>
</template>


<script>
import { oneOf } from '../../mixins/tools.js';
export const propOptions = {
  resolution: ['countries', 'provinces', 'metros'],
  displayMode: ['auto', 'regions', 'markers', 'text']
};

export default {
  name: 'x-geo-chart',
  props: {
    googleApiKey: { type: String, required: true },
    region: { type: String, default: '142', required: true },
    header: { type: Array, default: () => ['Country', 'Value'] },
    data: { type: Array, default: () => [] },
    resolution: {
      type: String,
      default: 'countries',
      validator: oneOf(propOptions.resolution)
    },
    displayMode: {
      type: String,
      default: 'markers',
      validator: oneOf(propOptions.displayMode)
    },
    minColor: { type: String, default: '#9CFFFF' },
    maxColor: { type: String, default: '#004CFF' },
    options: { type: Object, default: null }
  },
  mounted() {
    const google = this.getGoogle();
    if (!google) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://www.gstatic.com/charts/loader.js');
      document.head.appendChild(script);
      script.onload = () => {
        this.loadChart();
      };
    } else {
      this.loadChart();
    }
  },
  data() {
    return {
      defaultOptions: {
        resolution: this.resolution,
        region: this.region,
        displayMode: this.displayMode,
        colorAxis: {
          colors: [this.minColor, this.maxColor]
        },
        markerOpacity: 0.8
      }
    };
  },
  methods: {
    drawMarkersMap() {
      const data = google.visualization.arrayToDataTable([
        this.header,
        ...this.data
      ]);
      const chart = new google.visualization.GeoChart(this.$refs.geoChart);
      chart.draw(data, Object.assign({}, this.defaultOptions, this.options));
    },
    loadChart() {
      /* global google */
      google.charts.load('current', {
        packages: ['corechart'],
        mapsApiKey: this.googleApiKey
      });
      google.charts.setOnLoadCallback(this.drawMarkersMap);
    },
    getGoogle() {
      try {
        return google;
      } catch (e) {
        return;
      }
    }
  }
};
</script>
