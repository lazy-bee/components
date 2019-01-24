<template>
  <tree
    v-if="authority !== 'invisible'"
    :data="data"
    :draggable="draggable"
    :expand-on-click-node="false"
  ></tree>
</template>

<script>
import Tree from './src/tree.vue';

export default {
  name: 'x-tree',
  components: {
    Tree
  },
  props: {
    data: { type: Array, default: () => [] },
    draggable: { type: Boolean, default: false },
    authority: { type: String, default: 'available' }
  }
};
</script>
