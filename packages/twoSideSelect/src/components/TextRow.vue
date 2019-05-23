<template>
  <!-- <div class='row'>
    <span>{{label}}</span>
    <a  @click='onRemoveItem'>
      <span class='closeButton'> x </span>
    </a>
  </div> -->
  <div class='item-box'>
    <a class="item-checkbox">
      <input type="checkbox">
      <label>{{label}}</label>
    </a>
    <a @click='onRemoveItem' class='sub-btn'>
      <span>x</span>
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
    onRemove: {
      type: Function,
      default: null
    },
  },
  data: function(){
    // return {isSelected: false}
    return {}
  },
  methods: {
    onRemoveItem: function(){
      const {label, value} = this
      const item = {label, value}
      return this.onRemove(item)
    }
  }
}
</script>

<style scoped lang="scss">

</style>