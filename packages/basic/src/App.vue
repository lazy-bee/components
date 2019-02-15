<template>
  <div id="app">
  <div class="mainHeader">
    <h1>lazybee</h1>
    <p>A dropdown time picker for Vue 2.x with flexible time format support</p>
  </div>
  <section class="tapsContainer">
    <a @click="tapIndex = 0" class="componentTab" :class="tapIndex===0? 'active' : 'inactive'">xformgroup</a>
    <a @click="tapIndex = 1" class="componentTab" :class="tapIndex===1? 'active' : 'inactive'">xformindialog</a>
    <a @click="tapIndex = 2" class="componentTab" :class="tapIndex===2? 'active' : 'inactive'">xtable</a>
    <a @click="tapIndex = 3" class="componentTab" :class="tapIndex===3? 'active' : 'inactive'">xtootip</a>
  </section>

  <keep-alive>
    <component v-bind:is="currentTabComponent"></component>
  </keep-alive>
  </div>
</template>

<script>
import xformgroupPage from './pages/xformgroup.vue';
import xformindialogPage from './pages/xformindialog.vue';
import xtable from './pages/xtable.vue';
import xtooltip from './pages/xtooltip.vue';

export default {
  name: 'app',
  computed: {
    currentTabComponent: function() {
      if (this.tapIndex === 0) return xformgroupPage;
      if (this.tapIndex === 1) return xformindialogPage;
      if (this.tapIndex === 2) return xtable;
      if (this.tapIndex === 3) return xtooltip;
    }
  },
  methods: {},
  components: {},
  data: function() {
    return {
      tapIndex: ''
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .componentContainer {
    border-top: 1px lightgray solid;
    padding: 20px 0;

    .componentTab {
      border: black solid 1px;
      margin: 0 5px;
      padding: 2px 5px;
    }
  }

  .mainHeader {
    background: #19232d;
    color: #fff;
    text-align: center;
    height: 150px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: column nowrap;
    flex-flow: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }

  .tapsContainer {
    background: #19232d;
    position: relative;
    display: flex;
    justify-content: center;

    a {
      color: hsla(0, 0%, 100%, 0.5);
      display: block;
      padding: 0.8em 0.5em;
      border-radius: 5px;
      transition: color 0.3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      text-decoration: none;
      cursor: pointer;
    }

    .active {
      color: #51c28f;
    }

    a.active:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: #fff;
      position: absolute;
      bottom: -3px;
      left: calc(50% - 10px);
      z-index: 3;
    }
  }
}
</style>

// <style lang="scss">
// @import "./style/main.scss";

//
</style>
