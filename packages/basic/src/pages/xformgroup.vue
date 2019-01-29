<template>
  <div class='contentWrapper'>
    <x-form-group v-model="scheme.valid" ref="formgroup">
      <x-text-field v-bind="scheme.emailScheme" v-model="scheme.emailScheme.value" />
      <x-text-area v-bind="scheme.textareaScheme" v-model="scheme.textareaScheme.value" />
      <x-select v-bind="scheme.selectScheme" v-model="scheme.selectScheme.value"/>
      <x-radio v-bind="scheme.radioScheme" v-model="scheme.radioScheme.value"/>
      <x-checkbox v-bind="scheme.checkboxScheme" v-model="scheme.checkboxScheme.value"/>
      <x-date-time-picker v-bind="scheme.dateTimeScheme" :onChange="handleDateTime" ref="dateTime"/>
      <x-button :click="handleSubmit"> submit </x-button>
    </x-form-group>
  </div>
</template>

<script>
import  XFormGroup from '../components/XFormGroup'
import  XTextField from '../components/XTextField'
import  XTextArea from '../components/XTextArea'
import  XRadio from '../components/XRadio'
import  XCheckbox from '../components/XCheckbox'
import  XSelect from '../components/XSelectFilter'
import  XButton from '../components/XButton'
import XDateTimePicker from '../components/XDateTimePicker'

export default {
  name: "xform-group-page",
  components: {
    XFormGroup,
    XTextField,
    XTextArea,
    XRadio,
    XSelect,
    XButton,
    XCheckbox,
    XTextArea,
    XDateTimePicker
  },
  methods: {
    handleSubmit: function(val){
      console.log(val)
      console.log('this.validate(): ', this.validate())
    },
    validate () {

      const valid = [
        this.$refs.dateTime.validate(),
        this.$refs.formgroup.getFormComponent().validate()
      ].reduce(function (accumulator, currentValue) {
        return accumulator && currentValue;
      }, 0);


      return valid
    },
    handleDateTime(val) {
      console.log(' -=-=-= handleDateTime -=-=-=', val)
    }
  },
  computed: {
  },
  data: function() {
      return {
        scheme:{
          emailScheme: {
            label: 'Email',
            value: '',
            id: 'emailId',
            appendIcon:'email',
            suffix:'@gmail.com',
            required:true,
            // rules: [
            //   (v) => !!v || 'E-mail is required',
            // ]
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
            required: true,
            value: '',
            id: 'selectOptionId'
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
            value: '',
            label: 'Radio Label',
            required: true,
            id: 'radioId'
          },
          checkboxScheme: {
            label: 'Checkbox Label',
            required: true,
            id: 'checkboxId',
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
            required: true,
            value: '',
          },
          dateTimeScheme: {
            id: 'dateTimeId',
            label: 'Date Time Label',
            required: true,
            // startDate: new Date(),
            // endDate: new Date(),
          }
        }
      };
  }
};
</script>

<style>
.contentWrapper{
  width: 100%;
  max-width: 600px;
  margin: auto;
}
</style>