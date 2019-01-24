# Pagination

### Usage

```html
<x-pagination v-bind="scheme"/>
```

### Scheme

| name         | type    | default       | description                                      |
| ------------ | ------- | ------------- | ------------------------------------------------ |
| value        | number  | 1             | Current selected page                            |
| length       | number  | 10            | The length of the paginator                      |
| totalVisible | number  | 8             | Specify the max total visible pagination numbers |
| circle       | Boolean | false         | Shape pagination elements as circles             |
| color        | String  | #0149FF       | Applies specified color to the control           |
| prev-icon    | String  | chevron_left  | Specify the icon to use for the prev icon        |
| next-icon    | String  | chevron_right | Specify the icon to use for the next icon        |

### Example

```html
<template>
  <x-pagination v-bind="paginationScheme"/>
</template>

<script>
export default {
  date() {
    return {
        paginationScheme: {
        value: 1,
        length: 10,
        totalVisible: 8,
        click: function(page){
            console.log(page);
        }
      }
    };
  }
};
</script>
```
