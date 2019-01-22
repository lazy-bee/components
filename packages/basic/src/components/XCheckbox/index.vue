<template>
  <div class="checkbox-group">
    <v-checkbox
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
      @change="(val) => toggle(val, item.value)"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'x-checkbox',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggle(val, itemVal) {
      this.$emit(
        'input',
        val
          ? this.value.concat(itemVal)
          : this.value.filter((existVal) => existVal !== itemVal)
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

>>>.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;

  .v-input__control {
    .v-input__slot {
      margin-top: 0;
      margin-bottom: 0;

      .v-input--selection-controls__input {
        .v-icon {
          color: $silver !important;
        }
      }

      label {
        color: $slate-grey;
      }
    }
  }
}
>>>.v-input--is-label-active {
  .v-input__control {
    .v-input__slot {
      margin-top: 0;
      margin-bottom: 0;

      .v-input--selection-controls__input {
        .v-icon {
          color: $secondary-01 !important;
        }
      }

      label {
        color: $secondary-01;
      }
    }
  }
}

</style>
