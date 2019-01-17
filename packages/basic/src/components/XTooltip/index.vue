<template>
<v-tooltip
  v-if="authority !== 'invisible'"
  v-bind="{ [direction]: true }"
>
  <slot slot="activator" name="trigger"></slot>
  <div :class="contentClass">{{ content }}</div>
</v-tooltip>
</template>

<script>
export default {
  name: 'x-tooltip',
  props: {
    direction: { type: String, default: 'right' },
    content: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    authority: { type: String, default: 'available' }
  }
};
</script>
