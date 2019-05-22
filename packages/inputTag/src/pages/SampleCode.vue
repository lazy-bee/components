<template>
  <section class="sampleSection">
    <h2>Sample</h2>
    <div class="exampleWrapper">
      <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
    </div>
  </section>
</template>

<script>
import InputTagExmapleRaw from "!raw-loader!./InputTag.exmaple.vue";
export default {
  data: function() {
    return {
      sourcecode: InputTagExmapleRaw
    };
  }
};
</script>

<style lang="scss" scoped>
.sampleSection {
  margin-top: 20px;
  text-align: left;
  width: 100%;

  .exampleWrapper {
    padding: 20px;
    background: #eeeeee;
  }
}
</style>
