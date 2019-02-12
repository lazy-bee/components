<template>
  <div class="timepickerWrapper">
    <section class="demoSection">
      <DateTimePicker
        :singleDate="singleDate"
        timeFormat="HH:mm"
        @onChange="dateTimePickerValue = $event"
      />
    </section>

    <section class="resultSection">
      <h2>Result</h2>
      <div class="exampleWrapper">
        <pre v-highlightjs="resultString"><code class="javascript"></code></pre>
      </div>
    </section>

    <section class="sampleSection">
      <h2>Sample</h2>
      <div class="exampleWrapper">
        <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
      </div>
    </section>
  </div>
</template>

<script>
import DateTimePicker from "../components/DateTimePicker";

export default {
  name: "time-picker-page",
  methods: {
    submitHandler: function(data) {
      console.log("data: ", data);
    },
    cancelHandler: function() {
      console.log("close");
    }
  },
  components: {
    DateTimePicker
  },
  computed: {
    resultString: function() {
      return JSON.stringify(this.dateTimePickerValue, null, 4);
    }
  },
  data: function() {
    return {
      singleDate: true,
      dateTimePickerValue: "",
      sourcecode: `
<TimePicker v-model="timePickerValue" format="hh:mm:A" />

data: function(){
  return {timePickerValue: ""}
}
        `
    };
  }
};
</script>

<style lang="scss" scoped>
.timepickerWrapper {
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 300px;

  .demoSection {
    width: 200px;
    margin: auto;
  }

  .resultSection {
    margin-top: 20px;
    text-align: left;
  }
  .sampleSection {
    margin-top: 20px;
    text-align: left;

    .exampleWrapper {
      padding: 20px;
      background: #eeeeee;
    }
  }

  h2 {
    line-height: 2.5;
  }
}
</style>
