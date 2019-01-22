# Dialog

### Usage

```html
<x-dialog v-bind="scheme" v-model="scheme.value>

  ...

</x-dialog>
```

### Scheme

| name        | type    | default | accepted values                | description                                                      |
| ----------- | ------- | ------- | ------------------------------ | ---------------------------------------------------------------- |
| value       | Boolean | false   | -                              | controls visibility                                              |
| title       | String  | -       | -                              | dialog title                                                     |
| content     | String  | -       | -                              | dialog content                                                   |
| maxWidth    | String  | 630px   | -                              | the maximum width of the content                                 |
| cancelText  | String  | No      | -                              | a button to dismiss the dialog with doing nothing                |
| confirmText | String  | Yes     | -                              | a button comes with a function that direct user to a destination |
| persistent  | Boolean | true    | -                              | clicking outside will not dismiss the dialog                     |
| width       | String  | -       | -                              | sets the dialog width                                            |
| fullscreen  | Boolean | false   | -                              | changes layout for fullscreen display                            |
| closeSign   | Boolean | false   | -                              | a button to dismiss the dialog with doing nothing                |
| type        | String  | alert   | alert / info / success / error | 4 different types of icon                                        |

### Event

| name    | description                                                |
| ------- | ---------------------------------------------------------- |
| confirm | default confirm button event, direct user to a destination |

### Slot

| name     | description                                                              |
| -------- | ------------------------------------------------------------------------ |
| default  | place your custom dialog content here to replace original dialog content |
| slot-btn | place your custom buttons in this slot                                   |

### Example

```html
<template>
  <x-button @click=openDialog />
  <x-dialog v-bind="dialogScheme" v-model="dialogScheme.value" @confirm="dialogConfirm"></x-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialogScheme: {
        value: false,
        title: 'You have unsaved changes!',
        content: 'Are you sure you want to leave this page without saving it?',
        cancelText: 'No',
        confirmText: 'Yes',
        type:'alert',
      }
    }
  },
  methods:{
    dialogConfirm(event){
      console.log("confirmed with event:", event); //confirm button
    },
    openDialog(){
      this.dialogScheme.value = true //open Dialog
    }
  }
}
</script>
```