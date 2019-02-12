<template>
  <span class="time-picker">
    <input
      class="display-time"
      :id="id"
      v-model="displayTime"
      @click.stop="toggleDropdown"
      type="text"
      readonly
    />
    <span
      class="clear-btn"
      v-if="!hideClearButton"
      v-show="!showDropdown && showClearBtn"
      @click.stop="clearTime"
      >&times;</span
    >
    <div
      class="time-picker-overlay"
      v-if="showDropdown"
      @click.stop="toggleDropdown"
    ></div>
    <div class="dropdown" v-show="showDropdown">
      <div class="select-list">
        <ul class="hours">
          <li class="hint" v-text="hourType"></li>
          <li
            v-for="(hr, key) in hours"
            v-text="hr"
            :class="{ active: hour === hr }"
            @click.stop="selectHandler('hour', hr)"
            :key="key + '-label'"
          ></li>
        </ul>
        <ul class="minutes">
          <li class="hint" v-text="minuteType"></li>
          <li
            v-for="(m, key) in minutes"
            v-text="m"
            :class="{ active: minute === m }"
            @click.stop="selectHandler('minute', m)"
          ></li>
        </ul>
        <ul class="seconds" v-if="secondType">
          <li class="hint" v-text="secondType"></li>
          <li
            v-for="(s, key) in seconds"
            v-text="s"
            :class="{ active: second === s }"
            @click.stop="selectHandler('second', s)"
          ></li>
        </ul>
        <ul class="apms" v-if="apmType">
          <li class="hint" v-text="apmType"></li>
          <li
            v-for="(a, key) in apms"
            v-text="a"
            :class="{ active: apm === a }"
            @click.stop="selectHandler('apm', a)"
          ></li>
        </ul>
      </div>
    </div>
  </span>
</template>

<script>
import {
  checkAcceptingType,
  formatValue,
  initUnitWithInterval,
  initApm,
  initHours,
  formatConfig,
  MINUTE,
  SECOND
} from "../../lib/time";

export default {
  name: "VueTimepicker",
  props: {
    value: { type: Object },
    hideClearButton: { type: Boolean },
    format: { type: String },
    minuteInterval: { type: Number },
    secondInterval: { type: Number },
    id: { type: String }
  },
  data() {
    return {
      hours: [],
      minutes: [],
      seconds: [],
      apms: [],
      showDropdown: false,
      muteWatch: false,
      hourType: "HH",
      minuteType: "mm",
      secondType: "",
      apmType: "",
      hour: "",
      minute: "",
      second: "",
      apm: "",
      fullValues: undefined
    };
  },

  computed: {
    displayTime() {
      let formatString = String(this.format || "HH:mm");
      if (this.hour) {
        formatString = formatString.replace(
          new RegExp(this.hourType, "g"),
          this.hour
        );
      }
      if (this.minute) {
        formatString = formatString.replace(
          new RegExp(this.minuteType, "g"),
          this.minute
        );
      }
      if (this.second && this.secondType) {
        formatString = formatString.replace(
          new RegExp(this.secondType, "g"),
          this.second
        );
      }
      if (this.apm && this.apmType) {
        formatString = formatString.replace(
          new RegExp(this.apmType, "g"),
          this.apm
        );
      }
      return formatString;
    },
    showClearBtn() {
      return this.hour || this.minute ? true : false;
    }
  },

  watch: {
    format: "initConfig",
    // minuteInterval (newInteval) {
    //   this.renderList(MINUTE, newInteval)
    // },
    // secondInterval (newInteval) {
    //   this.renderList(SECOND, newInteval)
    // },
    value: "readValues",
    displayTime: "fillValues"
  },

  methods: {
    initConfig(newFormat) {
      const { minuteInterval, secondInterval } = this;

      newFormat = newFormat || this.format;
      if (!newFormat || !newFormat.length) {
        newFormat = "HH:mm";
      }

      this.hourType = checkAcceptingType(
        formatConfig.HOUR_TYPES,
        newFormat,
        "HH"
      );
      this.minuteType = checkAcceptingType(
        formatConfig.MINUTE_TOKENS,
        newFormat,
        "mm"
      );
      this.secondType = checkAcceptingType(
        formatConfig.SECOND_TOKENS,
        newFormat
      );
      this.apmType = checkAcceptingType(formatConfig.APM_TOKENS, newFormat);

      // start -=-=-=-= inint -=-=-=-=
      this.hours = initHours(this.hourType);

      this.minutes = [...initUnitWithInterval(this.minuteType, minuteInterval)];

      if (this.secondType) {
        this.seconds = [
          ...initUnitWithInterval(this.secondType, secondInterval)
        ];
      }

      if (this.apmType) {
        this.apms = initApm(this.apmType);
      }

      // end -=-=-=-= inint -=-=-=-=

      const self = this;
      this.$nextTick(() => {
        self.readValues();
      });
    },
    readValues() {
      if (!this.value || this.muteWatch) {
        return;
      }

      const timeValue = JSON.parse(JSON.stringify(this.value || {}));

      const values = Object.keys(timeValue);
      if (values.length === 0) {
        return;
      }

      if (values.indexOf(this.hourType) > -1) {
        this.hour = timeValue[this.hourType];
      }

      if (values.indexOf(this.minuteType) > -1) {
        this.minute = timeValue[this.minuteType];
      }

      if (values.indexOf(this.secondType) > -1) {
        this.second = timeValue[this.secondType];
      } else {
        this.second = 0;
      }

      if (values.indexOf(this.apmType) > -1) {
        this.apm = timeValue[this.apmType];
      }

      this.fillValues();
    },

    fillValues() {
      let fullValues = {};

      const { hour: baseHour, hourType: baseHourType, apm } = this;

      const hourValue = baseHour || baseHour === 0 ? Number(baseHour) : "";
      const baseOnTwelveHours = baseHourType === "h" || baseHourType === "hh";
      const apmValue =
        baseOnTwelveHours && apm ? `${apm}`.toLowerCase() : false;

      formatConfig.HOUR_TYPES.forEach(token => {
        if (token === baseHourType) {
          fullValues[token] = baseHour;
          return;
        }

        let value;
        let apm;
        switch (token) {
          case "H":
          case "HH":
            if (!String(hourValue).length) {
              fullValues[token] = "";
              return;
            } else if (baseOnTwelveHours) {
              if (apmValue === "pm") {
                value = hourValue < 12 ? hourValue + 12 : hourValue;
              } else {
                value = hourValue % 12;
              }
            } else {
              value = hourValue % 24;
            }
            fullValues[token] =
              token === "HH" && value < 10 ? `0${value}` : String(value);
            break;
          case "k":
          case "kk":
            if (!String(hourValue).length) {
              fullValues[token] = "";
              return;
            } else if (baseOnTwelveHours) {
              if (apmValue === "pm") {
                value = hourValue < 12 ? hourValue + 12 : hourValue;
              } else {
                value = hourValue === 12 ? 24 : hourValue;
              }
            } else {
              value = hourValue === 0 ? 24 : hourValue;
            }
            fullValues[token] =
              token === "kk" && value < 10 ? `0${value}` : String(value);
            break;
          case "h":
          case "hh":
            if (apmValue) {
              value = hourValue;
              apm = apmValue || "am";
            } else {
              if (!String(hourValue).length) {
                fullValues[token] = "";
                fullValues.a = "";
                fullValues.A = "";
                return;
              } else if (hourValue > 11) {
                apm = "pm";
                value = hourValue === 12 ? 12 : hourValue % 12;
              } else {
                if (baseOnTwelveHours) {
                  apm = "";
                } else {
                  apm = "am";
                }
                value = hourValue % 12 === 0 ? 12 : hourValue;
              }
            }

            fullValues[token] =
              token === "hh" && value < 10 ? `0${value}` : String(value);
            fullValues.a = apm;
            fullValues.A = apm.toUpperCase();
            break;
        }
      });

      if (this.minute || this.minute === 0) {
        const minuteValue = Number(this.minute);
        fullValues.m = String(minuteValue);
        fullValues.mm =
          minuteValue < 10 ? `0${minuteValue}` : String(minuteValue);
      } else {
        fullValues.m = "";
        fullValues.mm = "";
      }

      if (this.second || this.second === 0) {
        const secondValue = Number(this.second);
        fullValues.s = String(secondValue);
        fullValues.ss =
          secondValue < 10 ? `0${secondValue}` : String(secondValue);
      } else {
        fullValues.s = "";
        fullValues.ss = "";
      }

      this.fullValues = fullValues;
      this.updateTimeValue(fullValues);
      this.$emit("change", { data: fullValues });
    },

    updateTimeValue(fullValues) {
      this.muteWatch = true;

      const self = this;

      const baseTimeValue = { ...this.value };
      let timeValue = {};

      Object.keys(baseTimeValue).forEach(key => {
        timeValue[key] = fullValues[key];
      });

      this.$emit("input", timeValue);

      this.$nextTick(() => {
        self.muteWatch = false;
      });
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    selectHandler(type, value) {
      if (type === "hour") {
        this.hour = value;
      } else if (type === MINUTE) {
        this.minute = value;
      } else if (type === SECOND) {
        this.second = value;
      } else if (type === "apm") {
        this.apm = value;
      }
    },

    clearTime() {
      this.hour = "";
      this.minute = "";
      this.second = "";
      this.apm = "";
    }
  },

  mounted() {
    this.initConfig();
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";

.time-picker {
  width: 100%;
  height: 50px;
  display: inline-block;
  font-size: 16px;
  position: relative;

  input.display-time {
    width: 100%;
    min-width: 200px;
    border: 1px solid $silver-two;
    background: #fff;
    border-radius: 3px;
    height: 100%;
    padding: 0 10px;
    letter-spacing: 4px;
    transition-duration: 0.5s;

    &:hover {
      border: 1px solid $secondary-01;
    }
    &:focus {
      outline: none;
      border: 1px solid $secondary-01;
    }
  }
  .clear-btn {
    position: absolute;
    z-index: 3;
    top: 8px;
    right: 20px;
    height: 100%;
    font-size: 24px;
    color: $silver;

    &:hover {
      color: $dark;
      cursor: pointer;
    }
  }
  .time-picker-overlay {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .dropdown {
    position: absolute;
    z-index: 5;
    background: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 180px;

    .select-list {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      justify-content: space-between;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        &.minutes,
        &.seconds,
        &.apms {
          border-left: 1px solid #fff;
        }
        li {
          text-align: center;
          padding: 6px 0;
          color: $dark;
          &.active,
          &.active:hover {
            background: $secondary-01;
            color: #fff;
          }
        }
        li:not(.hint):hover {
          background: rgba(0, 0, 0, 0.08);
          color: $dark;
          cursor: pointer;
        }
      }
    }
    .hint {
      color: $bluey-grey;
      font-size: 16px;
    }
  }
}
</style>
