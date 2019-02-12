# @lazy-copilot/datetimepicker

> RWD friendly date+time picker for Vue. Supports date, datetime and time modes, and disabling dates.


[![NPM](https://nodei.co/npm/@lazy-copilot/datetimepicker.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/@lazy-copilot/datetimepicker)



The `DateTimePicker` components  are designed to fit all  `date` and `time` selection, including features of :
 - Drop down Date&Time Picker.
 - Date Range /Single Date selection.
 - Time selection
 - Time display in different format ([Reform by vue2-timepicker](https://github.com/phoenixwong/vue2-timepicker))


![thumb](https://user-images.githubusercontent.com/5538753/50570395-61f97400-0dc4-11e9-9be2-fdf4e8559a21.jpg)


## DateTimePicker.vue

![image](https://user-images.githubusercontent.com/5538753/50570051-8e59c400-0db5-11e9-9d9c-767dc0dbf947.png)




## Install
```
$ npm install @lazy-copilot/datetimepicker

or 

$ yarn add @lazy-copilot/datetimepicker
```


## Props and @Event
Bascilly we initalize the `dateTimePicker` component by given props, the common use case is to reassign date and time to a data.

And we get the updated value by vue @event `@onChange="data=$event"`.

### Props
|  Name  | Data Type  | Example  | Description  |
|---|---|---|---|
| startDate  |  Date | `new Date()`  |   |
| endDate | Date  | above  |   |
| singleDate  |  Boolean | true   | Range/Single selection, default `false`  |


### Event 

|  Name  | Data Type  | Example  | Description  |
|---|---|---|---|
| onChange  | function  |  `()=>{}` |   |


## Usage

```js
<template>
  <date-time-picker
    :startDate = "startDate"          //optional
    :endDate = "endDate"              //optional
    :singleDate = "true"              //optional, default false
    @onChange = "onChange"            //optional
  />
</template>

<script>
import '@lazy-copilot/datetimepicker/dist/datetimepicker.css'
import { DateTimePicker } from "@lazy-copilot/datetimepicker";

export default {
  name: "app",
  components: {
    DateTimePicker
  },
  methods: {
    onChange: function(data) {
      console.log("data: ", data);
    }
  },
  data: function() {
    return {
      startDate: new Date("2018-12-13T00:03"),
      endDate: new Date("2018-12-16T23:29")
    };
  }
}
</script>

```


## Sub-Components

Selecting Date and Time got so many different scenario, and there is no silver bullet, no such single component fullfill all usecases.

And our solution is decompositing `dateTimePicker.vue` to four components.

![thumb](https://user-images.githubusercontent.com/5538753/50570395-61f97400-0dc4-11e9-9be2-fdf4e8559a21.jpg)


To See more example, please checkout `./demo/src/App.vue`.

```js

import { DateTimePicker } from "@lazy-copilot/datetimepicker";
import { DateTimePickerModal } from "@lazy-copilot/datetimepicker";
import { DatePicker } from "@lazy-copilot/datetimepicker";
import { TimePicker } from "@lazy-copilot/datetimepicker";

```


### Remark
The `time-picker` here is a customized version of the awesome project `vue2-timepicker` by `phoenixwong`.

### Reference
 - [vue2-timepicker](https://github.com/phoenixwong/vue2-timepicker)

