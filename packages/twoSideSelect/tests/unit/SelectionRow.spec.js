import { shallowMount } from "@vue/test-utils";
import SelectionRow from "@/components/SelectionRow.vue";

describe("SelectionRow.vue", () => {
  it("renders props.label, buttonChar; with function, onSelect", (done) => {
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

describe("SelectionRow.vue rawHtml", () => {
  it("should render rawHtml when given isHtml=true", (done) => {
    const rawHtml = '<span>foo</span>'
    const wrapper = shallowMount(SelectionRow, {
      propsData: {
        label: rawHtml,
        isHtml: true,
        buttonChar: '@',
        value: 'fooValue',
        onSelect: function(val){
          expect(val.value).toBe('fooValue')
          expect(val.label).toBe(rawHtml)
          done()
        }
      }
    });

    expect(wrapper.html().includes(rawHtml)).toBe(true)
    expect(wrapper.html().includes('<span> @ </span>')).toBe(true)
    const buttonEle = wrapper.find('a.item-checkbox')
    buttonEle.trigger('click')
  });

  it("should render rawHtml when given isHtml=true, and label=String", (done) => {
    const rawHtml = 'foo'
    const wrapper = shallowMount(SelectionRow, {
      propsData: {
        label: rawHtml,
        isHtml: true,
        buttonChar: '@',
        value: 'fooValue',
        onSelect: function(val){
          expect(val.value).toBe('fooValue')
          expect(val.label).toBe(rawHtml)
          done()
        }
      }
    });

    expect(wrapper.html().includes('<input type=\"checkbox\" name=\"foo\">')).toBe(true)
    expect(wrapper.html().includes(rawHtml)).toBe(true)
    expect(wrapper.html().includes('<span> @ </span>')).toBe(true)
    const buttonEle = wrapper.find('a.item-checkbox')
    buttonEle.trigger('click')
  });
})