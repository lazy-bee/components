<template>
<v-card
  v-if="authority !== 'invisible'"
  width="100%"
  height="100%"
>
  <v-img
    v-if="mediaUrl"
    :src="mediaUrl"
    :height="mediaHeight"
    :class="mediaClass"
  >
  </v-img>

  <v-card-title
    v-if="title"
    class="card-title elevation-2"
    :class="titleClass"
  >
    {{ title }}
  </v-card-title>

  <v-card-text :class="contentClass">
    <slot></slot>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'x-card',
  props: {
    title: { type: String, default: '' },
    titleClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    mediaClass: { type: String, default: '' },
    mediaUrl: { type: String, default: '' },
    mediaHeight: { type: String, default: '' },
    authority: { type: String, default: 'available' }
  }
};
</script>

<style lang="stylus" scoped>
.card-title {
  font-weight: bold;
  background-color: $gary;
  text-transform none !important;
}
</style>
