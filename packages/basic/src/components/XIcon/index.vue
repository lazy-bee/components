<template>
<v-icon
  v-if="authority !== 'invisible'"
  v-bind="{ size: size }"
>
  {{ name }}
</v-icon>
</template>

<script>
export default {
  name: 'x-icon',
  props: {
    size: { type: String, default: '28px' },
    name: { type: String, default: '' },
    authority: { type: String, default: 'available' }
  }
};
</script>

<style lang="stylus">
.icon {
  color: inherit !important;
}
</style>
