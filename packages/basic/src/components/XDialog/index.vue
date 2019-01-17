<template>
<v-dialog
  v-model="dialog"
  :persistent="persistent"
  :max-width="maxWidth"
  :width="width"
>
  <slot></slot>
</v-dialog>
</template>

<script>
export default {
  name: 'x-dialog',
  props: {
    persistent: { type: Boolean, default: true },
    maxWidth: { type: String, default: '' },
    width: { type: String, default: '' },
    authority: { type: String, default: 'available' }
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>
