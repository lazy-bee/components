# x-steps


## Demo
<!-- STORY -->

## Usage
```html
<x-steps v-bind="scheme">
</x-steps>
```


## Scheme
| name      | type   | default | accepted values             | description      |
| --------- | ------ | ------- | --------------------------- | ---------------- |
| steps | Array | -       | -                           | steps item |
| type   | String | horizontal   | horizontal / vertical | step direction  |
| prev     | Object  | -       | -               | prev button config        |
| next     | Object  | -       | -               | next button config        |
| finish     | Object  | -       | -               | finish button config        |
| authority | String | available | available / unavailable / invisible | component authority |


## Example
```html
<template>
  <x-steps v-bind="stepsScheme">
    <div slot="a">this is some a content</div>
    <div slot="b">this is some b content</div>
    <div slot="c">this is some c content</div>
  </x-steps>
</template>

<script>
export default {
  data () {
    return {
      stepsScheme: {
        steps: [
          { label: 'aaa', slot: 'a' },
          { label: 'bbb', slot: 'b' },
          { label: 'ccc', slot: 'c' }
        ],
        type: 'vertical',
        prev: {
          content: 'Prev Item'
        },
        finish: {
          content: 'Done',
          click: () => {
            console.log('done!');
          }
        }
      }
    }
  }
}
</script>
```