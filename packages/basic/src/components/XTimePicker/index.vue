<template>
  <div class="time_wrapper">
    <label slot="label" v-if="label">
      {{label}}
      <span v-if="required" class="star">*</span>
    </label>
    <TimePicker v-bind="Object.assign({}, $props, $attrs)"/>
    <div class="errorMessage" v-if="errorMessage">{{errorMessage}}</div>
  </div>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';
export const propOptions = { format: ['HH:mm', 'hh:mm:A', 'hh:mm:a'] };

import { TimePicker } from '@lazy-copilot/datetimepicker';
import '@lazy-copilot/datetimepicker/dist/datetimepicker.css';

export default {
  name: 'x-time-picker',
  components: {
    TimePicker
  },
  props: {
    label: { type: String, default: '' },
    required: { type: Boolean, default: false },
    format: {
      type: String,
      default: 'hh:mm:A'
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.time_wrapper {
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
