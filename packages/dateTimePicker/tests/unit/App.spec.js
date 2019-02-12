import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should imoprt <time-picker-page component", () => {
    const format = "hh:mm A";
    const wrapper = shallowMount(App, {
      propsData: { format }
    });
    expect(wrapper.html().includes('<time-picker-page')).toBe(true)
  });
});
