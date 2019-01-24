import { withReadme } from 'storybook-readme';
import xFormgroup from '../../../../src/components/XFormGroup';
import { generateStory } from '../../../utils/generateStory';
import docs from './docs.md';

export default withReadme(docs, () =>
  generateStory(
    xFormgroup,
    {},
    {
      emailScheme: {
        label: 'Email',
        value: '',
        appendIcon: 'email',
        suffix: '@gmail.com',
        required: true,
        rules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      },
      passwordScheme: {
        label: 'Password',
        type: 'password',
        placeholder: 'password',
        appendIcon: 'lock',
        required: true,
        value: '',
        rules: []
      },
      selectScheme: {
        label: 'Please Select City',
        required: true,
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
        name: 'Gender',
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
        name: 'Specialties',
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
        placeholder: 'Please leave your coment here',
        value: '',
        rule: []
      },
      dateTimePickerScheme: {
        name: 'Date',
        value: ''
      }
    },
    `
  <div style="width:100%; max-width:700px; padding:40px; margin-top:20px; background:#F5F9FB; border-radius:4px;">
    <x-formgroup v-model="scheme.valid">
      <h2 style="text-align:center; margin:20px 0">Your Information</h2>
      <x-textfield v-bind="scheme.emailScheme" v-model="scheme.emailScheme.value" />
      <x-textfield v-bind="scheme.passwordScheme" v-model="scheme.passwordScheme.value" />
      <x-select v-bind="scheme.selectScheme" v-model="scheme.selectScheme.value"/><br/>
      <h4 style="font-weight:600; font-size:14px;">Gender :</h4>
      <x-radio v-bind="scheme.radioScheme" v-model="scheme.radioScheme.value"/><br/>
      <h4 style="font-weight:600; margin-bottom:8px; font-size:14px;">Specialties :</h4>
      <x-checkbox v-bind="scheme.checkboxScheme" v-model="scheme.checkboxScheme.value" style="display:flex;"/>
      <br/><br/>
      <x-textarea v-bind="scheme.textareaScheme" v-model="scheme.textareaScheme.value" />
      <x-datetime-picker @onChange="datepickerChanged" />
      <br/>
      <x-button :click="submit">submit</x-button>
    </x-formgroup>
  </div>
  `,
    {
      methods: {
        datepickerChanged(val) {
          console.log(val);
          this.scheme.dateTimePickerScheme.value = val;
        },
        submit() {
          const rs = Object.keys(this.scheme).map((key) => {
            console.log(key);
            const { label, value, name } = this.scheme[key];
            return {
              name: name || label,
              value
            };
          });
          console.log(rs);
        }
      }
    }
  )
);
