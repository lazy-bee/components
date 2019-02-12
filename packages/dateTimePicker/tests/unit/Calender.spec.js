import { shallowMount } from "@vue/test-utils";
import Calender from "@/components/DatePicker/Calender.vue";

describe("Calender.vue: days length", () => {
  it("Should return 31days in Dec", () => {
    const wrapper = shallowMount(Calender, {
      propsData: {
        month: 11, // 11 is Dec
        year: 2018,
        startDate: new Date("2018-12-13"),
        endDate: new Date("2018-12-16"),
      }
    });

    expect( wrapper.findAll('.day span').length).toBe(31)
  });

  it("Should return 30days in Nov", () => {
    const wrapper = shallowMount(Calender, {
      propsData: {
        month: 10, // 10 is Nov
        year: 2018,
        startDate: new Date("2018-12-13"),
        endDate: new Date("2018-12-16"),
      }
    });

    expect( wrapper.findAll('.day span').length).toBe(30)
  });
})

describe("Calender.vue: selecting days", () => {
  it("Should return 1startDay, 1endDay, 11betweenDay style", () => {
    const startDay = 1
    const endDay = 13
    const wrapper = shallowMount(Calender, {
      propsData: {
        month: 11, // 11 is Dec
        year: 2018,
        startDate: new Date("2018-12-13"),
        endDate: new Date("2018-12-16"),
      }
    });

    // init status
    expect( wrapper.findAll('.innerStartDate').length).toBe(1)
    expect( wrapper.findAll('.innerEndDate').length).toBe(1)

    // click start day status
    wrapper.vm.updateSelectingDay(startDay)
    expect( wrapper.findAll('.innerStartDate').length).toBe(1)
    expect( wrapper.findAll('.innerEndDate').length).toBe(0)

    // click start day status
    wrapper.vm.updateSelectingDay(endDay)
    expect( wrapper.findAll('.innerStartDate').length).toBe(1)
    expect( wrapper.findAll('.innerEndDate').length).toBe(1)
    expect( wrapper.findAll('.between').length).toBe(endDay - startDay - 1)
  });
});


describe("Calender.vue: singleDay: selecting days", () => {
  it("Should return 1startDay, 1endDay, 11betweenDay style", () => {
    const startDay = 1
    const endDay = 13
    const wrapper = shallowMount(Calender, {
      propsData: {
        month: 11, // 11 is Dec
        year: 2018,
        startDate: new Date("2018-12-13"),
        endDate: new Date("2018-12-16"),
        singleDay: true
      }
    });

    // init status
    expect( wrapper.findAll('.innerStartDate').length).toBe(1)
    expect( wrapper.findAll('.innerEndDate').length).toBe(1)

    // click start day status
    wrapper.vm.updateSelectingSingleDay(startDay)
    expect( wrapper.findAll('.innerStartDate').length).toBe(1)
    expect( wrapper.findAll('.innerEndDate').length).toBe(0)

    // click start day status
    wrapper.vm.updateSelectingSingleDay(endDay)
    expect( wrapper.findAll('.innerStartDate').length).toBe(1)
    expect( wrapper.findAll('.innerEndDate').length).toBe(0)
    expect( wrapper.findAll('.between').length).toBe(0)
  });
});
