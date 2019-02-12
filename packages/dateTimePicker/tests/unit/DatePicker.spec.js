import { shallowMount } from "@vue/test-utils";
import DatePicker from "@/components/DatePicker/index.vue";

describe("DatePicker.vue: days length", () => {
  it("Should render Calender.vue, and init month 2018", () => {
    const year = 2018
    const wrapper = shallowMount(DatePicker, {
      propsData: {
        month: 11, // 11 is Dec
        year,
        startDate: new Date("2018-12-13"),
        endDate: new Date("2018-12-16"),
      }
    });

    expect(wrapper.vm.$data.currentYear).toBe(2018)
    expect(wrapper.html().includes('<calender-stub')).toBe(true)
  });

  it("Should be 2019 year, when click add month on 2018Dec", () => {
    const year = 2018
    const wrapper = shallowMount(DatePicker, {
      propsData: {
        month: 11, // 11 is Dec
        year,
        startDate: new Date("2018-12-13"),
        endDate: new Date("2018-12-16"),
      }
    });

    expect(wrapper.vm.$data.currentYear).toBe(2018)
    wrapper.vm.addMonth()
    expect(wrapper.vm.$data.currentYear).toBe(2019)
  });
});
