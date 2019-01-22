# x-form


## Demo
<!-- STORY -->


## Usage
```html
<x-form v-bind="scheme"></x-form>
```


## Scheme
| name      | type   | default   | description                                               |
| --------- | ------ | --------- | --------------------------------------------------------- |
| fields    | Array  | -         | form fields                                               |
| actions   | Array  | -         | form actions                                              |
| authority | String | available | component authority (available / unavailable / invisible) |

## Fields
| name            | type   | default | description                    |
| --------------- | ------ | ------- | ------------------------------ |
| name  (require) | String | -       | field name                     |
| type            | String | -       | field type                     |
| label           | String | -       | field label                    |
| appendIcon      | String | -       | field append icon              |
| prependIcon     | String | -       | field prepend icon             |
| rules           | Array  | -       | field validate rules           |
| options         | Array  | -       | options for select, radio type |
| server          | String | -       | server for file type           |


## Actions
| name    | type     | default | description                    |
| ------- | -------- | ------- | ------------------------------ |
| content | String   | -       | action button text             |
| color   | String   | -       | action button background color |
| click   | Function | -       | action click event             |


## Example
```html
<template>
  <x-form v-bind="formScheme"></x-form>
</template>

<script>
export default {
  data () {
    return {
      formScheme: {
        fields: [
          {
            type: 'text',
            name: 'email',
            label: 'Email',
            appendIcon: 'email',
            rules: [
              (val) => !!val || 'Email is required',
              (val) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
                'Email must be valid'
            ]
          },
          {
            type: 'password',
            name: 'password',
            label: 'Password',
            appendIcon: 'lock'
          },
          {
            type: 'checkbox',
            name: 'checkboxName',
            label: 'Remember Me'
          },
          {
            type: 'radio',
            name: 'radioName',
            label: 'radio',
            options: [
              { label: 'aaa', value: 'aaa' },
              { label: 'bbb', value: 'bbb' },
              { label: 'ccc', value: 'ccc' }
            ]
          },
          {
            type: 'select',
            name: 'selectName',
            label: 'select',
            options: [
              { label: 'aaa', value: 'aaa' },
              { label: 'bbb', value: 'bbb' },
              { label: 'ccc', value: 'ccc' }
            ]
          },
          {
            type: 'date',
            name: 'dateName',
            label: 'Choose Date',
            appendIcon: 'event'
          },
          {
            type: 'time',
            name: 'timeName',
            label: 'Choose Time',
            appendIcon: 'access_time'
          },
          {
            type: 'file',
            name: 'fileName',
            label: '',
            server:
              'http://carnival-admin.heisoo.cn/api/admin/upload_credit.php'
          }
        ],
        actions: [
          {
            content: 'Submit',
            color: '#1565C0',
            click: (data) => {
              console.log(data);
            }
          },
          {
            content: 'Cancel',
            color: '#f5f5f5',
            click: (data) => {
              console.log(data);
            }
          }
        ]
      }
    }
  }
}
</script>
```