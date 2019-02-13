<template>
  <div class="checkbox-wrap">
    <div v-if="title" class="checkbox-title">
      {{title}}
      <span v-if="required" class="star">*</span>
    </div>
    <div class="description">{{description}}</div>

    <div class="checkbox-group">
      <v-checkbox
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        @change="(val) => toggle(val, item.value)"
      ></v-checkbox>
    </div>

    <div class="message">
      <div v-if="errorMessages" class="errorMessages">{{errorMessages}}</div>
      <div v-else class="tip">{{tip}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-checkbox',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    required: { type: Boolean, default: false },
    tip: { type: String, default: '' },
    errorMessages: { type: String, default: '' },
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

.checkbox-wrap {
  font-size: 14px;

  .checkbox-title {
    color: $slate-grey;
    font-weight: 600;

    .star {
      color: $primary-01;
    }
  }

  .description {
    color: $bluey-grey;
  }

  .message {
    height: 21px;

    .errorMessages {
      color: $error;
    }

    .tip {
      color: $bluey-grey;
    }
  }

  .checkbox-group {
    margin-top: 20px;

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

      &.v-input--is-disabled { /* disable */
        .v-input__control {
          .v-input__slot {
            .v-input--selection-controls__input {
              .v-icon {
                color: $pale-grey !important;
              }
            }

            label {
              color: $silver;
            }
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
  }
}
</style>
