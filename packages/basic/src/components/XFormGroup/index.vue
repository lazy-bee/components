<template>
  <v-form v-bind="Object.assign({}, $props, $attrs)" v-on="$listeners" ref="formComponent">
    <slot></slot>
  </v-form>
</template>

<script>
export default {
  name: 'x-formgroup',
  methods: {
    getFormComponent: function() {
      return this.$refs.formComponent;
    }
  }
};
</script>
