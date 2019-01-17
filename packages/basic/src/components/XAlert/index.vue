<template>
<v-alert :value="value" :type="type">
  {{ message }}
</v-alert>
</template>

<script>
export default {
  name: 'x-alert',
  props: {
    value: { type: Boolean, default: false },
    type: { type: String, default: 'success' },
    message: { type: String, default: '' }
  }
};
</script>
