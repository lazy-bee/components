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
      <tr class="sortableRow" :key="itemKey(props.item)" @click="(e) => { clickCallback.call(null, props.item, e) }">
        <td v-if="multiSelectable" class="select-checkbox">
          <div class="td-wrapper">
            <v-checkbox hide-details v-model="props.selected"></v-checkbox>
          </div>
        </td>
        
        <td
          v-for="{ value: columnName, render, type, onSwitchChange } in columns"
          :key="columnName"
          v-if="columnName !== 'action'"
        > 

          <div v-if="columnName === 'draggable'" class="td-wrapper">
            <v-btn icon class="sortHandle">
              <v-icon>drag_handle</v-icon>
            </v-btn>
          </div>
          
          <div v-else-if="type === 'switch'" class="td-wrapper switch-td-wrapper">
            <v-switch v-model="props.item.switch" 
              @change="(val) => onSwitchChange && onSwitchChange(val, props.item)"></v-switch>
          </div>

          <div v-else class="td-wrapper" :class="`${columnName}-td-wrapper`">
            <div v-html="render ? render(props.item) : props.item[columnName]"></div>
          </div>

        </td>
        
        <td v-if="actions.length" class="actions-area">
          <div class="td-wrapper">
            <div class="actions-btn-wrapper">
              <x-button
                v-if="checkRender(btn, props.item)"
                v-for="(btn, index) in actions"
                :key="index"
                v-bind="btn"
                :click="actionClicked(props.item, btn)"
              >
                <font-awesome-icon v-if="btn.faIcon" :icon="btn.faIcon" />
              </x-button>
            </div>
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
    // switchBtn: { type: Boolean, default: false },
    headers: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    actions: { type: Array, default: () => [] },
    multiSelectable: { type: Boolean, default: true },
    selectCallback: { type: Function, default: () => {} },
    clickCallback: { type: Function, default: () => {} },
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
        ? [
            { sortable: false, value: 'draggable', text: 'Sorting' },
            ...this.headers
          ]
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

        &:nth-child(4n + 1) {
          background-color: $pale-grey-two;
        }

        td {
          color: $slate-grey;
          font-size: 14px;
          font-weight: 400;

          .switch-td-wrapper{
            .v-input{
              .v-input__control{
                .v-input__slot{
                  margin-bottom:0;              
                } 
                .v-messages{
                  display:none;  
                }   
              }  
            }
          }

          a {
            color: $secondary-01;
            text-decoration: none;
          }

          /* ---- action icon ---- */
          &.actions-area {
            .actions-btns-wrapper {
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }

            button {
              border: 1px solid $silver-two;
              width: 28px;
              height: 28px;
              line-height: 28px;
              margin: 6px 5px;

              .v-icon {
                line-height: 28px;
              }

              &:hover {
                background: $secondary-01 !important;

                i {
                  color: white !important;
                }
                .svg-inline--fa{
                  color: white;  
                }
              }

              .svg-inline--fa{ // font awesome
                color: $slate-grey;
                font-size: 14px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);    
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
