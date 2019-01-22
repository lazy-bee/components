<template>
  <div>
    <date-time-picker v-bind="Object.assign({}, $props, $attrs)"/>
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
    alignRight: { type: Boolean, default: false }
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
</style>
