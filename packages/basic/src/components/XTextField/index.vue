<template>
  <div>
    <inputLabel :label="label" :required="required" :description="description"/>
    <v-text-field
      v-bind="Object.assign({}, newProps, $attrs)"
      v-on="$listeners"
      :rules="innerRules"
    ></v-text-field>  
  </div>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';

export const propOptions = {
  type: ['text', 'password', 'date', 'time', 'number', 'email']
};

export default {
  name: 'x-textfield',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: oneOf(propOptions.type)
    },
    label: { type: String, default: '' },
    description: { type: String, default: '' },
    required: { type: Boolean, default: false },
    name: { type: String, default: '' },
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    appendIcon: { type: String, default: '' },
    prependIcon: { type: String, default: '' },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    errorMessages: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    rules: {}, //Array or Function, so no assigned here
    id: { type: String, default: undefined }
  },
  computed: {
    newProps() {
      const newProps = { ...this.$props };
      delete newProps.label;
      return newProps;
    }
  },
  data: function() {
    return {
      innerRules:
        this.rules ||
        (this.required
          ? [(v) => !!v || `${this.label || 'field'} is required`]
          : [])
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.v-text-field {
  margin-top: 0;
  padding-top: 0;

  &.primary--text {
    color: $secondary-01 !important; /* active bottom line */
  }

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

  >>>.v-input__control {
    .v-input__slot {
      background: white;
      border: 1px solid $silver-two;
      border-radius: 3px;
      margin-bottom: 0px;

      &:before {
        display: none;
      }

      .v-text-field__slot {
        .v-text-field__prefix {
          width: auto;
          height: 48px;
          line-height: 48px;
          padding: 0 14px;
          background: rgba(183, 190, 200, 0.3);
          color: $slate-grey;
        }

        input {
          font-size: 16px;
          padding: 20px;
          max-height: 48px; /* inputbox height */
          color: $secondary-01;
          width: 100%;
        }

        ::-webkit-input-placeholder { /* WebKit browsers */
          color: $silver-two;
        }

        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: $silver-two;
        }

        :-ms-input-placeholder { /* Internet Explorer 10+ */
          color: $silver-two;
        }
      }

      .v-input__append-inner { /* text field icon */
        margin: 0;
        padding: 0;

        .v-input__icon {
          width: 48px;
          height: 48px;

          i {
            color: $silver;
            font-size: 20px;

            &.primary--text {
              color: $secondary-01 !important;
            }
          }
        }
      }
    }

    .v-text-field__details { /* error message */
      .v-messages {
        height: 20px;
        font-size: 14px;
        &.error--text {
          color: $error !important;
          caret-color: $error !important;
        }
      }
    }
  }
}

.v-input--is-disabled { /* disable  */
  >>> .v-input__control {
    .v-input__slot {
      background: $pale-grey-two !important;
    }
  }
}
</style>
