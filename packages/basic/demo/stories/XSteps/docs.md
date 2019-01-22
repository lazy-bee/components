# Steps



### Usage
```html
<x-steps v-bind="scheme"/> ... </x-steps>
```


### Scheme
| name      | type   | default | accepted values             | description      |
| --------- | ------ | ------- | --------------------------- | ---------------- |
| steps | Array | -       | -                           | steps item |
| type   | String | horizontal   | horizontal / vertical | step direction  |
| prev     | Object  | -       | -               | prev button config        |
| next     | Object  | -       | -               | next button config        |
| finish     | Object  | -       | -               | finish button config        |
| authority | String | available | available / unavailable / invisible | component authority |


### Example
```html
<template>
  <x-steps v-bind="stepsScheme">
    <div slot="slot1">Fusce vehicula dolor arcu...</div>
    <div slot="slot2">It was a humorously perilous...</div>
    <div slot="slot3">Kogi Cosby sweater ethical...</div>
  </x-steps>
</template>

<script>
export default {
  data () {
    return {
      stepsScheme: {
        steps: [
          { label: 'Step 1', slot: 'slot1' },
          { label: 'Step 2', slot: 'slot2' },
          { label: 'Step 3', slot: 'slot3' }
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