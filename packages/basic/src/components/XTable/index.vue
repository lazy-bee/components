<template>
<v-data-table
  v-if="authority !== 'invisible'"
  class="elevation-1 x-table"
  :headers="columns"
  :items="dataItems"
  ref="sortableTable"
  v-model="selected"
  :select-all="multiSelectable"
  @input="() => { selectCallback.call(null, selected) }"
  hide-actions
  disable-initial-sort
>
  <template slot="items" slot-scope="props">
    <tr class="sortableRow" :key="itemKey(props.item)">
      <td
        v-if="multiSelectable"
        class="select-checkbox"
      >
        <v-checkbox
          hide-details
          v-model="props.selected"
        ></v-checkbox>
      </td>

      <td v-if="draggable ">
        <v-btn icon class="sortHandle">
          <v-icon>drag_handle</v-icon>
        </v-btn>
      </td>

      <td
        v-for="(val, key) in props.item"
        :key="key"
        v-if="key !== 'value' && checkHeaderKey(key)"
      >
        <div v-html="checkHeaderRender(key) == false ? val : checkHeaderRender(key)(val)"></div>
      </td>

      <td v-if="actions.length" class="actions-area">
        <x-button
          v-if="checkRender(btn, props.item)"
          v-for="(btn, index) in actions"
          :key="index"
          v-bind="btn"
          :click="() => { btn.click.call(null, props.item) }"
        ></x-button>
      </td>
    </tr>
  </template>

  <template v-if="loading" slot="footer">
    <div class="mask">
      <x-spin v-bind="{ name: loadingInfo.name , color: loadingInfo.color }"></x-spin>
    </div>
  </template>
</v-data-table>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  name: 'x-table',
  props: {
    headers: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    actions: { type: Array, default: () => [] },
    multiSelectable: { type: Boolean, default: true },
    selectCallback: { type: Function, default: () => {} },
    selectItems: { type: Array, default: () => [] },
    draggable: { type: Boolean, default: false },
    dragEndCallback: { type: Function, default: () => {} },
    loading: { type: Boolean, default: false },
    loadingInfo: {
      type: Object,
      default: () => {
        return {
          name: 'line-scale',
          color: '#1565C0'
        };
      }
    },
    authority: { type: String, default: 'available' }
  },
  watch: {
    items: {
      deep: true,
      handler: function(val, oldVal) {
        this.dataItems = val;
      }
    }
  },
  mounted() {
    if (this.draggable) {
      Sortable.create(
        this.$refs.sortableTable.$el.getElementsByTagName('tbody')[0],
        {
          handle: '.sortHandle',
          onEnd: this.dragReorder
        }
      );
    }
  },
  data() {
    return {
      itemKeys: new WeakMap(),
      currentItemKey: 0,
      selected: [],
      dataItems: this.items,
      columns: this.draggable
        ? [{ sortable: false, text: 'Sorting' }, ...this.headers]
        : this.headers
    };
  },
  methods: {
    itemKey(item) {
      if (!this.itemKeys.has(item))
        this.itemKeys.set(item, ++this.currentItemKey);
      return this.itemKeys.get(item);
    },

    checkHeaderKey(key) {
      return this.headers.some((item) => {
        return item.value === key;
      });
    },

    checkHeaderRender(key) {
      let result = this.headers.find((item) => {
        return item.value === key;
      });

      if (result.render) {
        return result.render;
      } else {
        return false;
      }
    },

    checkRender(btn, item) {
      if (!btn.render) {
        return true;
      } else {
        return btn.render(item);
      }
    },

    getSelected() {
      return this.selected;
    },

    dragReorder({ oldIndex, newIndex }) {
      const movedItem = this.items.splice(oldIndex, 1)[0];
      this.items.splice(newIndex, 0, movedItem);

      this.dragEndCallback(this.items);
    }
  }
};
</script>

<style lang="stylus">
.x-table {
  position: relative;

  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .5;
    background-color: #efefef;
    filter: blur(.5px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .actions-area {
    display: flex;
    align-items: center;
    justify-content start;
  }

  .btn {
    margin-right: 10px;
  }
}
</style>
