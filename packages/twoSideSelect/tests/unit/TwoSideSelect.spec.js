import { shallowMount } from "@vue/test-utils";
import TwoSideSelect from "@/components/TwoSideSelect/index.vue";

describe("TwoSideSelect.vue", () => {
  it("should clean state.selectedPoolItems when updating props poolItems", done => {
    const poolItem1 = [{ label: "fooLabel1", value: "fooValue1" }];
    const poolItem2 = [{ label: "fooLabel2", value: "fooValue2" }];
    const wrapper = shallowMount(TwoSideSelect, {
      propsData: {
        items: [],
        poolItems: [...poolItem1]
      }
    });

    expect(wrapper.vm.$data.selectedPoolItems.length).toBe(0);
    wrapper.vm.selectPoolHandler({ value: "fooValue" });
    expect(wrapper.vm.$data.selectedPoolItems.length).toBe(1);
    wrapper.setProps({ poolItems: [...poolItem2] });
    expect(wrapper.vm.$data.selectedPoolItems.length).toBe(0);
    done();
  });
});
