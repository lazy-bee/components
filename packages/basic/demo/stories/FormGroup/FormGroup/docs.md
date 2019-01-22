# From Group

### Usage

```html
<x-formgroup v-model="scheme.valid"> 
  ... 
</x-formgroup>
```

### Example

```html
<template>
  <x-formgroup v-model="scheme.valid">
    <x-textfield v-bind="scheme.emailScheme" v-model="scheme.emailScheme.value" />
    <x-textfield v-bind="scheme.passwordScheme" v-model="scheme.passwordScheme.value" />
    <x-select v-bind="scheme.selectScheme" v-model="scheme.selectScheme.value"/>
    <x-radio v-bind="scheme.radioScheme" v-model="scheme.radioScheme.value"/>
    <x-checkbox v-bind="scheme.checkboxScheme" v-model="scheme.checkboxScheme.value"/>
    <x-textarea v-bind="scheme.textareaScheme" v-model="scheme.textareaScheme.value" />
  </x-formgroup>
</template>

<script>
  export default {
    data() {
      return {
        scheme:{
          emailScheme: {
            label: 'Email',
            value: '',
            appendIcon:'email',
            suffix:'@gmail.com',
            required:true,
            rules: [
              (v) => !!v || 'E-mail is required',
              (v) => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
          },
          passwordScheme: {
            label: 'Password',
            type: 'password',
            placeholder:'password',
            appendIcon:'lock',
            required:true,
            value: '',
            rules: []
          },
          selectScheme: {
            label:'Please Select City',
            items: [
              {
                text: 'New York',
                value: 'New York'
              },
              {
                text: 'Chicago',
                value: 'Chicago'
              },
              {
                text: 'Seattle',
                value: 'Seattle'
              }
            ],
            value: ''
          },
          radioScheme: {
            items: [
              {
                label: 'Male',
                value: 'Male'
              },
              {
                label: 'Female',
                value: 'Female'
              }
            ],
            value: ''
          },
          checkboxScheme: {
            items: [
              {
                label: 'Chemistry',
                value: 'Chemistry'
              },
              {
                label: 'Biological',
                value: 'Biological'
              },
              {
                label: 'Mathematics',
                value: 'Mathematics'
              },
              {
                label: 'Literature',
                value: 'Literature'
              },
              {
                label: 'Science',
                value: 'Science'
              }
            ],
            value: []
          },
          textareaScheme: {
            label: 'Comment',
            placeholder:'Please leave your coment here',
            value: '',
            rule: [],
          }
        }
      };
    }
  };
</script>
```
