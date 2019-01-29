<template>
  <v-select v-bind="Object.assign({}, $props, $attrs)" v-on="$listeners">
    <label slot="label" v-if="label">
      {{label}}
      <span v-if="required" class="star">*</span>
    </label>
  </v-select>
</template>

<script>
export default {
  name: 'x-select',
  props: {
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    chips: { type: Boolean, default: false },
    deletableChips: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    prependIcon: { type: String, default: '' },
    suffix: { type: String, default: '' },
    errorMessages: { type: String, default: '' },
    items: {
      type: Array,
      default: () => []
    },
    id: { type: String, default: '' }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.v-select {
  padding-top: 26px;

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

      .v-label {
        transform: translateY(-30px) scale(1); /* label's position */
        font-size: 14px;
        font-weight: 600;
        color: $slate-grey;

        .star {
          color: $primary-01;
        }

        &.primary--text {
          color: $secondary-01 !important;
        }
      }

      .v-label--active {
        transform: translateY(-30px) scale(1); /* active label's position */
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
    .v-messages {
      height: 20px;
      font-size: 14px !important;

      &.error--text {
        color: $error !important;
        caret-color: $error !important;
      }
    }
  }
}
</style>
