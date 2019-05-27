<template>
  <div class="home">
    <h1>twosideselect </h1>

    <div class="btn-box"> 
      <button class='addItemsButton' @click='addSameItems'> add same Items</button>
      <button class='addItemsButton' @click='addRandomItems'> add random Items</button>
    </div>

    <TwoSideSelect
      :items='initTwoSideSelectItems'
      :poolItems='poolItems'
      :onChange='onChangeHandler'
    />
  </div>
</template>

<script>
import TwoSideSelect from '@lazy-bee/two-side-select'
import '@lazy-bee/two-side-select/dist/two-side-select.css'

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
  name: 'home',
  components: {TwoSideSelect: TwoSideSelect.TwoSideSelect},
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
}
</script>


<style scoped  lang="scss">
.btn-box {
  padding: 20px 0 30px 0;
}

.addItemsButton {
  border: 1px black solid;
  padding: 10px 20px;
  margin: 5px;
}
</style>
