<template>
  <div class="radio-wrap">
    <div v-if="title" class="radio-title">
      {{title}}
      <span v-if="required" class="star">*</span>
    </div>
    <div class="description">{{description}}</div>

    <v-radio-group
      v-bind="Object.assign({}, $props, $attrs)"
      v-on="$listeners"
      @change="change"
      :rules="innerRules"
    >
      <v-radio v-for="(item, index) in items" :key="index" v-bind="item"></v-radio>
    </v-radio-group>

    <div class="message">
      <div v-if="errorMessages" class="errorMessages">{{errorMessages}}</div>
      <div v-else class="tip">{{tip}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-radio',
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
    column: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    rules: {}, //Array or Function, so no assigned here
    id: { type: String, default: undefined }
  },
  methods: {
    change(val) {
      this.$emit('input', val);
    }
  },
  data: function() {
    return {
      innerRules: this.rules
        ? this.rules
        : this.required
          ? [(v) => !!v || `${this.label || 'field'} is required`]
          : []
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.radio-wrap {
  font-size: 14px;

  .radio-title {
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

  .v-input--selection-controls {
    margin-top: 20;

    >>>.v-input__control {
      .v-input--radio-group__input {
        .v-radio--is-disabled { /* disable */
          .v-label {
            color: $silver;
          }

          &.v-radio {
            .v-input--selection-controls__input {
              .v-icon {
                color: $pale-grey !important;
              }
            }
          }
        }

        .v-label {
          color: $slate-grey; /* label */
          font-size: 16px;
        }

        .v-radio {
          .v-input--selection-controls__input {
            .v-icon {
              color: $silver; /* input icon */
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

      .v-messages { /* error message */
        display: none;
      }
    }
  }
}
</style>
