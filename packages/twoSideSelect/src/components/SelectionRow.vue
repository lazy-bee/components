<template>
  <div :class="isDisable ? 'item-box disable' : 'item-box'">
    <a class="item-checkbox" @click="selectedItem">
      <input
        type="checkbox"
        :name="label"
        :checked="isSelected && !isDisable"
      />
      <label v-if="!isHtml">{{ label }}</label>
      <label v-if="isHtml" v-html="label"></label>
    </a>
    <a @click="_clickButtonHandler" class="sub-btn">
      <span> {{ buttonChar }} </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "SelectionRow",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    buttonChar: {
      type: String,
      default: "+"
    },
    select: {
      type: Function,
      default: null
    },
    clickButtonHandler: {
      type: Function,
      default: null
    }
  },
  methods: {
    selectedItem: function() {
      const { label, value, isDisable, isHtml } = this;
      if (isDisable) return;

      const item = { label, value, isHtml };
      return this.select(item);
    },
    _clickButtonHandler: function() {
      const { label, value, isDisable, isHtml } = this;
      if (isDisable) return;

      const item = { label, value, isHtml };
      return this.clickButtonHandler(item);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/_variable.scss";

.disable {
  opacity: 0.2;
}

.item-box {
  display: flex;
  height: $item-height;
  align-items: center;
  padding-right: 10px;
  transition: 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.015);
  }

  a.sub-btn {
    display: block;
    margin-left: auto;
    height: $item-height;
    display: flex;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
    span {
    }
  }
}
</style>
