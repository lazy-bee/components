<template>
  <div>
    <div class="datePicker_wrap">
      <div class="calendar-header">
        <span class="arrow icon-left" @click="minusMonth"> <arrow /> </span>
        <h3>
          <span class="currentMonth">{{ currentMonthString }}</span>
          <span class="currentYear">{{ currentYear }}</span>
        </h3>
        <span class="arrow icon-right" @click="addMonth"> <arrow /> </span>
      </div>

      <calender
        :month="currentMonth"
        :year="currentYear"
        :startDate="innerStartDate"
        :endDate="innerEndDate"
        :singleDate="singleDate"
        @onChange="_onChange"
      />
    </div>
  </div>
</template>

<script>
import Arrow from "../Icons/Arrow.vue";
import utils from "../../lib/date";
import Calender from "./Calender.vue";

export default {
  name: "DatePicker",
  components: { Arrow, Calender },
  props: {
    startDate: Date,
    endDate: Date,
    singleDate: {
      type: Boolean,
      default: false
    },
    onChange: Function
  },
  computed: {
    currentMonthString: function() {
      return utils.monthConfig[this.currentMonth];
    }
  },
  watch: {
    currentMonth: function() {
      return this.callOnChange();
    }
  },
  methods: {
    callOnChange: function() {
      const {
        currentMonth: month,
        currentYear: year,
        innerStartDate: startDate,
        innerEndDate: endDate,
        selectedDay
      } = this;

      const returnData = { month, year, startDate, endDate, selectedDay };

      if (this.$listeners.onChange) {
        this.$emit("onChange", returnData);
      }
      if (this.onChange) {
        this.onChange(returnData);
      }
    },
    addMonth: function() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
        return;
      }

      return (this.currentMonth += 1);
    },
    minusMonth: function() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
        return;
      }

      return (this.currentMonth -= 1);
    },
    _onChange: function(data) {
      const { startDate, endDate, selectedDay } = data;
      this.innerStartDate = startDate;

      this.innerEndDate = endDate;
      this.selectedDay = selectedDay;

      return this.callOnChange();
    }
  },
  data() {
    const { startDate, endDate } = this;
    const _startDate = startDate ? startDate : new Date();
    const defaultCurrentMonth = _startDate.getMonth();
    const defaultCurrentYear = _startDate.getFullYear();
    return {
      innerStartDate: _startDate,
      innerEndDate: endDate || utils.getDayAfter(_startDate, 2),
      selectedDay: null,
      currentYear: defaultCurrentYear,
      currentMonth: defaultCurrentMonth
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";

.datePicker_wrap {
  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    .icon-right {
      transform: rotate(180deg);
    }

    span.arrow {
      width: 66px;
      height: 42px;
      background: $pale-grey-two;
      color: $bluey-grey;
      transition-duration: 0.3s;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        background: $secondary-01;
        color: #fff;
      }
    }
    .icon-left {
      margin-left: 5px;
    }
    .icon-right {
      margin-right: 5px;
    }
    h3 {
      font-size: 18px;
      color: $dark;
    }
    .currentYear {
      font-weight: 400;
      margin-left: 10px;
    }
  }
}
</style>
