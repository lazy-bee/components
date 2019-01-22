# x-button


## Demo
<!-- STORY -->


## Usage
```html
<x-button v-bind="scheme"></x-button>
```


## Scheme
| name      | type    | default   | accepted values                     | description                          |
| --------- | ------- | --------- | ----------------------------------- | ------------------------------------ |
| content   | String  | -         | -                                   | button content                       |
| color     | String  | -         | -                                   | button background color              |
| round     | Boolean | false     | -                                   | button round on the sides            |
| flat      | Boolean | false     | -                                   | button have no shadow and background |
| circular  | Boolean | false     | -                                   | button as circular                   |
| icon      | Boolean | false     | -                                   | button flat and circular like icon   |
| disabled  | Boolean | false     | -                                   | button disabled                      |
| size      | String  | medium    | small / medium / large              | button size                          |
| authority | String  | available | available / unavailable / invisible | component authority                  |

## Example
```html
<template>
  <x-button v-bind="buttonScheme"></x-button>
</template>

<script>
export default {
  data () {
    return {
      buttonScheme: {
        content: 'This is Button',
        color: '#039BE5',
        round: true,
        disabled: true,
        size: 'large'
      }
    }
  }
}
</script>
```