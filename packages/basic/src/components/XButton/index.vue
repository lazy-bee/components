<template>
  <v-btn
    v-if="authority !== 'invisible'"
    :color="color"
    :depressed="!shadow"
    :style="{ borderRadius: borderRadius + 'px' }"
    :round="round"
    :outline="outline"
    :flat="flat"
    :icon="icon"
    :fab="square"
    :disabled="disabled"
    :block="block"
    v-bind="{ [size]: true }"
    @click="click"
    :prependIcon="prependIcon"
  >
    <slot></slot>
    <template v-if="tooltip.content">
      <x-tooltip v-bind="tooltip">
        <span slot="trigger">
          <v-icon v-if="icon === true || square === true">{{ content }}</v-icon>

          <span v-else>{{ content }}</span>
        </span>
      </x-tooltip>
    </template>

    <template v-else>
      <v-icon v-if="icon === true || square === true">{{ content }}</v-icon>

      <span v-else>
        <v-icon v-if="prependIcon" class="prependIcon">{{prependIcon}}</v-icon>
        {{ content }}
        <v-icon v-if="appendIcon" class="appendIcon">{{appendIcon}}</v-icon>
      </span>
    </template>
  </v-btn>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';
export const propOptions = { size: ['small', 'medium', 'large'] };

export default {
  name: 'x-button',
  mixins: [tools],
  props: {
    content: { type: String, default: '' },
    prependIcon: { type: String, default: '' },
    appendIcon: { type: String, default: '' },
    color: { type: String, default: '#FF0039' },
    shadow: { type: Boolean, default: false },
    borderRadius: { type: Number, default: undefined },
    round: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'medium',
      validator: oneOf(propOptions.size)
    },
    click: { type: Function, default: () => {} },
    authority: { type: String, default: 'available' },
    tooltip: {
      type: Object,
      default: () => {
        return {
          direction: 'top',
          content: ''
        };
      }
    }
  },
  data() {
    return {
      backgroundColor: this.flat ? 'transparent' : this.color,
      textColor: this.flat ? this.color : this.getTextColor(this.color)
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.v-btn {
  color: white;
  height: $btn-height;
  font-size: $btn-font;
  line-height: $btn-height;
  font-weight: 700;
  padding: 0 30px;
  letter-spacing: 1.2px;

  .v-btn__content {
    span {
      display: inline-flex;
    }
  }

  .v-icon {
    font-size: $btn-font + 8px;
  }

  &--small {
    height: $btn-height-small;
    font-size: $btn-font-small;
    line-height: $btn-height-small;
    padding: 0 22px;
    letter-spacing: 1px;

    .v-icon {
      font-size: $btn-font-small + 6px;
      line-height: $btn-height-small;
    }
  }

  &--large {
    height: $btn-height-large;
    font-size: $btn-font-large;
    line-height: $btn-height-large;
    font-weight: 700;
    padding: 0 45px;

    .v-icon {
      font-size: $btn-font-large + 10px;
      line-height: $btn-height-large;
    }
  }

  .prependIcon {
    margin-right: 10px;
    vertical-align: middle;
  }

  .appendIcon {
    margin-left: 10px;
    vertical-align: middle;
  }

  // reset padding for the square button
  &--icon, &--icon&--small, &--icon&--large, &--floating, &--floating&--small, &--floating&--large {
    padding: 0;
  }

  // icon button
  &--icon {
    width: $btn-height;
  }

  &--icon&--small {
    width: $btn-height-small;
  }

  &--icon&--large {
    width: $btn-height-large;
  }

  // fab
  &--floating {
    width: $btn-height;
  }

  &--floating&--small {
    width: $btn-height-small;
  }

  &--floating&--large {
    width: $btn-height-large;
  }

  // round
  &--round {
    border-radius: $btn-height;
  }

  &--round&--small {
    border-radius: $btn-height-small;
  }

  &--round&--large {
    border-radius: $btn-height-large;
  }
}
</style>
