<template>
<v-pagination
  :length="length"
  :circle="circle"
  v-model="page"
  @input="input"
></v-pagination>
</template>

<script>
export default {
  name: 'x-pagination',
  props: {
    value: { type: Number, default: 1 },
    length: { type: Number, default: 6 },
    circle: { type: Boolean, default: false },
    click: { type: Function, default: () => {} }
  },
  data() {
    return {
      page: this.value
    };
  },
  methods: {
    input() {
      this.click(this.page);
    }
  }
};
</script>
