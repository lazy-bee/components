<template>
  <div>
    <TimePicker v-bind="Object.assign({}, $props, $attrs)" />
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
    format: {
      type: String,
      default: 'hh:mm:A'
    }
  }
};
</script>
