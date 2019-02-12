<template>
  <div class="dateTimeWrapper">
    <div class="containerWrapper">
      <div class="dateContainer">
        <DatePicker
          ref="datePickerRef"
          :startDate="innerStartDate"
          :endDate="innerEndDate"
          @onChange="__onChange"
          :singleDate="singleDate"
        />
      </div>
      <div class="timeContainer">
        <div class="startTime timeRow">
          <span class="subTitle">From</span>
          <div>
            <span class="bigNumber">{{ innerStartDate.getDate() }}</span>
            {{ getShortMonth(innerStartDate.getMonth()) }}
            {{ innerStartDate.getFullYear() }}
          </div>
          <time-picker
            :format="timeFormat"
            v-bind:value="defaultStartTime"
            @change="_onChangeTimeStart"
          />
        </div>
        <div class="endTime timeRow" v-if="!singleDate">
          <span class="subTitle">To</span>
          <div>
            <span class="bigNumber">{{ innerEndDate.getDate() }}</span>
            {{ getShortMonth(innerEndDate.getMonth()) }}
            {{ innerEndDate.getFullYear() }}
          </div>
          <time-picker
            :format="timeFormat"
            v-bind:value="defaultEndTime"
            @change="_onChangeTimeEnd"
          />
        </div>
      </div>
    </div>
    <div class="buttonWrap">
      <a class="confirm" @click.stop.prevent="__onSubmit">submit</a>
      <a class="cancel" @click.stop.prevent="__onCancel">cancel</a>
    </div>
  </div>
</template>

<script>
import TimePicker from "./TimePicker/index.vue";
import DatePicker from "./DatePicker/index.vue";
import utils from "../lib/date";
import { getTimeObjectFromDate } from "../lib/time";

const DEFAULT_START_TIME = {
  hh: "00",
  mm: "00",
  A: "AM"
};

const DEFAULT_END_TIME = {
  hh: "12",
  mm: "59",
  A: "PM"
};

export default {
  name: "DateTimePickerModal",
  components: { DatePicker, TimePicker },
  methods: {
    callEvent: function(eventName, data) {
      if (this.$listeners[eventName]) {
        return this.$emit(eventName, data);
      }
      if (this[eventName]) {
        return this[eventName](data);
      }
    },
    __onChange: function(data) {
      return this.singleDate
        ? this._onChangeSingleDate(data)
        : this._onChangeMultiDate(data);
    },
    __onSubmit: function() {
      return this.singleDate
        ? this._submitSingleHandler()
        : this._submitMultiHandler();
    },
    getShortMonth: function(monthIndex) {
      return utils.monthShortConfig[monthIndex];
    },
    __onCancel: function() {
      return this.callEvent("cancelHandler");
    },
    _submitSingleHandler: function() {
      const { innerStartTime: startTime, innerEndTime: endTime } = this;

      const { innerStartDate: startDate } = this.$refs.datePickerRef;
      const startDateString = utils.format(startDate, "yy-mm-dd");
      const startTimeString = `${startTime.HH || "00"}:${startTime.mm || "00"}`;
      const startDateObject = new Date(`${startDateString}T${startTimeString}`);

      const returnData = {
        startDate: startDateObject,
        startTime
      };

      return this.callEvent("submitHandler", returnData);
    },
    _submitMultiHandler: function() {
      const { innerStartTime: startTime, innerEndTime: endTime } = this;

      const {
        innerStartDate: startDate,
        innerEndDate: endDate
      } = this.$refs.datePickerRef;

      const startDateString = utils.format(startDate, "yy-mm-dd");
      const endDateString = utils.format(endDate, "yy-mm-dd");
      const startTimeString = `${startTime.HH}:${startTime.mm}`;
      const endTimeString = `${endTime.HH}:${endTime.mm}`;
      const startDateObject = new Date(`${startDateString}T${startTimeString}`);
      const endDateObject = new Date(`${endDateString}T${endTimeString}`);

      const returnData = {
        startDate: startDateObject,
        endDate: endDateObject,
        startTime,
        endTime
      };

      return this.callEvent("submitHandler", returnData);
    },
    _onChangeMultiDate: function(data) {
      const { startDate, endDate } = data;
      this.innerStartDate = startDate;
      this.innerEndDate = endDate;
    },
    _onChangeSingleDate: function(data) {
      const { startDate } = data;
      this.innerStartDate = startDate;
    },
    _onChangeTimeStart: function(val) {
      return this._onChangeTime("innerStartTime", val);
    },
    _onChangeTimeEnd: function(val) {
      return this._onChangeTime("innerEndTime", val);
    },
    _onChangeTime: function(field, val) {
      this[field] = val.data;
    }
  },
  props: {
    submitHandler: Function,
    startDate: Date,
    endDate: Date,
    timeFormat: {
      type: String,
      default: "hh:mm:A"
    },
    singleDate: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    const today = new Date();
    const {
      startDate = today,
      timeFormat = "hh:mm:A",
      endDate = utils.getDayAfter(today, 2)
    } = this;
    const startTime = getTimeObjectFromDate(startDate, timeFormat);
    const endTime = getTimeObjectFromDate(endDate, timeFormat);

    return {
      defaultStartTime: startTime || DEFAULT_START_TIME,
      defaultEndTime: endTime || DEFAULT_END_TIME,
      innerStartDate: startDate,
      innerEndDate: endDate,
      innerStartTime: startTime,
      innerEndTime: endTime
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

.dateTimeWrapper {
  max-width: 768px;
  background: #fff;
  box-shadow: 0 20px 50px rgba(183, 185, 188, 0.35);

  .containerWrapper {
    display: flex;
    padding: 40px 30px 20px 30px;
    .dateContainer {
      padding: 0 30px;
      border-right: 1px solid $pale-grey-two;
    }
    .timeContainer {
      padding: 0 30px;
      .timeRow {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 15px 0;

        .subTitle {
          font-size: 13px;
          color: $bluey-grey;
        }

        .bigNumber {
          font-size: 34px;
          letter-spacing: 3px;
          line-height: 45px;
          color: $secondary-01;
          font-weight: 100;
        }
      }
    }
  }
  .buttonWrap {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    padding: 20px 60px 40px 0;
    border-top: 1px solid $pale-grey;

    a {
      padding: 0 30px;
      height: 44px;
      line-height: 44px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 0px;
      letter-spacing: 1px;
      &:hover {
        outline: none;
      }

      &.confirm {
        color: #fff;
        background: $primary-01;
      }
      &.cancel {
        color: $bluey-grey;
      }
    }
  }
}
@media only screen and (max-width: 700px) {
  .dateTimeWrapper {
    width: 100%;
    .containerWrapper {
      display: block;
      .dateContainer {
        margin-bottom: 40px;
        border-right: none;
        .datePicker_wrap {
          ul.calendar {
            li {
              width: 70px;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .dateTimeWrapper {
    .containerWrapper {
      .dateContainer,
      .timeContainer {
        padding: 0;
        .timeRow {
          padding: 8px 0;
        }
      }
    }
    .buttonWrap {
      padding: 20px 30px 30px 0;
    }
  }
}
</style>
