<template>
  <div id="app">
  <div class="mainHeader">
    <h1>@lazy-copilot/leftrightcart</h1>
    <p>A dropdown time picker for Vue 2.x with flexible time format support</p>
  </div>
  <section class="tapsContainer">
    <a @click="tapIndex = 0" class="componentTab" :class="tapIndex===0? 'active' : 'inactive'">Left-Right Cart</a>
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

$item-height: 42px;
.item-box{
  display: flex;
  height: $item-height;
  align-items: center;
  transition: 0.2s;
  &:hover {
    background-color: rgba(0,0,0,0.015);
  }

  a.sub-btn {
    display: block;
    margin-left: auto;
    height: $item-height;
    display: flex;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
    span {

    }
  }
}

a.item-checkbox {
  padding: 0 0 0 20px;
  height: $item-height;
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: left;
  position: relative;
  $checkboxColor: hsl(hue(#0149ff), saturation(#0149ff), 50%);
  $checkboxSize: 18px;
  font-size: 15px;
  input[type='checkbox'] {
    margin: 0;
    font-size: 1.25em;
    z-index: -1;
    width: $checkboxSize;
    height: $checkboxSize;
    appearance: none;
    position: absolute;
    display: block;
    border-radius: 50%;
    transform: scale(2);
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    &:focus {
      outline: none;
    }
    &:checked {
      background-color: $checkboxColor;
      + label {
        &::before {
          background-color: $checkboxColor;
          border-color: $checkboxColor;
        }
        &::after {
          border-color: white;
        }
      }
    }
    // &:active {
    //   opacity: 1;
    //   transform: scale(0);
    //   transition: opacity 0s, transform 0s;
    //   + label::before {
    //     border-color: $checkboxColor;
    //   }
    // }
  }
  label {
    cursor: pointer;
    &::before {
      content: '';
      display: inline-block;
      width: $checkboxSize;
      height: $checkboxSize;
      margin-right: 12px;
      border: solid 2px #d6dbdd;
      border-radius: 2px;
      vertical-align: -4px;
      transition: border-color 0.2s, background-color 0.2s;
    }
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      $checkWidth: $checkboxSize * 0.35;
      $checkHeight: $checkWidth * 2;
      width: $checkWidth;
      height: $checkHeight;
      border: solid 2px transparent;
      border-left: none;
      border-top: none;
      transform: translate(26px,13px) rotate(45deg)
    }
  }
}

.arrow {
  border-top: 2px solid #525862;
  border-right: 2px solid #525862;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
  position: relative;
  display: inline-block;
  &:after {
    content: " ";
    width: 2px;
    height: 14px;
    background-color: #525862;
    transform: rotate(45deg);
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    bottom: 0;
    margin: auto;
  }
}

</style>
