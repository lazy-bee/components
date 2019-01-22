<template>
  <div>
    <v-stepper :alt-labels="alertLabel" v-model="active" v-if="type === 'horizontal'">
      <v-stepper-header>
        <template v-for="(stepItem, index) in steps">
          <v-stepper-step
            :key="index"
            :step="index + 1"
            :complete="active > (index + 1)"
          >{{ stepItem.label || UNKNOW_STEPPER }}</v-stepper-step>
          <v-divider :key="index + 10" v-if="index !== (count - 1)"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content v-for="(stepItem, index) in steps" :key="index" :step="index + 1">
          <slot :name="stepItem.slot"></slot>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-stepper v-else vertical v-model="active">
      <template v-for="(item, index) in steps">
        <v-stepper-step
          :key="index"
          :step="index + 1"
          :complete="active > (index + 1)"
        >{{ item.label }}</v-stepper-step>
        <v-stepper-content :key="index" :step="index + 1">
          <slot :name="item.slot"></slot>
        </v-stepper-content>
      </template>
    </v-stepper>
    <div class="action-area" v-if="actions">
      <x-button
        outline
        v-if="active != 1"
        v-bind="{
        content: prev.content,
        color: prev.color,
        click: goPrevious
      }"
      ></x-button>
      <x-button
        v-bind="{
        content: active != count ? next.content : finish.content,
        color: next.color,
        click: goNext
      }"
      ></x-button>
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../mixins/tools.js';
import { UNKNOW_STEPPER } from '../../const/message';
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
      count: this.steps.length,
      UNKNOW_STEPPER
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

<style lang="stylus" scoped>
@import "../../styles/_variables.styl";


>>>.v-stepper,.v-stepper--alt-labels,.v-stepper--vertical {
  box-shadow: none;
  background: none!important;

  /*  ---- steps section ---- */
  .v-stepper__header {
    box-shadow: none;
  }

  hr {
    border-width: 1px;
    border-color: $silver-two !important;
  }

  .v-stepper__step {
    .v-stepper__label {
      font-weight: 600;
    }

    /* active */
    &.v-stepper__step--active {
      .v-stepper__label {
        color: $secondary-01;
      }

      .v-stepper__step__step {
        box-shadow: 0 2px 10px rgba(175, 192, 228, 0.6);
        border: 6px solid white !important;
        color: transparent;

        &.primary {
          background: $secondary-01 !important;
        }
      }
    }

    /* complete */
    &.v-stepper__step--complete {
      .v-stepper__label {
        color: $secondary-01;
      }

      .v-stepper__step__step {
        box-shadow: 0 2px 10px rgba(175, 192, 228, 0.6);

        i {
          font-size: 15px;
        }

        &.primary {
          background: $secondary-01 !important;
        }
      }
    }

    /* inactive */
    &.v-stepper__step--inactive {
      .v-stepper__label {
        color: $silver;
      }

      .v-stepper__step__step {
        background: none !important;
        border: 3px solid $silver;
        color: transparent;
      }
    }
  }

  /* ---- content section ---- */
  .v-stepper__items {
  }
}

/* ---- button section ---- */
.action-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  .v-btn {
    font-weight: 600;
  }
}
</style>
