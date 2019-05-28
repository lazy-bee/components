<template>
  <div class='main-wrapper'>
    <div class='left-wrapper'>
      <SingleSide
        :label='leftLabel || "Selected Result"'
        :itemList='innerPoolItems'
        :disableItemList='innerItems'
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
        :label='rightLabel || "Selected Result"'
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

export default {
  name: 'TwoSideSelect',
  components: {SelectionRow, SingleSide},
  props: {
    leftLabel: {
      type: String,
      default: ''
    },
    rightLabel: {
      type: String,
      default: ''
    },
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
      this.selectedPoolItems = []
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

      .arrow {
        border-top: 2px solid #525862;
        border-right: 2px solid #525862;
        width: 9px;
        height: 9px;
        transform: rotate(45deg);
        position: relative;
        display: inline-block;
        &:after {
          content: " ";
          width: 2px;
          height: 14px;
          background-color: #525862;
          transform: rotate(45deg);
          position: absolute;
          left: 0;
          right: 0;
          top: -1px;
          bottom: 0;
          margin: auto;
        }
      }
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

<style lang="scss">
@import "../..//style/_variable.scss";
a.item-checkbox {
  padding: 0 0 0 20px;
  height: $item-height;
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  position: relative;
  $checkboxColor: hsl(hue(#0149ff), saturation(#0149ff), 50%);
  $checkboxSize: 18px;
  font-size: 15px;
  input[type='checkbox'] {
    margin: 0;
    font-size: 1.25em;
    z-index: -1;
    width: $checkboxSize;
    height: $checkboxSize;
    appearance: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    transform: scale(2);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    &:focus {
      outline: none;
    }
    &:checked {
      background-color: $checkboxColor;
      + label {
        &::before {
          background-color: $checkboxColor;
          border-color: $checkboxColor;
        }
        &::after {
          border-color: white;
        }
      }
    }
  }
  label {
    cursor: pointer;
    word-break: break-all;
    height: 42px;
    line-height: 42px;
    overflow: hidden;
    &::before {
      content: '';
      display: inline-block;
      width: $checkboxSize;
      height: $checkboxSize;
      margin-right: 12px;
      border: solid 2px #d6dbdd;
      border-radius: 2px;
      vertical-align: -4px;
      transition: border-color 0.2s, background-color 0.2s;
    }
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      $checkWidth: $checkboxSize * 0.35;
      $checkHeight: $checkWidth * 2;
      width: $checkWidth;
      height: $checkHeight;
      border: solid 2px transparent;
      border-left: none;
      border-top: none;
      transform: translate(26px,13px) rotate(45deg)
    }
  }
}
</style>