<template>
  <div class="wrap">
    <div class="logo">
      <img src="../../asset/Lazybee-logo.svg">
    </div>
    <h1>Lazybee UI Component</h1>
    <p>Lazybee is a UI Component Library base on Vue.js
      <br>It provides variable components for you to build apps and prototype projects quickly.
    </p>
    <x-button v-bind="buttonScheme" v-scroll-to="{ element: '#installation' }"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonScheme: {
        content: 'Get Started',
        color: '#507194',
        borderRadius: 3
      }
    };
  }
};
</script>

<style lang='stylus' scoped>
.wrap {
  background: #ffe01c;
  color: #000;
  padding: 50px 20px 80px 20px;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 60px;

  .logo {
    width: 200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 45px;
    line-height: 1.6;
    font-family: 'Laila', serif;
  }

  p {
    margin: 0 auto;
    padding-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
  }
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0 50px 0;
    margin-bottom: 60px;

    .logo {
      width: 180px;
    }

    h1 {
      font-size: 38px;
    }

    p {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    margin-bottom: 40px;

    .logo {
      width: 160px;
    }

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 13px;
      line-height: 1.3;
    }
  }
}
</style>
