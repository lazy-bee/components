<template>
  <div class='row'>
    <span>{{label}}</span>
    <a  @click='onRemoveItem'>
      <span class='closeButton'> x </span>
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
.row{
  border: 1px gray solid;
  line-height: 50px;

  .closeButton {
    float: right;
    width: 30px;
    border: 1px black solid;
    z-index: 2px;
  }
}
</style>