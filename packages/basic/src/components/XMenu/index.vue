<template>
<v-menu
  v-if="authority !== 'invisible'"
  offset-y
  :open-on-hover="openType === 'hover'"
  :open-on-click="openType !== 'hover'"
>
  <slot name="trigger" slot="activator"></slot>

  <x-list v-bind="menuList"></x-list>
</v-menu>
</template>

<script>
import { oneOf } from '../../mixins/tools.js';
export const propOptions = { openType: ['click', 'hover'] };

export default {
  name: 'x-menu',
  props: {
    openType: {
      type: String,
      default: 'click',
      validator: oneOf(propOptions.openType)
    },
    menuList: { type: Object, default: () => {} },
    authority: { type: String, default: 'available' }
  }
};
</script>
