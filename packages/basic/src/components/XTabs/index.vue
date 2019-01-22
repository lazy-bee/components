<template>
  <div v-if="authority !== 'invisible'">
    <tabs v-model="active" :type="tabType" :tab-position="position" @tab-click="tabClick">
      <tab-pane v-for="(tab, index) in tabs" :key="index" :label="tab.label">
        <slot :name="tab.slot"/>
      </tab-pane>
    </tabs>

    <div v-if="control" class="tabs-control">
      <x-button
        v-bind="{
        content: prev.content,
        color: prev.color,
        round: prev.round,
        click: prevTab
      }"
      />
      <x-button
        v-bind="{
        content: next.content,
        color: next.color,
        round: next.round,
        click: nextTab
      }"
      />
    </div>
  </div>
</template>

<script>
import { oneOf } from '../../mixins/tools.js';
export const propOptions = {
  type: ['card', 'line'],
  position: ['top', 'bottom', 'left', 'right']
};
import { Tabs, TabPane } from 'element-ui';

export default {
  name: 'x-tabs',
  components: {
    Tabs,
    TabPane
  },
  props: {
    tabs: { type: Array, default: () => [] },
    type: {
      type: String,
      default: 'line',
      validator: oneOf(propOptions.type)
    },
    control: { type: Boolean, default: false },
    position: {
      type: String,
      default: 'top',
      validator: oneOf(propOptions.position)
    },
    prev: {
      type: Object,
      default: () => {
        return {
          content: 'Prev Tab'
        };
      }
    },
    next: {
      type: Object,
      default: () => {
        return {
          content: 'Next Tab'
        };
      }
    },
    tabClick: { type: Function, default: () => {} },
    authority: { type: String, default: 'available' }
  },
  computed: {
    tabType() {
      return this.type == 'card' ? 'border-card' : '';
    }
  },
  data() {
    return {
      active: '0'
    };
  },
  methods: {
    nextTab() {
      const active = parseInt(this.active);
      this.active = (active < this.tabs.length - 1 ? active + 1 : 0).toString();
    },

    prevTab() {
      const active = parseInt(this.active);
      this.active = (active > 0 ? active - 1 : this.tabs.length - 1).toString();
    },

    getActive() {
      return this.active;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

>>>.el-tabs {
  .el-tabs__header {
    .el-tabs__nav-wrap {
      .el-tabs__nav-scroll {
        .el-tabs__nav {
          .el-tabs__active-bar {
            background: $secondary-01;
          }

          .el-tabs__item {
            color: $bluey-grey;

            &.is-active {
              color: $dark;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  .el-tabs__content {
    .tabpanel {
      color: red;
    }
  }
}

/* ---- card style shadow ---- */
>>>.el-tabs--border-card {
  box-shadow: none;
  border: 0px solid $pale-grey;
  border-radius: 3px;
  background: transparent;

  .el-tabs__header {
    background: transparent;

    .el-tabs__nav {
      .el-tabs__item {
        border-radius: 3px 3px 0 0;

        &.is-active {
          color: $secondary-01 !important;
          box-shadow: insert 0 -1px 0 #dcdfe6;
        }
      }
    }
  }

  .el-tabs__content {
    background: white;
  }
}

.tabs-control {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
