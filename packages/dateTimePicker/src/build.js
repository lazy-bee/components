// Import vue component
import DateTimePicker from "./components/DateTimePicker.vue";
import DateTimePickerModal from "./components/DateTimePickerModal.vue";
import Calender from "./components/DatePicker/Calender.vue";
import TimePicker from "./components/TimePicker/index.vue";
import DatePicker from "./components/DatePicker/index.vue";

const Components = {
  DateTimePicker,
  TimePicker,
  DatePicker,
  Calender,
  DateTimePickerModal
};

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Object.values(Components).forEach(Component => {
    Vue.component(Component.name, Component);
  });
}

// Create module definition for Vue.use()
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default Components;
