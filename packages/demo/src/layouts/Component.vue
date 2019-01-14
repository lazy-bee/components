<template>
  <div id="componentLayout">
    <div class='tapWrapper'>
      <a @click="" class='tap'> Document </a>
      <a @click="" class='tap active'> Demo </a>
      <a @click="" class='tap'> Readme </a>
    </div>
    <div class='contentWrapper'>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentLayout"
}
</script>

<style lang="scss" scoped>
.tapWrapper {
  padding: 40px 0;

  .tap {
    font-size: 20px;
    margin: 10px 20px;
    padding-bottom: 10px;
    cursor: pointer;
  }
  .active {
    border-bottom: green 3px solid;
  }
}
.contentWrapper {
  margin-top: 30px;
}

#componentLayout {
  
}
</style>
