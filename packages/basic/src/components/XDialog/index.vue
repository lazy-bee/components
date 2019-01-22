<template>
  <v-dialog v-bind="Object.assign({}, $props, $attrs)">
    <div class="dialog-box">
      <!-- close dialog -->
      <div v-if="closeSign" class="close-sign" @click="cancel">
        <v-icon>clear</v-icon>
      </div>
      <slot>
        <!-- dialog content -->
        <div class="header">
          <div class="icon">
            <v-icon :class="iconStyle">{{iconName}}</v-icon>
          </div>
          <h1>{{title}}</h1>
          <p>{{content}}</p>
        </div>
      </slot>
      <!-- dialog button -->
      <slot name="slot-btn">
        <div class="footer">
          <v-btn v-if="confirmText" class="confirmText" @click="confirm">{{confirmText}}</v-btn>
          <v-btn v-if="cancelText" class="cancelText" @click="cancel">{{cancelText}}</v-btn>
        </div>
      </slot>
    </div>
  </v-dialog>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';

export const propOptions = {
  type: ['alert', 'info', 'success', 'error']
};

export default {
  name: 'x-dialog',
  props: {
    value: { type: Boolean, default: true },
    title: { type: String, default: 'Type your dialog title here' },
    content: { type: String, default: 'Type your dialog content here' },
    confirmText: { type: String, default: 'Yes' },
    cancelText: { type: String, default: 'No' },
    persistent: { type: Boolean, default: true },
    maxWidth: { type: String, default: '630px' },
    width: { type: String, default: '' },
    fullscreen: { type: Boolean, default: false },
    closeSign: { type: Boolean, default: false },
    type: {
      type: String,
      default: 'alert',
      validator: oneOf(propOptions.type)
    }
  },
  data() {
    return {};
  },
  methods: {
    confirm(event) {
      this.$emit('confirm', event);
    },
    cancel() {
      this.$emit('input', false);
    }
  },
  computed: {
    iconName() {
      switch (this.type) {
        case 'alert':
          return 'error_outline';
        case 'info':
          return 'help_outline';
        case 'success':
          return 'check_circle_outline';
        case 'error':
          return 'highlight_off';
      }
    },
    iconStyle() {
      switch (this.type) {
        case 'alert':
          return 'alertStyle';
        case 'info':
          return 'infoStyle';
        case 'success':
          return 'successStyle';
        case 'error':
          return 'errorStyle';
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

>>>.v-dialog {
  background: #fff;

  .dialog-box {
    padding: 40px;
    position: relative;

    .close-sign {
      position: absolute;
      font-size: 18px;
      padding: 10px;
      top: 5px;
      right: 5px;
      cursor: pointer;

      .v-icon {
        color: $slate-grey;
      }
    }

    .header {
      border-bottom: 1px dashed $silver-two;
      padding-bottom: 10px;
      margin-bottom: 10px;

      .icon {
        text-align: center;
        margin-bottom: 20px;

        .v-icon {
          font-size: 60px !important;
        }

        .errorStyle {
          color: $error;
        }

        .alertStyle {
          color: $alert;
        }

        .infoStyle {
          color: $info;
        }

        .successStyle {
          color: $success;
        }
      }

      h1 {
        font-size: 20px;
        color: $dark;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        color: $slate-grey;
        text-align: center;
      }
    }

    .footer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      margin: 0 auto;
      padding: 10px 0;

      .confirmText, .cancelText {
        background: none;
        box-shadow: none;
        height: 47px;
        padding: 0 40px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 4px;
        text-transform: capitalize;
      }

      .cancelText {
        color: $dark;
        border: 1px solid $silver-two;
      }

      .confirmText {
        color: white;
        background: $primary-01;

        &:hover {
          background: #FF3261;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .dialog-box {
      padding: 20px;

      .header {
        padding-top: 15px;

        .icon {
          .v-icon {
            font-size: 60px !important;
          }
        }
      }

      .footer {
        flex-direction: column;
      }
    }
  }
}
</style>
