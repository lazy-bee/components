import { shallowMount } from "@vue/test-utils";
import TimePicker from "@/components/TimePicker/index.vue";

describe("TimePicker.vue", () => {
  it("should includes AM, PM, hour lenght is 12", () => {
    const format = "hh:mm A";
    const wrapper = shallowMount(TimePicker, {
      propsData: { format }
    });
    
    expect(wrapper.vm.$data.hours.includes('12')).toBe(true)
    expect(wrapper.vm.$data.hours.length).toBe(12)
    
    expect(wrapper.vm.$data.minutes.includes('00')).toBe(true)
    expect(wrapper.vm.$data.minutes.length).toBe(60)

    expect(wrapper.vm.$data.apms.includes('AM')).toBe(true)
    expect(wrapper.vm.$data.apms.includes('PM')).toBe(true)
    expect(wrapper.vm.$data.apms.length).toBe(2)
  });

  it("should not includes AM, PM, hour lenght is 24", () => {
    const format = "HH:mm";
    const wrapper = shallowMount(TimePicker, {
      propsData: { format }
    });
    
    expect(wrapper.vm.$data.hours.includes('00')).toBe(true)
    expect(wrapper.vm.$data.hours.length).toBe(24)
    
    expect(wrapper.vm.$data.minutes.includes('00')).toBe(true)
    expect(wrapper.vm.$data.minutes.length).toBe(60)

    expect(wrapper.vm.$data.apms.includes('AM')).toBe(false)
    expect(wrapper.vm.$data.apms.includes('PM')).toBe(false)
    expect(wrapper.vm.$data.apms.length).toBe(0)
  });
});
