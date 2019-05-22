<template>
  <div class='main-wrapper'>
    <div class='left-wrapper'>
      left
      <div
        v-for='(item, index) in innerPoolItems'
        :key='item.value || index'
      >
        <SelectionRow
          :label='item.label'
          :value='item.value'
          :onSelect='onAddPoolItem'
          :onAddItem='onClickAddSingleHandler'
        />
      </div>
      <button class='addPoolButton' @click='onClickAddAllHandler'> Add All </button>
    </div>
    <div class='left-wrapper'>
      right
      <div v-if='innerItems.length <=0'> Empty Items</div>
      <div
        v-else='innerItems.length > 0'
        v-for='(item, index) in innerItems'
        :key='item.value'
      >
        <TextRow
          :label='item.label'
          :value='item.value'
          :onRemove='onClickRemoveSingleHandler'
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectionRow from '../SelectionRow'
import TextRow from '../TextRow'

export default {
  name: 'Cart',
  components: {SelectionRow, TextRow},
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    poolItems: {
      type: Array,
      default: () => ([])
    },
    onChange: {
      type: Function,
      default: null
    },
  },
  data: function(){
    const {items: innerItems, poolItems: innerPoolItems} = this
    const selectedItems = []
    return {innerItems, innerPoolItems, selectedItems}
  },
  watch: {
    poolItems: function(newVal = []){
      this.innerPoolItems = [...newVal]
    }
  },
  methods: {
    // -=-=-=-=-=-=-=-=- selected items section -=-=-=-=-=-=-=-=-
    onAddItem: function(_item){
      const isExisted = this.innerItems.find(item => item.value === _item.value)

      if(!isExisted) {
        this.innerItems.push(_item)
      }
    },
    // -=-=-=-=-=-=-=-=- pool items section -=-=-=-=-=-=-=-=-
    onRemovePoolItem: function(_item){
      const {innerPoolItems} = this
      const newItemList = innerPoolItems.filter(item => item.value !== _item.value)
      this.innerPoolItems = [...newItemList]
    },
    onAddPoolItem: function(_item = {}){
      this.selectedItems.push(_item)
    },
    // -=-=-=-=-=-=-=-=-interaction section -=-=-=-=-=-=-=-=-
    onClickAddSingleHandler: function(item){
      this.onAddItem(item)
      this.onRemovePoolItem(item)
      this.emitParentOnChange(this.innerItems)
    },
    onClickAddAllHandler: function(){
      const {selectedItems} = this
      for(const item of this.selectedItems) {
        this.onAddItem(item)
        this.onRemovePoolItem(item)
      }
      this.emitParentOnChange(this.innerItems)
    },
    onClickRemoveSingleHandler: function(_item){
      const {innerItems} = this
      const newItemList = innerItems.filter(item => item.value !== _item.value)
      this.innerItems = [...newItemList]
      this.emitParentOnChange(this.innerItems)
    },
    // -=-=-=-=-=-=-=-=- trigger parent onchange -=-=-=-=-=-=-=-=-
    emitParentOnChange: function(data){
      if (this.$listeners.onChange) {
        return this.$emit("onChange", data);
      }

      if (this.onChange) {
        return this.onChange(data);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-wrapper {
  width: 100%;
  border: 1px black solid;
  display: flex;

  .left-wrapper {
    width: 100%;
    min-width: 300px;
    border: 1px solid black;
    
    .addPoolButton {
      border: 1px black solid;
      padding: 10px 20px;
    }
  }

  .right-wrapper {
    width: 100%;
    min-width: 300px;
    border: 1px solid black;
  }
}
</style>