<template>
  <div class="select-wrap">
    <div class="label" v-if="label">
      {{label}}
      <span v-if="required" class="star">*</span>
    </div>
    <div class="description">{{description}}</div>

    <v-select v-bind="Object.assign({}, this.$data.newProps, $attrs)" v-on="$listeners"></v-select>

    <div class="message">
      <div v-if="errorMessages" class="errorMessages">{{errorMessages}}</div>
      <div v-else class="tip">{{tip}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-select',
  props: {
    label: { type: String, default: '' },
    description: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    chips: { type: Boolean, default: false },
    deletableChips: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    prependIcon: { type: String, default: '' },
    suffix: { type: String, default: '' },
    tip: { type: String, default: '' },
    errorMessages: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const newProps = { ...this.$props };
    delete newProps['label'];
    delete newProps['errorMessages'];
    return {
      newProps
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.select-wrap {
  .label {
    font-weight: 600;
    color: $slate-grey;

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

  .v-select {
    margin-top: 0;
    padding-top: 0;

    >>>.v-input__prepend-outer { /* prepend-icon */
      margin: 0;

      .v-input__icon {
        width: 50px;
        height: 50px;

        i {
          font-size: 25px;
          color: $slate-grey;

          &.primary--text {
            color: $secondary-01 !important;
          }
        }
      }
    }
  }

  >>>.v-input__control {
    .v-input__slot {
      margin-bottom: 0px !important;

      &:before, &:after {
        display: none;
      }

      .v-select__slot {
        background: white;
        border: 1px solid $silver-two;
        border-radius: 3px;
        margin-bottom: 2px;

        input {
          height: 50px;
          max-height: 50px;
          padding-left: 20px !important;
        }

        .v-select__selections {
          height: 50px;
          width: 100%;
          overflow: hidden;
          flex-wrap: nowrap;

          .v-chip {
            background: $pale-grey;
            margin: 0 4px;
            border-radius: 32px;
            color: $dark;

            &:first-child {
              margin-left: 10px;
            }

            &:hover {
              background: $silver-two;
            }

            &.v-chip--selected {
              box-shadow: none;
            }
          }

          .v-select__selection--comma {
            margin: 0 10px;

            &:first-child {
              margin-left: 20px;
            }
          }

          ::-webkit-input-placeholder { /* placeholder for WebKit browsers */
            color: $silver-two;
          }

          ::-moz-placeholder { /* placeholder for Mozilla Firefox 19+ */
            color: $silver-two;
          }

          :-ms-input-placeholder { /* placeholder for Internet Explorer 10+ */
            color: $silver-two;
          }
        }

        .v-input__append-inner {
          margin: 0;
          padding: 0;

          .v-input__icon {
            height: 50px;
            margin: 0 10px;
          }

          .v-input__icon--append {
            i {
              color: $slate-grey;

              &.primary--text {
                color: $secondary-01 !important;
              }
            }
          }

          .v-input__icon--clear {
            i {
              color: $bluey-grey;

              &.primary--text {
                color: $secondary-01 !important;
              }
            }
          }
        }

        .v-text-field__suffix {
          color: $dark !important;
        }
      }
    }

    /* error message */
    .v-text-field__details {
      display: none;
    }
  }
}
</style>
