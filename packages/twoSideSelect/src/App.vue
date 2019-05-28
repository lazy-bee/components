<template>
  <div id="app">
  <div class="mainHeader">
    <h1>@lazy-copilot/leftrightcart</h1>
    <p>A dropdown time picker for Vue 2.x with flexible time format support</p>
  </div>
  <section class="tapsContainer">
    <a @click="tapIndex = 0" class="componentTab" :class="tapIndex===0? 'active' : 'inactive'"> General</a>
    <a @click="tapIndex = 1" class="componentTab" :class="tapIndex===1? 'active' : 'inactive'"> Null </a>
  </section>


    <section class="componentContainer" v-if="tapIndex === 0">
      <h1>Multi Select</h1>
      <div class="btn-box"> 
        <button class='addItemsButton' @click='addSameItems'> add same Items</button>
        <button class='addItemsButton' @click='addRandomItems'> add random Items</button>
      </div>
      <div class="content-box">
        <TwoSideSelect
          :items='initTwoSideSelectItems'
          :poolItems='poolItems'
          :onChange='onChangeHandler'
        />
      </div>
    </section>


    <section class="componentContainer" v-if="tapIndex === 1">
      <h1>Null Select</h1>
      <div class="btn-box"> 
        <button class='addItemsButton' @click='addSameItems'> add same Items</button>
        <button class='addItemsButton' @click='addRandomItems'> add random Items</button>
      </div>
      <div class="content-box">
        <TwoSideSelect
          :items='[]'
          :poolItems='[]'
          :onChange='onChangeHandler'
        />
      </div>
    </section>

  </div>
</template>

<script>
import TwoSideSelect from './components/TwoSideSelect'

const DEFAULT_ITEMS = [
        {label: 'pool1', value: 'poolVal1'},
        {label: 'pool2', value: 'poolVal2'},
        {label: 'pool3', value: 'poolVal3'},
      ]

function getRndInteger(min = 0, max = 9999) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const randomStr = (pre = '') => {
  return `${pre}-${getRndInteger()}`
}

export default {
  name: "app",
  computed: {
  },
  methods: {
  },
  components: {
    TwoSideSelect
  },
  data: function() {
    return {
      tapIndex: '',
      initTwoSideSelectItems: [
        {label: 'label1', value: 'value1'},
        {label: 'label2', value: 'value2'},
        {label: 'label3', value: 'value3'},
      ],
      poolItems: this.initPoolItems()
    };
  },
  methods: {
    onChangeHandler: function(value){
      console.log(' -=-=-=- onChangeHandler value:', value)
    },
    addSameItems: function(){
      this.poolItems = [...DEFAULT_ITEMS]
    },
    addRandomItems: function(){
      return this.poolItems = [1,2,3,4].map(()=> ({
        label: randomStr(),
        value: randomStr(),
      }))
    },
    initPoolItems: function(){
      return [...DEFAULT_ITEMS]
    }
  }
};
</script>

<style lang="scss">
@import "./style/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .componentContainer {
    border-top: 1px lightgray solid;
    padding: 20px 0;

    .addItemsButton{
      border: 1px black solid;
      padding: 10px 20px;
      margin: 5px;
    }
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
      color: hsla(0,0%,100%,.5);
      display: block;
      padding: .8em .5em;
      border-radius: 5px;
      transition: color .3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      text-decoration: none;
      cursor: pointer;
    }

    .active{
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

  .btn-box {
    padding: 20px 0 30px 0;
  }

  .content-box {
    width: 80%;
    margin: 0 auto;
  }
}



</style>
