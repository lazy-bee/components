# Geo Chart

### Before use

You will need to get a **mapsApiKey** for your project from [Google map get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key).



### Usage

```html
<x-geo-chart v-bind="scheme"/>
```

### 

### Scheme

| name           | type   | default                | accepted values                 | description                                               |
| ---------      | ------ | ---------              | ---------                       | --------------------------------------------------------- |
| googleApiKey\* | String | -                      | -                               | get api key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key) |
| region         | String | '142'                  | -                               | * 'world' - A geochart of the entire world.  <br> * A continent or a sub-continent, specified by its [3-digit code](https://developers.google.com/chart/interactive/docs/gallery/geochart#Continent_Hierarchy), e.g., '142' for Asia.  <br> * A country, specified by its [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code, e.g., 'PH' for Philippine.  <br> * A state in the United States, specified by its [ISO 3166-2:US](http://en.wikipedia.org/wiki/ISO_3166-2:US) code, e.g., 'US-AL' for Alabama. Note that the resolution option must be set to either 'provinces' or 'metros'. |
| header         | Array  | ['Countries', 'Value'] | -                               | geoChart data header.  |
| data           | Array  | []                     | -                               | geoChart data  |
| resolution     | String | countries              | countries / provinces / metros  | * 'countries' - Supported for all regions, except for US state regions. <br> * 'provinces' - Supported only for country regions and US state regions. Not supported for all countries; please test a country to see whether this option is supported. <br> * 'metros' - Supported for the US country region and US state regions only.                           |
| displayMode    | String | markers                | auto / regions / markers / text | 'auto' - Choose based on the format of the DataTable. <br> 'regions' - Color the regions on the geochart. <br> 'markers' - Place markers on the regions. <br> 'text' - Label the regions with text from the DataTable. |
| minColor       | String | -                      | -                               | color for the minimum value |
| maxColor       | String | -                      | -                               | color for the maximum value |
| options        | Object | -                      | -                               | other options accepted by [google chart](https://developers.google.com/chart/interactive/docs/gallery/geochart) |

### Example
```html
<template>
  <x-geo-chart v-bind="geoChartScheme"/>
</template>

<script>
export default {
  data () {
    return {
      geoChartScheme: {
        googleApiKey: 'INSERT_YOUR_API_KEY_HERE',
        region: '142',
        header: ['Country', 'Some Value', 'Smoe Value 2'],
        data: [
          ['Taiwan', 67890, 1],
          ['indonesia', 56789, 2],
          ['Hong Kong', 23456, 3],
          ['Shanghai', 2345, 2],
          ['Philippine', 234567, 3],
          ['Vietnam', 123456, 1],
        ],
        resolution: 'countries',
        displayMode: 'markers'
      }
    }
  }
}
</script>
```


### See also

* [Google Developers - Visualization: GeoChart](https://developers.google.com/chart/interactive/docs/gallery/geochart): Detail prop meaning and usage.
* [Google Developers - Basic load libs](https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings)
* 
