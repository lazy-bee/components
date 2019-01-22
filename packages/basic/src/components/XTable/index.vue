<template>
  <v-data-table
    class="x-table"
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
        <td v-if="multiSelectable" class="select-checkbox">
          <div class="td-wrapper">
            <v-checkbox hide-details v-model="props.selected"></v-checkbox>
          </div>
        </td>
        <td v-if="draggable ">
          <div class="td-wrapper">
            <v-btn icon class="sortHandle">
              <v-icon>drag_handle</v-icon>
            </v-btn>
          </div>
        </td>
        <td
          v-for="(val, key) in props.item"
          :key="key"
          v-if="key !== 'value' && checkHeaderKey(key)"
        >
          <div class="td-wrapper">
            <div v-html="!checkHeaderRender(key) ? val : checkHeaderRender(key)(props.item)"></div>
          </div>
        </td>

        <td v-if="actions.length" class="actions-area">
          <div class="td-wrapper">
            <x-button
              v-if="checkRender(btn, props.item)"
              v-for="(btn, index) in actions"
              :key="index"
              v-bind="btn"
              :click="actionClicked(props.item, btn)"
            ></x-button>
          </div>
        </td>
      </tr>

      <tr class="tr-spacer"></tr>
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
          name: 'ball-pulse',
          color: '#0149FF'
        };
      }
    }
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
    actionClicked(item, btn) {
      return (e) => btn.click && btn.click.call(this, item, e);
    },
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
      const result = this.headers.find((item) => {
        return item.value === key;
      });

      return (result && result.render) || false;
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

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.x-table {
  position: relative;
  background: rgba(0, 0, 0, 0);

  >>>.v-table {
    background: rgba(0, 0, 0, 0);

    .v-table__overflow{
      overflow-x: visible!important;
      overflow-y: visible!important;
    }

    /* ---- checkbox ---- */
    tbody>tr>td, thead>tr>th {
      .v-input--selection-controls {
        padding-top: 0px;
      }

      .v-input__control {
        .accent--text {
          color: $secondary-01 !important;
        }

        i {
          font-size: 22px;
          color: $silver-two;
        }
      }
    }

    /* ---- thead  ---- */
    thead {
      tr {
        border-bottom: 0px solid #000 !important;
        box-shadow: none;
        height: 45px;

        th {
          font-size: 14px;
          font-weight: 400;
          color: $dark;
          background: none;
        }

        /* ---- thead sorting icon ---- */
        th.column.sortable {
          i {
            opacity: 0.5;
            font-size: 10px;
            color: $silver;
            padding: 0 5px;
          }

          &:hover {
            color: $secondary-01;
            opacity: 0.5;
          }

          &.active {
            color: $secondary-01;
            opacity: 1;

            i {
              opacity: 1;
              color: $secondary-01;
            }
          }
        }
      }
    }

    /* ---- tbody  ---- */
    tbody {
      border: 1px solid #E5E8EB;
      border-radius: 10px;

      tr {
        border-bottom: 0px solid white !important;
        margin: 0 -1px;

        &:hover {
          background: $pale-grey !important;
        }

        &:nth-child(odd) {
          background-color: white;
        }

        &:nth-child(even) {
          background-color: $pale-grey-two;
        }

        td {
          color: $slate-grey;
          font-size: 14px;
          font-weight: 400;

          a {
            color: $secondary-01;
            text-decoration: none;
          }

          /* ---- action icon ---- */
          &.actions-area {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            button {
              background: white !important;
              border: 1px solid $silver-two;
              width: 28px;
              height: 28px;
              margin: 6px 5px;

              .v-icon {
                line-height: 28px;
              }

              &:hover {
                background: $secondary-01 !important;

                i {
                  color: white !important;
                }
              }
            }
          }
          /* ---- status (render from the user who use this component, to be refactored)---- */
          span.dot {
            &:before {
              content: '';
              display: inline-block;
              border-radius: 50%;
              width: 7px;
              height: 7px;
              margin-right: 6px;
              background:red;
            }
            &.confirm:before{
              background:#6289f5;
            }
            &.pending:before{
              background:#ffa74c;
            }
            &.complete:before{
              background:#20c785;
            }
          }

          /* ---- tooltip (render from the user who use this component, to be refactored) ---- */
          .tooltip{
            position: relative;
            display: inline-block;

            .tooltiptext{
              visibility: hidden;
              width: 120px;
              background-color: $dark;
              color: #fff;
              text-align: center;
              border-radius: 4px;
              padding: 5px 0;
              font-size: 12px;
              transition: opacity 0.3s;
              opacity: 0;
              position: absolute; //Position the tooltip
              z-index: 1;
              bottom: 110%;
              left: 50%;
              margin-left: -60px;
            }
            &:hover{
              .tooltiptext{
                visibility: visible;
                opacity: 1;
              }
            }
            .infoIcon{
              color:$slate-grey;
              font-size:16px;
            }
          }
        }

        .td-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center
        }
      }
    }

    /* ---- drag icon ---- */
    .v-btn {
      color: $slate-grey;
    }
  }

  /* ---- loading ---- */
  .mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background-color: white;
    filter: blur(0.5px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
