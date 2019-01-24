<template>
  <v-radio-group v-bind="Object.assign({}, $props, $attrs)" v-on="$listeners" @change="change">
    <v-radio v-for="(item, index) in items" :key="index" v-bind="item"></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  name: 'x-radio',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    column: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    change(val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

>>>.v-input--radio-group__input {
  .v-label {
    color: $slate-grey ; /* label */
    font-size: 16px;
  }

  .v-radio {
    .v-input--selection-controls__input {
      .v-icon {
        color:$silver; /* input icon */
      }

      .accent--text {
        color: $secondary-01 !important; /* color active input icon */
      }
    }

    &.accent--text { /* color active label */
      .v-label {
        color: $secondary-01;
      }
    }
  }
}
</style>
