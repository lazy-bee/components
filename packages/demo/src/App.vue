<template>
  <div id="app">
    <left-nav />
    <div class="demoContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav.vue";
export default {
  name: "app",
  components: {
    LeftNav
  },
}
</script>

<style lang="scss">
@import "./style/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.demoContent {
  width: 100%;
}
</style>
