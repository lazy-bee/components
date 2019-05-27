<template>
  <div class='main-wrapper'>
    <div class='left-wrapper'>
      <SingleSide
        :itemList='innerPoolItems'
        :selectedItemList='selectedPoolItems'
        :onSelect='onSelectPoolHandler'
        :onSelectAll='onSelectAllPoolHandler'
        :onClickAddSingleHandler='onClickAddSingleHandler'
      />
      <div class="bottom-box">
        <button class='main-btn add-btn' @click='onClickAddAllHandler'>
          <span class="btn-content">
            <span class="text">Add</span>
            <span class="arrow"></span>
          </span>
        </button>
      </div>
    </div>
    <div class='left-wrapper'>
      <SingleSide
        buttonChar='x'
        :itemList='innerItems'
        :selectedItemList='selectedItems'
        :onSelect='onSelectItemHandler'
        :onSelectAll='onSelectAllItemHandler'
        :onClickAddSingleHandler='onClickRemoveSingleHandler'
      />
      <div class="bottom-box">
        <button class='main-btn remove-btn' @click='onClickRemoveAllItemsHandler'>
          <span class="btn-content">
            <span class="arrow"></span>
            <span class="text">Remove</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SelectionRow from '../SelectionRow'
import SingleSide from './SingleSide'
// import TextRow from '../TextRow'

export default {
  name: 'Cart',
  components: {SelectionRow, SingleSide},
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
    const selectedPoolItems = []
    const selectedItems = []
    return {innerItems, innerPoolItems, selectedPoolItems, selectedItems}
  },
  watch: {
    poolItems: function(newVal = []){
      this.innerPoolItems = [...newVal]
    }
  },
  methods: {
    // -=-=-=-=-=-=-=-=- common list function -=-=-=-=-=-=-=-=-
    removeFromList: function(field, _item){
      const targetList = this[field]
      const tList = targetList.filter(item => item.value !== _item.value)
      this[field] = [...tList]
    },
    addToList: function(field, _item){
      const targetList = this[field] || []
      const isExisted = targetList.find(item => item.value === _item.value)

      if(!isExisted) {
        this[field].push(_item)
      }
    },
    onSelect: function(field, _item){
      const targetList = this[field] || []
      const isExisted = targetList.find(item => item.value === _item.value)

      if(!isExisted) {
        return this[field].push(_item)
      }

      const tList = targetList.filter(item => item.value !== _item.value)
      return this[field] = [...tList]
    },
    // -=-=-=-=-=-=-=-=- items section -=-=-=-=-=-=-=-=-
    onRemoveItem: function(_item){
      return this.removeFromList('innerItems', _item)
    },
    onAddItem: function(_item){
      return this.addToList('innerItems', _item)
    },
    onSelectItemHandler: function (_item) {
      // this.selectedItems.push(_item)
      return this.onSelect('selectedItems', _item)
    },
    // -=-=-=-=-=-=-=-=- pool items section -=-=-=-=-=-=-=-=-
    onRemovePoolItem: function(_item){
      return this.removeFromList('innerPoolItems', _item)
    },
    onAddPoolItem: function(_item = {}){
      return this.addToList('innerPoolItems', _item)
    },
    onSelectPoolHandler: function (_item) {
      return this.onSelect('selectedPoolItems', _item)
    },
    // -=-=-=-=-=-=-=-=-select all section -=-=-=-=-=-=-=-=-
    onSelectAllPoolHandler: function () {
      if(this.selectedPoolItems.length === this.innerPoolItems.length) {
        return this.selectedPoolItems = []
      }
      return this.selectedPoolItems = [...this.innerPoolItems]
    },
    onSelectAllItemHandler: function () {
      if(this.selectedItems.length === this.innerItems.length) {
        return this.selectedItems = []
      }

      return this.selectedItems = [...this.innerItems]
    },
    // -=-=-=-=-=-=-=-=-interaction section -=-=-=-=-=-=-=-=-
    onClickAddSingleHandler: function(item){
      this.onAddItem(item)
      this.onRemovePoolItem(item)
      this.removeFromList('selectedPoolItems', item)
      this.emitParentOnChange(this.innerItems)
    },
    onClickRemoveSingleHandler: function(_item){
      this.onRemoveItem(_item)
      this.onAddPoolItem(_item)
      this.removeFromList('selectedItems', _item)
      this.emitParentOnChange(this.innerItems)
    },
    onClickAddAllHandler: function(){
      const {selectedPoolItems} = this
      for(const item of this.selectedPoolItems) {
        this.onAddItem(item)
        this.onRemovePoolItem(item)
      }
      this.selectedPoolItems = []
      this.emitParentOnChange(this.innerItems)
    },
    onClickRemoveAllItemsHandler: function(_item){
      const {selectedItems} = this
      for(const item of this.selectedItems) {
        this.onAddPoolItem(item)
        this.onRemoveItem(item)
      }
      this.selectedItems = []
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
  display: flex;
  justify-content: space-between;
  color: rgba(0,0,0,.87);

  > div {
    flex: 0 1 49%;
    border-radius: 4px;
    box-shadow: 0 0 18px hsla(0,0%,57%,.1);
    display: flex;
    flex-direction: column;

    .bottom-box {
      border-top: 1px solid rgba(0,0,0,0.05);
      margin-top: auto;
      .main-btn {
        width: 100%;
        height: 50px;
        transition: 0.2s;
        font-size: 15px;
        .btn-content {
          display: inline-block;
          transition:0.3s;
        }
        &:hover {
          background-color: rgba(0,0,0,0.015);
        }
        &:focus {
          outline: none;
        }
        &.add-btn {
          .arrow {
            margin: 0 0 0 15px;
          }
          &:hover {
            .btn-content {
              transition:0.3s;
              transform: translateX(4px);
            }
          }
        }
        &.remove-btn {
          .arrow {
            margin: 0 15px 0 0;
            transform: rotateZ(225deg);
          }
          &:hover {
            .btn-content {
              transition:0.3s;
              transform: translateX(-4px);
            }
          }
        }
      }
    }
  }
}

</style>