<template>
  <section class='componentContainer'>
    <h1>DatePicker </h1>
    <HelloWorld />
  </section>
</template>


<script>
import {HelloWorld} from "@lazy-bee/basic";

console.log('HelloWorld: ', HelloWorld)

export default {
  name: "firstpage",
  components: { HelloWorld },
  data: function() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.componentContainer {
  margin: auto;
  width: 70%;
}
h1{
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 40px;
}
</style>
