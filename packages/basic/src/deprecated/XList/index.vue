<template>
<v-list
  v-if="authority !== 'invisible'"
  subheader
>
  <template v-for="(item, index) in list">
    <v-list-group
      v-if="!item.divider"
      :key="index"
      :class="{'list-item-disabled': item.disabled}"
      :append-icon="item.list ? 'keyboard_arrow_down' : '' "
    >
      <v-list-tile
        slot="activator"
        :path="item.path"
        :id="item.id"
        :class="{'list-item-disabled': item.disabled}"
        @click.native="(event) => { itemClick(event, item, item.click); }"
      >
        <v-icon class="list-item-icon" v-if="item.icon">{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-list-tile>

      <template v-for="(subItem, index2) in item.list" >
        <v-list-tile
          v-if="!subItem.divider"
          :key="index2"
          :path="subItem.path"
          :id="subItem.id"
          :class="{'list-item-disabled': subItem.disabled}"
          @click.stop="(event) => { itemClick(event, subItem, subItem.click); }"
        >
          <v-icon class="list-item-icon" v-if="subItem.icon">{{ subItem.icon }}</v-icon>
          {{ subItem.name }}
        </v-list-tile>

        <v-divider
          v-else
          :key="index2"
        ></v-divider>
      </template>
    </v-list-group>

    <v-divider v-else :key="index"></v-divider>
  </template>
</v-list>
</template>

<script>
import tools from '../../mixins/tools.js';

export default {
  name: 'x-list',
  mixins: [tools],
  props: {
    router: { type: String, default: '' },
    list: { type: Array, default: () => [] },
    params: { type: Object, default: () => {} },
    authority: { type: String, default: 'available' }
  },
  mounted() {
    if (this.router) {
      const el = document.querySelector(`[path="${this.router}"]`);
      this.addClass(el, 'list-item-active');
    }
  },
  methods: {
    itemClick(event, item, callback) {
      const activeEl = document.querySelector('.list-item-active');
      this.removeClass(activeEl, 'list-item-active');

      const currentEl = event.target;
      this.addClass(currentEl, 'list-item-active');

      if (typeof callback === 'function') {
        callback(item, this.params);
      }
    }
  }
};
</script>

<style lang="stylus">
.list-item-disabled .list__tile  {
  cursor: no-drop !important;
  color: #9f9f9f;
}

.list-item-icon {
  margin-right 15px
}

.list__group__header {
  position

  .list__group__header__append-icon {
    position absolute
    right: 0;
  }
}

.list-item-active {
  background-color: rgba(0, 0, 0, .12);
}

.list__group__items .list__tile {
  padding: 0 30px;
}
</style>
