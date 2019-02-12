<template>
  <div class="dateTimePickerWrapper" ref="wrapper">
    <a
      class="calendarTrigger"
      @click="openHandler"
      :class="isOpen ? 'active' : ''"
    >
      <icon-calendar class="iconCalendar" />
      <input
        type="text"
        class="calendarInput"
        :value="selectDateString"
        readonly="readonly"
      />
    </a>

    <date-time-picker-modal
      v-if="isOpen"
      :class="{ fadeInDown: isOpen }"
      :singleDate="singleDate"
      :startDate="startDate"
      :endDate="endDate"
      :timeFormat="timeFormat"
      @submitHandler="submitHandler"
      @cancelHandler="isOpen = false"
      :style="{
        marginLeft: `-${shiftMarginLeft}px`,
        marginTop: `-${shiftMarginHeight}px`
      }"
    />
  </div>
</template>

<script>
import DateTimePickerModal from "./DateTimePickerModal.vue";
import iconCalendar from "./Icons/Calendar.vue";
import utils from "../lib/date";
import { getTimeObjectFromDate } from "../lib/time";

const BOX_LENGTH = 750; //px
const BOX_HEIGHT = 510; //px

const _getDateString = (date, format = "hh:mm:A") => {
  if (!date) return "";

  const startYear = date.getFullYear();
  const startMonth = utils.monthShortConfig[date.getMonth()];
  const starDate = date.getDate();

  const timeObject = getTimeObjectFromDate(date, format);
  const hh = timeObject.hh;
  const HH = timeObject.HH;
  const mm = timeObject.mm;
  const a = timeObject.A;

  if (HH) return `${startYear} ${startMonth} ${starDate}  ${HH}:${mm}`;

  return `${startYear} ${startMonth} ${starDate}  ${hh}:${mm} ${a}`;
};

export default {
  name: "DateTimePicker",
  components: { DateTimePickerModal, iconCalendar },
  props: {
    startDate: Date,
    endDate: Date,
    timeFormat: {
      type: String,
      default: "hh:mm:A"
    },
    singleDate: {
      type: Boolean,
      default: false
    },
    onChange: Function
  },
  methods: {
    calculateShift: function() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const wrapper = this.$refs.wrapper;

      const { x, y } = wrapper.getBoundingClientRect();

      const dx = width - x;

      // calculate shift x
      if (dx < BOX_LENGTH && width > 700) {
        // 700 is RWD break point
        this.shiftMarginLeft = BOX_LENGTH - dx;
      }

      // calculate shift y, has enough space
      if (y > height / 2 && height > 2 * BOX_HEIGHT && width > 700) {
        // 700 is RWD break point
        this.shiftMarginHeight = BOX_HEIGHT;
      }

      // calculate shift y, has no enough space
      if (height < 2 * BOX_HEIGHT && width > 700) {
        // 700 is RWD break point
        const dy = height - y;
        this.shiftMarginHeight = BOX_HEIGHT - dy;
      }
    },
    openHandler: function() {
      this.calculateShift();
      return (this.isOpen = !this.isOpen);
    },
    getDateString: function(data) {
      const { singleDate, timeFormat } = this;
      const { startDate, endDate } = data;
      return singleDate
        ? _getDateString(startDate, timeFormat)
        : `${_getDateString(startDate, timeFormat)} - ${_getDateString(
            endDate,
            timeFormat
          )}`;
    },
    callOnChange: function(returnData) {
      if (this.$listeners.onChange) {
        return this.$emit("onChange", { ...returnData });
      }

      if (this.onChange) {
        return this.onChange({ ...returnData });
      }
    },
    submitHandler: function(data) {
      this.isOpen = false;
      this.selectDateString = this.getDateString(data);
      return this.callOnChange(data);
    }
  },
  data() {
    const { startDate, endDate } = this;
    return {
      isOpen: false,
      shiftMarginLeft: 0,
      shiftMarginHeight: 0,
      selectDateString: !startDate
        ? ""
        : this.getDateString({
            startDate,
            endDate
          })
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";

/* animation */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInDown {
  animation: fadeInDown 0.6s ease both;
}

/* compomnent style */
.dateTimePickerWrapper {
  position: relative;

  //modal
  .dateTimeWrapper {
    opacity: 0;
    left: 0;
    position: absolute;
    z-index: 198;
  }
  //trigger
  .calendarTrigger {
    position: relative;
    z-index: 197;
    overflow: hidden;
    display: block;
    width: 100%;
    min-width: 300px;
    height: 50px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid $silver-two;
    transition-duration: 1s;

    &:hover {
      border: 1px solid $secondary-01;
      .iconCalendar {
        color: $secondary-01;
      }
    }
    &.active {
      border-color: $secondary-01;
      .iconCalendar {
        color: $secondary-01;
      }
    }

    .calendarInput {
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: $secondary-01;
      font-size: 16px;
      padding: 20px 20px 20px 50px;
      outline: none;
      z-index: 1;
      cursor: pointer;
    }
    .iconCalendar {
      position: absolute;
      z-index: 2;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: $silver;
    }
  }
}
</style>
