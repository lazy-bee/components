<template>
  <div class='item-box'>
    <a class="item-checkbox" @click='onSelectedItem'>
      <input type="checkbox" :name="label" :checked="isSelected">
      <label>{{label}}</label>
    </a>
    <a @click='_onClickButtonHandler' class='sub-btn'>
      <span> {{buttonChar}} </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SelectionRow',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    buttonChar: {
      type: String,
      default: '+'
    },
    onSelect: {
      type: Function,
      default: null
    },
    onClickButtonHandler: {
      type: Function,
      default: null
    },
  },
  data: function(){
    return {isSelected: false}
  },
  methods: {
    onSelectedItem: function(){
      this.isSelected = !this.isSelected

      const {label, value} = this
      const item = {label, value}
      return this.onSelect(item)
    },
    _onClickButtonHandler: function(){
      const {label, value} = this
      const item = {label, value}
      return this.onClickButtonHandler(item)
    }
  }
}
</script>

<style scoped lang="scss">

</style>