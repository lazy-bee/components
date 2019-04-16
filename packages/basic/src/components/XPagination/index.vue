<template>
  <v-pagination
    :length="length"
    :total-visible="totalVisible"
    :circle="circle"
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :color="color"
    v-model="page"
    @input="input"
  ></v-pagination>
</template>

<script>
export default {
  name: 'x-pagination',
  props: {
    value: { type: Number, default: 1 },
    length: { type: Number, default: 10 },
    totalVisible: { type: Number, default: 8 },
    circle: { type: Boolean, default: false },
    color: { type: String, default: '#0149FF' },
    prevIcon: { type: String, default: 'chevron_left' },
    nextIcon: { type: String, default: 'chevron_right' },
    click: { type: Function, default: () => {} }
  },
  computed: {
    page: {
      get() {
        return this.value;
      },
      set(val) {
        this.value = val;
      }
    }
  },
  methods: {
    input() {
      this.click(this.page);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.v-pagination {
  >>>li {
    button {
      width: 30px;
      height: 30px;
      color: $slate-grey !important;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

      &:focus {
        outline: none;
      }

      &.primary {
        background: $secondary-01 !important;
        border: $secondary-01 !important;
      }

      &.v-pagination__navigation {
        background: #c0ccd3;

        .v-icon {
          color: #fff;
          font-size: 20px;
        }
      }

      &.v-pagination__item--active {
        color: #fff !important;
      }

      &.v-pagination__navigation--disabled {
        opacity: 0.4;
      }
    }
  }
}
</style>
