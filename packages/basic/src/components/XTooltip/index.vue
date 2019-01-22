<template>
  <v-tooltip
    v-bind="{ [direction]: true }"
    :color="color"
    :value="value"
    :maxWidth="maxWidth"
  >
    <template slot="activator">
      <slot name="activator"></slot>
    </template>
    <div :class="contentClass">{{ content }}</div>
  </v-tooltip>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';
export const propOptions = { direction: ['top', 'right', 'bottom', 'left'] };

export default {
  name: 'x-tooltip',
  mixins: [tools],
  props: {
    value: { type: Boolean, default: false },
    content: { type: String, default: 'Hello! This is tooltip content box.' },
    contentClass: { type: String, default: '' },
    color: { type: String, default: '#2A2E3D' },
    maxWidth: { type: String, default: '200px' },
    direction: {
      type: String,
      default: 'bottom'
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.v-tooltip__content {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
  border-radius: 4px !important;
  padding: 10px !important;

  div {
    padding: 10px !important;
  }
}
</style>
