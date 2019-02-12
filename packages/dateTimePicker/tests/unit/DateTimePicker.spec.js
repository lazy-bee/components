import { mount } from "@vue/test-utils";
import DateTimePicker from "@/components/DateTimePicker.vue";
import { getTimeObjectFromDate } from "@/lib/time";

describe("DateTimePicker.vue: selected days", () => {
  it("Should return 2018/12/13 00:01 Date, when given GM +0 Zone", () => {
    const wrapper = mount(DateTimePicker, {
      propsData: {
        startDate: new Date("2018-12-13T00:01"),
        singleDate: true
      }
    });
    expect(wrapper.vm.$data.selectDateString).toBe("2018 Dec 13  00:01 AM");
  });

  it("Should return 2018/12/13 00:01 Date, when given GM +8 Zone", () => {
    const wrapper = mount(DateTimePicker, {
      propsData: {
        startDate: new Date("2018-12-13T00:01Z"),
        singleDate: true
      }
    });
    expect(wrapper.vm.$data.selectDateString).toBe("2018 Dec 13  08:01 AM");
  });
});

describe("DateTimePicker.vue: selected days (hh:mm:A)", () => {
  it("Should return 00:01 Date, when given GM +0 Zone", () => {
    const updateToDate = new Date("2019-02-12T00:01"); // 12:01 pm
    const SUBMIT_HANDLE_DATA = {
      startDate: updateToDate
    };
    const wrapper = mount(DateTimePicker, {
      propsData: {
        singleDate: true
      }
    });
    wrapper.vm.submitHandler(SUBMIT_HANDLE_DATA);
    expect(wrapper.vm.$data.selectDateString).toBe("2019 Feb 12  00:01 AM");
  });

  it("Should return 12:01 Date, when given GM +0 Zone", () => {
    const updateToDate = new Date("2019-02-12T12:01"); // 12:01 pm
    const SUBMIT_HANDLE_DATA = {
      startDate: updateToDate
    };
    const wrapper = mount(DateTimePicker, {
      propsData: {
        singleDate: true
      }
    });
    wrapper.vm.submitHandler(SUBMIT_HANDLE_DATA);
    expect(wrapper.vm.$data.selectDateString).toBe("2019 Feb 12  12:01 AM");
  });
});

describe("DateTimePicker.vue: selected days (HH:mm)", () => {
  it("Should return 13:01 Date, when given HH:mm", () => {
    const wrapper = mount(DateTimePicker, {
      propsData: {
        timeFormat: "HH:mm",
        startDate: new Date("2018-12-13T13:01"),
        singleDate: true
      }
    });
    expect(wrapper.vm.$data.selectDateString).toBe("2018 Dec 13  13:01");
  });
  it("Should return 00:01 Date, when given HH:mm", () => {
    const wrapper = mount(DateTimePicker, {
      propsData: {
        timeFormat: "HH:mm",
        startDate: new Date("2018-12-13T00:01"),
        singleDate: true
      }
    });
    expect(wrapper.vm.$data.selectDateString).toBe("2018 Dec 13  00:01");
  });
  it("Should return 23:01 Date, when given HH:mm", () => {
    const wrapper = mount(DateTimePicker, {
      propsData: {
        timeFormat: "HH:mm",
        startDate: new Date("2018-12-13T23:01"),
        singleDate: true
      }
    });
    expect(wrapper.vm.$data.selectDateString).toBe("2018 Dec 13  23:01");
  });
});

describe("DateTimePicker.vue: selected days (hh:mm:A)", () => {
  it("Should return 00:01 Date, when given GM +0 Zone", () => {
    const updateToDate = new Date("2019-02-12T00:01"); // 12:01 pm
    const SUBMIT_HANDLE_DATA = {
      startDate: updateToDate
    };
    const wrapper = mount(DateTimePicker, {
      propsData: {
        timeFormat: "HH:mm",
        singleDate: true
      }
    });
    wrapper.vm.submitHandler(SUBMIT_HANDLE_DATA);
    expect(wrapper.vm.$data.selectDateString).toBe("2019 Feb 12  00:01");
  });
  it("Should return 12:01 Date, when given GM +0 Zone", () => {
    const updateToDate = new Date("2019-02-12T12:01"); // 12:01 pm
    const SUBMIT_HANDLE_DATA = {
      startDate: updateToDate
    };
    const wrapper = mount(DateTimePicker, {
      propsData: {
        timeFormat: "HH:mm",
        singleDate: true
      }
    });
    wrapper.vm.submitHandler(SUBMIT_HANDLE_DATA);
    expect(wrapper.vm.$data.selectDateString).toBe("2019 Feb 12  12:01");
  });
  it("Should return 23:01 Date, when given GM +0 Zone", () => {
    const updateToDate = new Date("2019-02-12T23:01"); // 23:01 pm
    const SUBMIT_HANDLE_DATA = {
      startDate: updateToDate
    };
    const wrapper = mount(DateTimePicker, {
      propsData: {
        timeFormat: "HH:mm",
        singleDate: true
      }
    });
    wrapper.vm.submitHandler(SUBMIT_HANDLE_DATA);
    expect(wrapper.vm.$data.selectDateString).toBe("2019 Feb 12  23:01");
  });
});
