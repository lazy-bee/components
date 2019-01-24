<template>
  <div class="datetime_wrapper">
    <label slot="label" v-if="label">
      {{label}}
      <span v-if="required" class="star">*</span>
    </label>
    <date-time-picker v-bind="Object.assign({}, $props, $attrs)" @onChange="val => $emit('onChange', val)"/>
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
    alignRight: { type: Boolean, default: false },
    label: { type: String, default: '' },
    required: { type: Boolean, default: false }
  },
  methods: {
    submitHandler: function(data) {
      console.log('data: ', data);
    },
    cancelHandler: function() {
      console.log('close');
    }
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
}
</style>
