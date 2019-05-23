<template>
  <div class='main-wrapper'>
    <div class='left-wrapper'>
      <div class="top-box">
        <a class="item-checkbox">
          <input type="checkbox" id="all">
          <label for="all"><h3 class="box-title">Search Result</h3></label>
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
            :onSelect='onAddPoolItem'
            :onAddItem='onClickAddSingleHandler'
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
          <input type="checkbox" id="all2">
          <label for="all2"><h3 class="box-title">Selected Items</h3></label>
        </a>
      </div>
      <div class="center-box">
        <div class="empty" v-if='innerItems.length <=0'> Empty Items</div>
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
      <div class="bottom-box">
        <button class='main-btn remove-btn'>
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