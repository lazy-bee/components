<template>
  <div class="datetime_wrapper">
    <inputLabel :label="label" :required="required" :description="description"/>
    <date-time-picker v-bind="Object.assign({}, $props, $attrs)" @onChange="innerOnChange" :timeFormat='timeFormat'/>
    <div class="errorMessage" v-if="errorMessage"> {{errorMessage}}</div>
  </div>
</template>

<script>
import { DateTimePicker } from '@lazy-copilot/datetimepicker';
import '@lazy-copilot/datetimepicker/dist/datetimepicker.css';

export default {
  name: 'x-datetime-picker',
  components: {
    DateTimePicker
  },
  props: {
    label: { type: String, default: '' },
    description: { type: String, default: '' },
    required: { type: Boolean, default: false },
    singleDate: { type: Boolean, default: false },
    timeFormat: { type: String, default: 'hh:mm:A' }
  },
  methods: {
    validate: function() {
      if (this.required && !this.innerVal) {
        this.errorMessage = `${this.label || 'field'} is required`;
      }
    },
    innerOnChange: function(val) {
      this.innerVal = val;
      this.$emit('onChange', val);
    },
    setErrorMessage: function(msg) {
      this.errorMessage = msg;
    }
  },
  data: function() {
    return {
      errorMessage: '',
      innerVal: ''
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.datetime_wrapper {
  position: relative;

  label {
    position: absolute;
    display: block;
    font-size: 14px;
    color: $slate-grey;
    font-weight: 600;
    top: 0;
    left: 0;

    .star {
      color: $primary-01;
    }
  }

  .errorMessage {
    height: 20px;
    font-size: 14px;
    color: $error;
    text-align: left;
  }
}
</style>
