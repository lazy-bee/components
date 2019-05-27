import { shallowMount } from "@vue/test-utils";
import SelectionRow from "@/components/SelectionRow.vue";

describe("SelectionRow.vue", () => {
  it("renders props.label, buttonChar; with function, onSelect", (done) => {
    const msg = "new message";
    const wrapper = shallowMount(SelectionRow, {
      propsData: {
        label: 'foo',
        buttonChar: '@',
        value: 'fooValue',
        onSelect: function(val){
          expect(val.value).toBe('fooValue')
          expect(val.label).toBe('foo')
          done()
        }
      }
    });

    expect(wrapper.html().includes('<input type=\"checkbox\" name=\"foo\">')).toBe(true)
    expect(wrapper.html().includes('<span> @ </span>')).toBe(true)

    const buttonEle = wrapper.find('a.item-checkbox')
    buttonEle.trigger('click')
  });

  it("renders props.label, buttonChar; with function, onClickButtonHandler", (done) => {
    const msg = "new message";
    const wrapper = shallowMount(SelectionRow, {
      propsData: {
        label: 'foo',
        buttonChar: '@',
        value: 'fooValue',
        onClickButtonHandler: function(val){
          expect(val.value).toBe('fooValue')
          expect(val.label).toBe('foo')
          done()
        }
      }
    });

    expect(wrapper.html().includes('<input type=\"checkbox\" name=\"foo\">')).toBe(true)
    expect(wrapper.html().includes('<span> @ </span>')).toBe(true)
    const buttonEle = wrapper.find('a.sub-btn')
    buttonEle.trigger('click')
  });
});
