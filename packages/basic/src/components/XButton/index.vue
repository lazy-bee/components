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
>
  <template v-if="tooltip.content">
    <x-tooltip v-bind="tooltip">
      <span slot="trigger">
        <v-icon v-if="icon === true || square === true">
          {{ content }}
        </v-icon>

        <span v-else >
          {{ content }}
        </span>
      </span>
    </x-tooltip>
  </template>

  <template v-else >
    <v-icon v-if="icon === true || square === true">
      {{ content }}
    </v-icon>

    <span v-else >
      {{ content }}
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
    color: { type: String, default: '#42DFA4' },
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
$btn-height = 44px;
$btn-height-large = 50px;
$btn-height-small = 34px;

.v-btn {
  color: white;
  font-size: 14px;
  padding: 0 30px;
  height: $btn-height;

  &--small {
    font-size: 12px;
    padding: 0 22px;
    height: $btn-height-small;
  }

  &--large {
    font-size: 15px;
    padding: 0 45px;
    height: $btn-height-large;
  }

  // reset padding for the square button
  &--icon, &--icon&--small, &--icon&--large, &--floating, &--floating&--small, &--floating&--large {
    padding: 0;
  }

  // icon
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
