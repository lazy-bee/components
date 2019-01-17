<template>
<div>
  <v-stepper
    :alt-labels="alertLabel"
    v-model="active"
    v-if="type === 'horizontal'"
  >
    <v-stepper-header>
      <template v-for="(item, index) in steps">
        <v-stepper-step
          :key="index"
          :step="index + 1"
          :complete="active > (index + 1)"
        >
          {{ item.label }}
        </v-stepper-step>
        <v-divider :key="index + 10" v-if="index !== (count - 1)" ></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
        v-for="(item2, index2) in steps"
        :key="index2"
        :step="index2 + 1"
      >
        <slot :name="item2.slot"></slot>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

  <v-stepper
    v-else
    vertical
    v-model="active"
  >
    <template v-for="(item, index) in steps">
      <v-stepper-step
        :key="index"
        :step="index + 1"
        :complete="active > (index + 1)"
      >
        {{ item.label }}
      </v-stepper-step>
      <v-stepper-content :key="index" :step="index + 1">
        <slot :name="item.slot"></slot>
      </v-stepper-content>
    </template>
  </v-stepper>

  <div class="action-area" v-if="actions">
    <x-button
      v-bind="{
        content: active != count ? next.content : finish.content,
        color: next.color,
        click: goNext
      }"
    ></x-button>

    <x-button
      v-if="active != 1"
      v-bind="{
        content: prev.content,
        color: prev.color,
        click: goPrevious
      }"
    ></x-button>
  </div>
</div>
</template>

<script>
import { oneOf } from '../../mixins/tools.js';
export const propOptions = { type: ['vertical', 'horizontal'] };

export default {
  name: 'x-steps',
  props: {
    active: { type: Number, default: 1 },
    steps: { type: Array, default: () => [] },
    type: {
      type: String,
      default: 'horizontal',
      validator: oneOf(propOptions.type)
    },
    alertLabel: { type: Boolean, default: true },
    actions: { type: Boolean, default: true },
    prev: {
      type: Object,
      default: () => {
        return {
          content: 'Previous'
        };
      }
    },
    next: {
      type: Object,
      default: () => {
        return {
          content: 'Next'
        };
      }
    },
    finish: {
      type: Object,
      default: () => {
        return {
          content: 'Finish',
          click: () => {}
        };
      }
    }
  },
  data() {
    return {
      count: this.steps.length
    };
  },
  methods: {
    goNext() {
      let isOK = true;
      if (typeof this.next.click === 'function') {
        isOK = this.next.click(this.active);
      }

      if (isOK) {
        if (this.active < this.count) {
          this.active = this.active + 1;
        } else {
          this.finish.click(this.active);
        }
      }
    },

    goPrevious() {
      let isOK = true;
      if (typeof this.prev.click === 'function') {
        isOK = this.prev.click(this.active);
      }

      if (isOK) {
        if (this.active > 1) {
          this.active = this.active - 1;
        }
      }
    }
  }
};
</script>

<style lang="stylus">
.stepper:not(.stepper--vertical) .stepper__label {
  display block
}

.action-area {
  margin: 10px 0
  text-align left

  .btn {
    margin-right: 10px;
  }
}
</style>
