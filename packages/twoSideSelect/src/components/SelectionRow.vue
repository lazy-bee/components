<template>
  <div class='row'>
    <a @click='onSelectedItem'>
      <input type="checkbox" :name="label" :checked="isSelected">
      <span>{{label}}</span>
    </a>
    <a  @click='_onAddItem' class='addButton'  >
      <span > + </span>
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
.row{
  border: 1px gray solid;
  line-height: 50px;
  display: flex;

  a {
    display: block;
  }

  .addButton {
    width: 30px;
    border: 1px gray solid;
  }
}
</style>