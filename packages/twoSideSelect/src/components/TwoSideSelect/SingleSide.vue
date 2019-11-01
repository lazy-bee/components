<template>
  <div class="list-wrp">
    <div class="top-box">
      <a class="item-checkbox" @click="onSelectAll">
        <input type="checkbox" :name="id" :checked="isSelectedAll" />
        <label class="box-title"> {{ label }} </label>
      </a>
    </div>
    <div class="center-box">
      <div v-if="itemList.length <= 0" class="empty-msg">
        <p>Empty</p>
      </div>
      <div
        v-for="(item, index) in itemList"
        :key="item.value || index"
        class="item-wrp"
      >
        <SelectionRow
          :isDisable="isDisable(item)"
          :isSelected="_isSelected(item)"
          :buttonChar="buttonChar"
          :label="item.label"
          :value="item.value"
          :isHtml="item.isHtml"
          :onSelect="onSelect"
          :onClickButtonHandler="onClickAddSingleHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectionRow from "../SelectionRow";

function getRndInteger(min = 0, max = 9999) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  name: "SingleSide",
  components: { SelectionRow },
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: "Search Result"
    },
    itemList: {
      type: Array,
      default: () => []
    },
    disableItemList: {
      type: Array,
      default: () => []
    },
    selectedItemList: {
      type: Array,
      default: () => []
    },
    onSelect: {
      type: Function,
      default: null
    },
    onSelectAll: {
      type: Function,
      default: null
    },
    onClickAddSingleHandler: {
      type: Function,
      default: null
    },
    buttonChar: {
      type: String,
      default: "+"
    }
  },
  computed: {
    _id: function() {
      return this.id || getRndInteger(1000);
    },
    isSelectedAll: function() {
      return (
        this.selectedItemList.length === this.itemList.length &&
        this.itemList.length > 0
      );
    }
  },
  methods: {
    _isSelected: function(_item) {
      const target = this.selectedItemList.find(
        item => _item.value === item.value
      );

      if (!target) return false;
      return true;
    },
    isDisable: function(targetItem) {
      const { disableItemList } = this;
      const target = disableItemList.find(
        _item => _item.value === targetItem.value
      );

      if (!target) return false;
      return true;
    }
  }
};
</script>

<style scoped lang="scss">
.list-wrp {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.top-box {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
  display: flex;
  flex-direction: column;
  flex: 1;
  .item-wrp {
    width: 100%;
  }
  .empty-msg {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      opacity: 0.3;
    }
  }
}
</style>
