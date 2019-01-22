<template>
  <x-layout type="admin"
    :drawerWidth=260
    :hideDrawer=true
    :clipped=false
    >
    <div slot="toolbar">
      <x-button v-bind="burgerMenu"/>
    </div>
    <div slot="content">
      <h1>Welcome to storybooooooooooook !</h1>
      <x-bar v-bind="barScheme"></x-bar>
    </div>
  </x-layout>
</template>

<script>
export default {
  data() {
    return {
      barScheme: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        data: [120, 200, 150, 80, 70, 110, 130]
      },
      burgerMenu: {
        content: 'menu',
        flat: true,
        icon: true,
        class: 'menubtn',
        click: this.toggleDrawer
      }
    };
  },
  methods: {
    toggleDrawer() {
      this.$bus.emit('lazybee-toggle-drawer');
    }
  }
};
</script>
