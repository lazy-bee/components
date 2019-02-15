# Button


### Usage
```html
<x-button v-bind="scheme"/>
```
> Refer to Material Icon to get the content of icon: https://material.io/tools/icons
### Scheme
| name         | type    | default   | accepted values                     | description                                     |
| ---------    | ------- | --------- | ----------------------------------- | ----------------------------------------------  |
| content      | String  | -         | text or material icon               | button content                                  |
| color        | String  | -         | -                                   | button background color                         |
| prependIcon  | String  | -         | material icon                       | prepend an icon to the button                   |
| appendIcon   | String  | -         | material icon                       | append an icon to the button                    |
| shadow       | Boolean | false     | -                                   | button box-shadow                               |
| borderRadius | Number  | undefined | -                                   | button border-radius                            |
| round        | Boolean | false     | -                                   | remove borderRadius to bind round button style  |
| outline      | Boolean | false     | -                                   | button outline style                            |
| flat         | Boolean | false     | -                                   | button have no shadow and background            |
| icon         | Boolean | false     | -                                   | fill icon's name in the content field to get icon button (play with flat) |
| square       | Boolean | false     | -                                   | 1. to achieve suqare button, adding border-radius  <br/>  2. to achieve floating, adding "position:fixed"|
| disabled     | Boolean | false     | -                                   | button disabled                                 |
| block        | Boolean | false     | -                                   | Block buttons extend the full available width   |
| click        | function| -         | -                                   | click function                                  |
| size         | String  | medium    | small / medium (default) / large    | button size (button height 34px/44px/50px)      |
| tootltip     | Object  | -         | {direction: 'top / bottom / left / right', <br/> content:" "} | tooltip position & content |
| authority    | String  | available | available / unavailable / invisible | component authority                             |

### Example
```html
<template>
  <x-button v-bind="buttonScheme"/>
</template>

<script>
export default {
  data () {
    return {
      buttonScheme: {
        content: 'Download',
        color: '#039BE5',
        borderRadius: 4,
        disabled: true,
        size: 'large'
        tooltip:{
          direction: 'top',
          content: ''
        },
        click: () => {
          console.log('click button');
        }
      }
    }
  }
}
</script>
```