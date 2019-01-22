import { text, select, object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';

export default withReadme(docs, () => ({
  data() {
    return {
      scheme: {
        fields: object('fields', [
          {
            type: 'text',
            name: 'email',
            label: 'Email',
            placeholder: 'info@email.com',
            appendIcon: 'email',
            oninput: (val) => {
              console.log('input');
              console.log(val);
            },
            onchange: (val) => {
              console.log('change');
              console.log(val);
            },
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
            placeholder: '******',
            appendIcon: 'lock'
          },
          {
            type: 'text',
            name: 'username',
            label: 'Name',
            value: 'Taylor Swift'
          },
          {
            type: 'checkbox',
            name: 'newyork',
            label: 'New York',
            onchange: (val) => {
              console.log('change');
              console.log(val);
            }
          },
          {
            type: 'checkbox',
            name: 'chicago',
            label: 'Chicago',
            onchange: (val) => {
              console.log('change');
              console.log(val);
            }
          },
          {
            type: 'radio',
            name: 'radioName',
            label: 'Radio Button',
            options: [
              { label: 'New York', value: 'newyork' },
              { label: 'Chicago', value: 'chicago' },
              { label: 'Seattle', value: 'seattle' }
            ]
          },
          {
            type: 'select',
            name: 'selectName',
            label: 'Select City',
            placeholder: 'Please Select',
            'menu-props': {
              'offset-y': true,
              'max-height': '100'
            },
            options: [
              { label: 'New York', value: 'newyork' },
              { label: 'Chicago', value: 'chicago' },
              { label: 'Seattle', value: 'seattle' }
            ]
          },
          {
            type: 'date',
            name: 'dateName',
            label: 'Choose Date',
            appendIcon: 'event',
            class: 'data-name',
            oninput: (val) => {
              console.log('input');
              console.log(val);
            }
          },
          {
            type: 'time',
            name: 'timeName',
            label: 'Choose Time',
            class: 'time-name',
            appendIcon: 'access_time',
            oninput: (val) => {
              console.log('input');
              console.log(val);
            }
          },
          {
            type: 'file',
            name: 'fileName',
            label: '',
            multiple: false,
            class: 'xxxxxx',
            server:
              'https://api.robinson-reward.cashya.com/image/beta/v1/images',
            headers: {
              'x-api-key': 'Q7dSXAiWkGaMNQYkoxej04L4MkDdtnQU6jsim1kg'
            },
            success(resp) {
              console.log(resp);
            },
            beforeUpload(file) {
              // 判断这个file 是否是合格的文件
              // 合格 return true, 继续上传
              // 不合格 return false, 终止上传
            }
          }
        ]),
        actions: object('actions', [
          {
            content: 'Submit',
            color: '#4373F9',
            size: 'large',
            borderRadius: 3,
            click: (data) => {
              console.log(data);
            }
          },
          {
            content: 'Cancel',
            color: '#42DFA4',
            size: 'large',
            borderRadius: 3,
            outline: true,
            click: (data) => {
              console.log(data);
            }
          }
        ])
      }
    };
  },
  template: `
  <div style ='width:80vw'> 
    <x-form ref="dd" v-bind="scheme"></x-form>
  </div>
  `
}));
