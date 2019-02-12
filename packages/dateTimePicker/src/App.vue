<template>
  <div id="app">
  <div class="mainHeader">
    <h1>@lazy-copilot/datetimepicker</h1>
    <p>A dropdown time picker for Vue 2.x with flexible time format support</p>
  </div>
  <section class="tapsContainer">
    <a @click="tapIndex = 0" class="componentTab" :class="tapIndex===0? 'active' : 'inactive'">TimePicker</a>
    <a @click="tapIndex = 1" class="componentTab" :class="tapIndex===1? 'active' : 'inactive'">DateTimePicker</a>
  </section>

  <keep-alive>
    <component v-bind:is="currentTabComponent"></component>
  </keep-alive>

    <section class="componentContainer" v-if="tapIndex === 1">
      <h1>Calender</h1>
      <span>{{ calenderValue }}</span>
      <Calender
        :month="currentMonth"
        :year="currentYear"
        :startDate="startDate"
        :endDate="endDate"
        :singleDate="singleDate"
        @onChange="calenderValue = $event"
      />
    </section>

    <section class="componentContainer" v-if="tapIndex === 2">
      <h1>DatePicker</h1>
      <span>{{ datePickerValue }}</span>
      <DatePicker
        :singleDate="singleDate"
        @onChange="datePickerValue = $event"
      />
    </section>

    <section class="componentContainer" v-if="tapIndex === 3">
      <h1>DateTimePicker</h1>
      <span>{{ dateTimePickerValue }}</span>
      <DateTimePicker
        :singleDate="singleDate"
        
        @onChange="dateTimePickerValue = $event"
        :alignRight="alignRight"
      />
    </section>

    <section class="componentContainer" v-if="tapIndex === 4">
      <h1>DateTimePickerModal</h1>
      <span>{{ dateTimePickerModalValue }}</span>
      <form>
        <date-time-picker-modal
          @cancelHandler="cancelHandler"
          @submitHandler="dateTimePickerModalValue = $event"
          :startDate="startDate"
          :endDate="endDate"
          :singleDate="singleDate"
        />
      </form>
    </section>
  </div>
</template>

<script>
import DateTimePicker from "./components/DateTimePicker.vue";
import DateTimePickerModal from "./components/DateTimePickerModal.vue";
import TimePicker from "./components/TimePicker/index.vue";
import DatePicker from "./components/DatePicker/index.vue";
import Calender from "./components/DatePicker/Calender.vue";

import TimePickerPage from "./pages/TimePicker.vue";
import DateTimePickerPage from "./pages/DateTimePicker.vue";

export default {
  name: "app",
  computed: {
    currentTabComponent: function(){
      if(this.tapIndex === 0) return TimePickerPage
      if(this.tapIndex === 1) return DateTimePickerPage
    }
  },
  methods: {
    submitHandler: function(data) {
      console.log("data: ", data);
    },
    cancelHandler: function() {
      console.log("close");
    }
  },
  components: {
    DateTimePicker,
    DateTimePickerModal,
    TimePicker,
    DatePicker,
    Calender
  },
  data: function() {
    return {
      singleDate: false,
      alignRight: false,
      calenderValue: null,
      datePickerValue: null,
      dateTimePickerModalValue: null,
      dateTimePickerValue: null,
      timePickerValue: { hh: 10, mm: 12, A: "AM" },
      tapIndex: 0,
      startTime: {
        hh: "05",
        mm: "23",
        A: "AM"
      },
      endTime: {
        hh: "11",
        mm: "21",
        A: "PM"
      },
      currentMonth: 11,
      currentYear: 2018,
      startDate: new Date("2018-12-13T09:01"),
      endDate: new Date("2018-12-16T22:13")
    };
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
}


</style>

<style lang="scss">
@import "./style/main.scss";

</style>
