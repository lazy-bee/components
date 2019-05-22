# @lazy-bee/twosideselect

> Side-by-side Multi Select Plugin With Vue, dual list box plugin where the users are able to select/deselect options between panels using Left/Right arrows or move items by using double-click.


[![NPM](https://nodei.co/npm/@lazy-bee/twosideselect.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/@lazy-bee/twosideselect)

![twosideselect](https://www.jqueryscript.net/images/Side-By-Side-Multi-Select-Plugin-jQuery.jpg)



## Install
```
$ npm install @lazy-bee/twosideselect

or 

$ yarn add @lazy-bee/twosideselect
```


## Props and @Event
Bascilly we initalize the `twosideselect` component by given props, the common use case is to reassign date and time to a data.

And we get the updated value by vue @event `@onChange="data=$event"`.

### Props
|  Name  | Data Type  | Example  | Description  |
|---|---|---|---|
| items  |  Array | `[{label, value}]`  |   |
| poolItems | Array  | `[{label, value}]`  |   |
| onChange  |  Function | `(newItemList) => {}`   | updated value of items(right side)|


### Event 

|  Name  | Data Type  | Example  | Description  |
|---|---|---|---|
| onChange  |  Function | `(newItemList) => {}`   | updated value of items(right side)|


## Usage

```js
<template>
  <TwoSideSelect
    :items='initTwoSideSelectItems'
    :poolItems='poolItems'
    :onChange='onChangeHandler'
  />
</template>

<script>
import '@lazy-bee/twosideselect/dist/twosideselect.css'
import { TwoSideSelect } from "@lazy-bee/twosideselect";

export default {
  name: "app",
  components: {
    TwoSideSelect
  },
  methods: {
    onChangeHandler: function(data) {
      console.log("data: ", data);
    }
  },
  data: function() {
    return {
      initTwoSideSelectItems: [
        {label: 'label1', value: 'value1'},
        {label: 'label2', value: 'value2'},
        {label: 'label3', value: 'value3'},
      ],
      poolItems: [
        {label: 'label4', value: 'value4'},
        {label: 'label5', value: 'value5'},
        {label: 'label6', value: 'value6'},
      ]
    };
  }
}
</script>

```

