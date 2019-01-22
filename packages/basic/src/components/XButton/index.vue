<template>
<v-btn
  v-if="authority !== 'invisible'"
  :style="{ backgroundColor: backgroundColor, color: textColor }"
  :flat="flat"
  :icon="icon"
  :fab="fab"
  :round="round"
  :disabled="disabled"
  v-bind="{ [size]: true }"
  @click="click"
>
  <template v-if="tooltip.content">
    <x-tooltip v-bind="tooltip">
      <span slot="trigger">
        <v-icon v-if="icon === true || fab === true">
          {{ content }}
        </v-icon>

        <span v-else >
          {{ content }}
        </span>
      </span>
    </x-tooltip>
  </template>

  <template v-else >
    <v-icon v-if="icon === true || fab === true">
      {{ content }}
    </v-icon>

    <span v-else >
      {{ content }}
    </span>
  </template>

</v-btn>
</template>

<script>
import tools from '../../mixins/tools.js';

export default {
  name: 'x-button',
  mixins: [tools],
  props: {
    content: { type: String, default: '' },
    color: { type: String, default: '#ffffff' },
    flat: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
    fab: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: 'medium' },
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

<style lang="stylus">
.btn {
  margin: 0;
  text-transform: none !important;
}
</style>
