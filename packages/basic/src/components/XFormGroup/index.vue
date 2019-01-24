<template>
  <v-form v-bind="Object.assign({}, $props, $attrs)" v-on="$listeners" ref="formComponent">
    <slot></slot>
  </v-form>
</template>

<script>
export default {
  name: 'x-formgroup',
  props: {},
  methods: {
    getFormComponent: function() {
      return this.$refs.formComponent;
    }
  },
  data() {
    return {
      valid: false
    };
  }
};
</script>
