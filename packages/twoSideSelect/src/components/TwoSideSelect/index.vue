<template>
  <div class='main-wrapper'>
    <div class='left-wrapper'>
      <div class="top-box">
        <a class="item-checkbox">
          <input type="checkbox" id="poolSideId">
          <label for="poolSideId">
            <a class="box-title">Search Result</a>
          </label>
        </a>
      </div>
      <div class="center-box">
        <div
          v-for='(item, index) in innerPoolItems'
          :key='item.value || index'
        >
          <SelectionRow
            :label='item.label'
            :value='item.value'
            :onSelect='onSelectPoolHandler'
            :onClickButtonHandler='onClickAddSingleHandler'
          />
        </div>
      </div>
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
      <div class="top-box">
        <a class="item-checkbox">
          <input type="checkbox" id="selectedSideId">
          <label for="selectedSideId">
            <a class="box-title">Selected Items</a>
          </label>
        </a>
      </div>
      <div class="center-box">
        <div class="empty" v-if='innerItems.length <=0'> Empty Items</div>
        <div
          v-else='innerItems.length > 0'
          v-for='(item, index) in innerItems'
          :key='item.value'
        >
          <SelectionRow
            :label='item.label'
            :value='item.value'
            buttonChar='x'
            :onSelect='onSelectItemHandler'
            :onClickButtonHandler='onClickRemoveSingleHandler'
          />
        </div>
      </div>
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
// import TextRow from '../TextRow'

export default {
  name: 'Cart',
  components: {SelectionRow},
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
    // -=-=-=-=-=-=-=-=- items section -=-=-=-=-=-=-=-=-
    onRemoveItem: function(_item){
      return this.removeFromList('innerItems', _item)
    },
    onAddItem: function(_item){
      return this.addToList('innerItems', _item)
    },
    onSelectItemHandler: function (_item) {
      this.selectedItems.push(_item)
    },
    // -=-=-=-=-=-=-=-=- pool items section -=-=-=-=-=-=-=-=-
    onRemovePoolItem: function(_item){
      return this.removeFromList('innerPoolItems', _item)
    },
    onAddPoolItem: function(_item = {}){
      return this.addToList('innerPoolItems', _item)
    },
    onSelectPoolHandler: function (_item) {
      this.selectedPoolItems.push(_item)
    },
    // -=-=-=-=-=-=-=-=-interaction section -=-=-=-=-=-=-=-=-
    onClickAddSingleHandler: function(item){
      this.onAddItem(item)
      this.onRemovePoolItem(item)
      this.emitParentOnChange(this.innerItems)
    },
    onClickAddAllHandler: function(){
      const {selectedPoolItems} = this
      for(const item of this.selectedPoolItems) {
        this.onAddItem(item)
        this.onRemovePoolItem(item)
      }
      this.emitParentOnChange(this.innerItems)
    },
    onClickRemoveSingleHandler: function(_item){
      this.onRemoveItem(_item)
      this.onAddPoolItem(_item)
      this.emitParentOnChange(this.innerItems)
    },
    onClickRemoveAllItemsHandler: function(_item){
      const {selectedItems} = this
      for(const item of this.selectedItems) {
        this.onAddPoolItem(item)
        this.onRemoveItem(item)
      }
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

    .top-box {
      border-bottom: 1px solid rgba(0,0,0,0.05);
      padding: 10px 20px 10px 0;
      .box-title {
        font-size: 16px;
        display: inline-block;
        font-weight: 600;
      }
    }

    .center-box {
      max-height: 294px;
      overflow-y: auto;
      min-height: 50px;
      color: #2c3e50;
      .empty {
        opacity: 0.3;
        line-height: 50px;
        text-align: left;
        padding: 0 0 0 20px;
      }
    }

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