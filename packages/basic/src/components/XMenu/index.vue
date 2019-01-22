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
export default {
  name: 'x-menu',
  props: {
    openType: { type: String, default: 'click' },
    menuList: { type: Object, default: () => {} },
    authority: { type: String, default: 'available' }
  }
};
</script>
