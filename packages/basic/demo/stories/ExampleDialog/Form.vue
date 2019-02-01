<template>
  <div>
    <x-formgroup v-model="scheme.valid" ref="formgroup">
      <h2>Contact Us</h2>
      <x-textfield v-bind="scheme.nameScheme" v-model="scheme.nameScheme.value"/>
      <x-textfield v-bind="scheme.emailScheme" v-model="scheme.emailScheme.value"/>
      <x-radio v-bind="scheme.radioScheme" v-model="scheme.radioScheme.value"/>
      <x-textarea v-bind="scheme.messageScheme" v-model="scheme.messageScheme.value"/>
    </x-formgroup>
  </div>
</template>

<script>
export default {
  name: 'Formgroup',
  data() {
    return {
      scheme: {
        nameScheme: {
          required: true,
          label: 'Name',
          value: ''
        },
        emailScheme: {
          required: true,
          label: 'Email',
          value: ''
        },
        messageScheme: {
          label: 'Message',
          value: ''
        },
        radioScheme: {
          column: true,
          title: 'Please choose your issue subject',
          required: true,
          items: [
            {
              label: 'Product Issue',
              value: 'Product Issue'
            },
            {
              label: 'Account Setting',
              value: 'Account Setting'
            },
            {
              label: 'Others',
              value: 'Others'
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';

h2 {
  font-size: 26px;
  margin-bottom: 20px;
  color: $dark;
  font-weight: 500;
}

.radio-wrap {
  text-align: left !important;
}

>>>.v-text-field {
  padding-top: 20px!important;
}
</style>
