import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object,
  button
} from '@storybook/addon-knobs/vue';
import { withDocs } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';
import { Details } from 'glamorous';

let form = storiesOf('XForm', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

form.add(
  'Form',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          fields: object('fields', [
            {
              type: 'text',
              name: 'email',
              label: 'Email',
              appendIcon: 'email',
              oninput: (val) => {
                console.log('input');
                console.log(val);
              },
              onchange: (val) => {
                console.log('change');
                console.log(val);
              },
              value: 'xxxxxx',
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
              label: 'Remember Me',
              onchange: (val) => {
                console.log('change');
                console.log(val);
              }
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
          ])
        }
      };
    },
    template: `
      <x-form ref="dd" v-bind="scheme" class="elevation-3" ></x-form>
    `
  }))
);
