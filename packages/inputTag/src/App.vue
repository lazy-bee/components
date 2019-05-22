<template>
  <div id="app">
    <div class="mainHeader">
      <h1>@lazy-bee/inputTag</h1>
      <p>Vue implementation of tag input component</p>
    </div>

    <component v-bind:is="exampleComponent"></component>
  </div>
</template>

<script>
import InputTagExample from "./pages/InputTag.exmaple.vue";

export default {
  name: "app",
  computed: {
    exampleComponent: function() {
      return InputTagExample;
    }
  },
  methods: {},
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .componentContainer {
    border-top: 1px lightgray solid;
    padding: 20px 0;
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
}
</style>

<style lang="scss">
@import "./style/_reset.scss";
</style>
