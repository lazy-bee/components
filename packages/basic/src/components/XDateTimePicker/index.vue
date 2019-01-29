<template>
  <div class="datetime_wrapper" :id="id">
    <label slot="label" v-if="label">
      {{label}}
      <span v-if="required" class="star">*</span>
    </label>
    <date-time-picker v-bind="Object.assign({}, $props, $attrs)" @onChange="innerOnChange"/>
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
    singleDate: { type: Boolean, default: false },
    label: { type: String, default: '' },
    required: { type: Boolean, default: false },
    id: { type: String, default: '' }
  },
  methods: {
    validate: function() {
      console.log(' -=-= validate');
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
  padding-top: 26px;
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
    color: #fb3939 !important;
    caret-color: #fb3939 !important;
    text-align: left;
  }
}
</style>
