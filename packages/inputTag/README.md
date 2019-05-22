# @lazy-copilot/inputTag

> Vue implementation of tag input component

[![NPM](https://nodei.co/npm/@lazy-bee/inputTag.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/@lazy-bee/inputTag)



## Install
```
$ npm install @lazy-bee/inputTag

or 

$ yarn add @lazy-bee/inputTag
```


## API

### Props
|  Name  | Data Type  | Example  | Required | Default  | Description  |
|---|---|---|---|---|---|
| tags  |  Array | `['firsttag']`  | yes |   | Data source of tags |
| delimiters  |  Array | `[13]`  | no  | `[9, 13, 188]` | Keycode served as delimiter  |
| placeholder |  String | `'Please add tags...'`  | no | `'Tags...'` |  |
| readOnly |  Boolean | `false`  | yes | `false` |  |
| isDuplicateAllowed |  Boolean | `false`  | no | `false` |  |
| beforeAdding |  Function | `funtion(newTag: string, newTags: Array }` | no| `() => ({})` | Invoked before `onChange` event |


### Event 

|  Name  | Data Type  | Example  | Description  |
|---|---|---|---|
| onChange | Function | `function(newTags: Array): null` |  |
| onInput | Function | `function(inputValue: String): null` |  |


## Usage

```js
<template>
  <input-tag
    :tags="tags"
    @onInput="onInputChange"
    @onChange="onChange"
  />
</template>
<script>
import '@lazy-bee/inputTag/dist/input-tag.css'
import InputTag from "@lazy-bee/inputTag";
export default {
  name: "input-tag-example",
  components: {
    InputTag,
  },
  data: function() {
    return {
      tags: ["firsttag"],
    };
  },
  methods: {
    onInputChange(value) {
      console.log("Input Value: ", value);
    },
    onChange(newTags) {
      this.tags = newTags;
    },
  }
}
</script>
```
