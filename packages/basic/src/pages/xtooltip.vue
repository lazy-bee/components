<template>
<x-app>
  <x-tooltip v-bind="tooltipScheme" class="tooltip">
    <x-button slot="activator">Trigger</x-button>
  </x-tooltip>
</x-app>
</template>

<script>
export default {
  name: 'xtooltip',
  data() {
    return {
      tooltipScheme: {
        content: '12345',
        direction: 'bottom'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.tooltip {
  margin: 0 auto;
  margin-top: 20px;
}
</style>
