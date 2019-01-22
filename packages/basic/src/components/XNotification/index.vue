<template>
<v-snackbar
  auto-height
  :class="cls"
  :timeout="time"
  :top="yAxis === 'top'"
  :bottom="yAxis === 'bottom'"
  :right="xAxis === 'right'"
  :left="xAxis === 'left'"
  :multi-line="mode === 'multi-line'"
  :vertical="mode === 'vertical'"
  v-model="value"
>
  {{ message }}
  <v-btn flat @click.native="value = false">Close</v-btn>
</v-snackbar>
</template>

<script>
export default {
  name: 'x-notification',
  props: {
    xAxis: { type: String, default: '' },
    yAxis: { type: String, default: '' },
    timeout: { type: Number, default: 2000 },
    mode: { type: String, default: '' },
    text: { type: String, default: '' }
  },
  data() {
    return {
      message: this.text,
      cls: '',
      value: false,
      time: this.timeout
    };
  },
  methods: {
    open() {
      this.value = true;
    },

    close() {
      this.value = false;
    },

    success(message, timeout = 2000) {
      this.cls = 'succeeded-notification';
      this.message = message;
      this.time = timeout;
      this.open();
    },

    fail(message, timeout = 2000) {
      this.cls = 'failed-notification';
      this.message = message;
      this.time = timeout;
      this.open();
    }
  }
};
</script>

<style lang="stylus">
.succeeded-notification .snack__wrapper {
  background-color: #43A047 !important
}

.failed-notification .snack__wrapper {
  background-color: #E53935 !important
}
</style>
