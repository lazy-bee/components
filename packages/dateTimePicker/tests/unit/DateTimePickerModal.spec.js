import { mount } from "@vue/test-utils";
import DateTimePickerModal from "@/components/DateTimePickerModal.vue";
import { getTimeObjectFromDate } from "@/lib/time";

describe("DateTimePickerModal.vue: days length", () => {
  it("Should return 2018/12/13 Date", () => {
    const wrapper = mount(DateTimePickerModal, {
      propsData: {
        startDate: new Date("2018-12-13"),
        singleDate: true,
      }
    });
    expect(wrapper.vm.innerStartDate.getFullYear()).toBe(new Date("2018-12-13").getFullYear())
    expect(wrapper.vm.innerStartDate.getMonth()).toBe(new Date("2018-12-13").getMonth())
    expect(wrapper.vm.innerStartDate.getDate()).toBe(new Date("2018-12-13").getDate())
    expect(wrapper.vm.innerStartTime.hh).toBe('08')
    expect(wrapper.vm.innerStartTime.mm).toBe('00')
    expect(wrapper.vm.innerStartTime.A).toBe('AM')
  });

  it("Should return current Date with startDage and endDate", () => {
    const wrapper = mount(DateTimePickerModal, {
      propsData: {}
    });

    const todayTimeObject = getTimeObjectFromDate(new Date())

    expect(wrapper.vm.innerStartDate.getFullYear()).toBe(new Date().getFullYear())
    expect(wrapper.vm.innerStartDate.getMonth()).toBe(new Date().getMonth())
    expect(wrapper.vm.innerStartDate.getDate()).toBe(new Date().getDate())
    expect(wrapper.vm.innerStartTime.hh).toBe(todayTimeObject.hh)
    expect(wrapper.vm.innerStartTime.mm).toBe(todayTimeObject.mm)
    expect(wrapper.vm.innerStartTime.A).toBe(todayTimeObject.A)

    expect(wrapper.vm.innerEndDate.getFullYear()).toBe(new Date().getFullYear())
    expect(wrapper.vm.innerEndDate.getMonth()).toBe(new Date().getMonth())
    expect(wrapper.vm.innerEndDate.getDate()).toBe(new Date().getDate() + 2)
    expect(wrapper.vm.innerEndTime.hh).toBe(todayTimeObject.hh)
    expect(wrapper.vm.innerEndTime.mm).toBe(todayTimeObject.mm)
    expect(wrapper.vm.innerEndTime.A).toBe(todayTimeObject.A)
  });
});
