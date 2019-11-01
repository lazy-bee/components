<template>
  <div id="app">
    <div class="mainHeader">
      <h1>@lazy-copilot/leftrightcart</h1>
      <p>
        A dropdown time picker for Vue 2.x with flexible time format support
      </p>
    </div>
    <section class="tapsContainer">
      <a
        @click="tapIndex = 0"
        class="componentTab"
        :class="tapIndex === 0 ? 'active' : 'inactive'"
      >
        General</a
      >
      <a
        @click="tapIndex = 1"
        class="componentTab"
        :class="tapIndex === 1 ? 'active' : 'inactive'"
      >
        Null
      </a>
      <a
        @click="tapIndex = 2"
        class="componentTab"
        :class="tapIndex === 2 ? 'active' : 'inactive'"
      >
        RawHTML
      </a>
    </section>

    <section class="componentContainer" v-if="tapIndex === 0">
      <h1>Multi Select</h1>
      <div class="row">
        <label>Left Label</label>
        <input
          @change="onChangeLeftLabelHandler"
          type="text"
          placeholder="leftLabel"
        />
      </div>
      <div class="row">
        <label>Right Label</label>
        <input
          @change="onChangeRightLabelHandler"
          type="text"
          placeholder="rightLabel"
        />
      </div>
      <div class="row">
        <button class="addItemsButton" @click="addSameItems">
          add same Items
        </button>
        <button class="addItemsButton" @click="addRandomItems">
          add random Items
        </button>
      </div>
      <div class="content-box">
        <TwoSideSelect
          :leftLabel="label.left"
          :rightLabel="label.right"
          :items="initTwoSideSelectItems"
          :poolItems="poolItems"
          :onChange="onChangeHandler"
        />
      </div>
    </section>

    <section class="componentContainer" v-if="tapIndex === 1">
      <h1>Null Select</h1>
      <div class="row">
        <button class="addItemsButton" @click="addSameItems">
          add same Items
        </button>
        <button class="addItemsButton" @click="addRandomItems">
          add random Items
        </button>
      </div>
      <div class="content-box">
        <TwoSideSelect
          :items="[]"
          :poolItems="[]"
          :onChange="onChangeHandler"
        />
      </div>
    </section>

    <section class="componentContainer" v-if="tapIndex === 2">
      <h1>RawHtml</h1>
      <div class="row">
        <label>Html</label>
        <input v-model="htmlTitle" type="text" placeholder="htmlLabel" />
        <button class="addHtmlButton" @click="addHtmlItem(htmlTitle)">
          Add Html
        </button>
      </div>
      <div class="content-box">
        <TwoSideSelect
          :items="[]"
          :poolItems="poolItems"
          :onChange="onChangeHandler"
        />
      </div>
    </section>
  </div>
</template>

<script>
import TwoSideSelect from "./components/TwoSideSelect";

const DEFAULT_ITEMS = [
  { label: "pool1", value: "poolVal1" },
  { label: "pool2", value: "poolVal2" },
  { label: "pool3", value: "poolVal3" }
];

function getRndInteger(min = 0, max = 9999) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomStr = (pre = "") => {
  return `${pre}-${getRndInteger()}`;
};

export default {
  name: "app",
  computed: {},
  components: {
    TwoSideSelect
  },
  data: function() {
    return {
      tapIndex: 0,
      initTwoSideSelectItems: [
        { label: "label1", value: "value1" },
        { label: "label2", value: "value2" },
        { label: "label3", value: "value3" }
      ],
      htmlTitle: "<span>foo</span>",
      poolItems: this.initPoolItems(),
      label: {
        left: "left",
        right: "right"
      }
    };
  },
  methods: {
    onChangeHandler: function(value) {
      console.log(" -=-=-=- onChangeHandler value:", value);
    },
    onChangeLabelHandler: function(labelName, e) {
      return (this.label[labelName] = e.target.value);
    },
    onChangeLeftLabelHandler: function(e) {
      return this.onChangeLabelHandler("left", e);
    },
    onChangeRightLabelHandler: function(e) {
      return this.onChangeLabelHandler("right", e);
    },
    addHtmlItem: function(rawHtml) {
      console.log("addHtmlItem -=-=-= , ", rawHtml);
      this.poolItems = [
        ...this.poolItems,
        {
          isHtml: true,
          label: rawHtml,
          value: randomStr()
        }
      ];
    },
    addSameItems: function() {
      this.poolItems = [...DEFAULT_ITEMS];
    },
    addRandomItems: function() {
      return (this.poolItems = [1, 2, 3, 4].map(() => ({
        label: randomStr(),
        value: randomStr()
      })));
    },
    initPoolItems: function() {
      return [...DEFAULT_ITEMS];
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

  input {
    border: black 1px solid;
    padding: 5px 10px;
  }

  .componentContainer {
    border-top: 1px lightgray solid;
    padding: 20px 0;

    .addItemsButton {
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
      color: hsla(0, 0%, 100%, 0.5);
      display: block;
      padding: 0.8em 0.5em;
      border-radius: 5px;
      transition: color 0.3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      text-decoration: none;
      cursor: pointer;
    }

    .active {
      color: #51c28f;
    }

    a.active:after {
      content: "";
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

  .row {
    padding: 20px 0 30px 0;

    label {
      padding: 0 10px;
    }
  }

  .content-box {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
