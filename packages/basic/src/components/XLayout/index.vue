<template>
<div>
  <v-app>
    <template v-if="type === 'admin'">
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
        absolute
        mobile-break-point="500"
        :clipped="clipped"
        :class="drawerClass"
        :width="drawerWidth"
        :right="drawerRight"
        class="white--text"
      >
        <slot name="drawer"></slot>
      </v-navigation-drawer>

      <v-toolbar
        app
        dark
        absolute
        :clipped-left="clipped"
        :class="toolbarClass"
        class="white--text"
        :height="toolbarHeight"
      >
        <slot name="toolbar"></slot>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height :class="contentClass">
          <v-layout column wrap>
            <v-flex align-start justify-start fill-height>
              <slot name="content"></slot>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </template>

    <template v-if="type === 'simple'">
      <v-content class="white--text">
        <v-container fill-height fluid :class="contentClass">
          <v-layout row wrap justify-space-around>
            <v-flex
              xs11
              align-center
              justify-center
              v-for="(name, index) in ['header', 'content', 'footer']"
              :key="index"
            >
              <slot :name="name" ></slot>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </template>

    <template v-if="type === 'error'">
      <v-content class="white--text">
        <v-container fill-height fluid>
            <v-layout row wrap justify-space-around>
              <v-flex xs11 align-center justify-center>
                <slot></slot>
              </v-flex>
            </v-layout>
        </v-container>
      </v-content>
    </template>

    <template v-if="type === 'widget'">
      <div class="widget-container">
        <slot name="content"></slot>
      </div>
    </template>
  </v-app>
</div>
</template>

<script>
import tools, { oneOf } from '../../mixins/tools.js';
export const propOptions = { type: ['admin', 'simple', 'error', 'widget'] };

export default {
  name: 'x-layout',
  mixins: [tools],
  props: {
    type: {
      type: String,
      default: 'simple',
      validator: oneOf(propOptions.type)
    },
    clipped: { type: Boolean, default: true },
    drawerWidth: { type: Number, default: 200 },
    drawerClass: { type: String, default: 'grey darken-3' },
    drawerRight: { type: Boolean, default: false },
    toolbarClass: { type: String, default: 'blue darken-3' },
    toolbarHeight: { type: Number, default: 65 },
    contentClass: { type: String, default: '' },
    hideDrawer: { type: Boolean, default: false }
  },
  data() {
    return {
      drawer: true
    };
  },
  created() {
    this.$bus.$on('lazybee-toggle-drawer', this.toggleDrawer);
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="stylus" scoped>
.application.theme--light {
  background-color: inherit;
  color: inherit;
}
</style>
