# x-card


## Demo
<!-- STORY -->


## Usage
```html
<x-card v-bind="scheme"></x-card>
```


## Scheme
| name         | type   | default   | description                                               |
| ------------ | ------ | --------- | --------------------------------------------------------- |
| title        | String | -         | card title                                                |
| titleClass   | String | -         | card title class name                                     |
| contentClass | String | -         | card content class name                                   |
| mediaClass   | String | -         | card media class name                                     |
| mediaUrl     | String | -         | media url                                                 |
| mediaHeight  | String | -         | media height                                              |
| authority    | String | available | component authority (available / unavailable / invisible) |

## Example
```html
<template>
  <x-card v-bind="cardScheme">
    <p>This is some card content</p>
    <div>some div</div>
  </x-card>
</template>

<script>
export default {
  data () {
    return {
      cardScheme: {
        title: 'This is card title'
      }
    }
  }
}
</script>
```

