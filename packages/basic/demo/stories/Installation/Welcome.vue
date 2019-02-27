<template>
  <div class="wrap">
   <img src="../../asset/lazybee_logo.svg" class="logoImg">
    <h1>Lazybee Components</h1>
    <p class="intro">Lazybee, a frontend UI component library based on Vue.js, is created for rapidly developing websites, applications, and prototypes by minimizing repeating works, to boost the production timing.
    </p>
    <x-button v-bind="buttonScheme" v-scroll-to="{ element: '#install' }"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonScheme: {
        content: 'Get Started',
        color: '#fff',
        borderRadius: 4,
        outline: true,
        size: 'large'
      }
    };
  }
};
</script>

<style lang='stylus' scoped>
.wrap {
  background-image: url("../../asset/hero_bg.jpg");
  background-size :cover;
  width:100%;
  padding: 130px 0 100px 0;
  margin-bottom: 60px;
  color: #fff;
  font-family: 'Nunito Sans', sans-serif;

  .v-btn--large{
    padding: 0 30px;
    margin-top: 30px;
  }

  .logoImg {
    width: 80px;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 40px;
    line-height: 2;
    font-family: 'Laila', serif;
  }

  p.intro {
    max-width: 750px;
    margin: 0 auto;
    padding-bottom: 20px;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 600;
  }
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding: 80px 0 60px 0;

    h1 {
      font-size: 38px;
    }

    p.intro {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    padding: 80px 30px 60px 30px;

    .logoImg {
      width: 60px;
      margin-bottom: 0;
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
