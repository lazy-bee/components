<template>
  <div class='item-box'>
    <a class="item-checkbox" @click='onSelectedItem'>
      <input type="checkbox" :name="label" :checked="isSelected">
      <label>{{label}}</label>
    </a>
    <a @click='_onAddItem' class='sub-btn'>
      <span>+</span>
    </a>
  </div>
</template>



<script>
export default {
  name: 'Cart',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    onSelect: {
      type: Function,
      default: null
    },
    onAddItem: {
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
    _onAddItem: function(){
      const {label, value} = this
      const item = {label, value}
      return this.onAddItem(item)
    }
  }
}
</script>

<style scoped lang="scss">

</style>