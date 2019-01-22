<template>
  <v-form v-bind="Object.assign({}, $props, $attrs)" v-on="$listeners">
    <slot></slot>
  </v-form>
</template>

<script>
export default {
  name: 'x-formgroup',
  props: {},
  data() {
    return {
      valid: false
    };
  }
};
</script>
