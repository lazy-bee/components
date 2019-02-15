<template>
  <v-icon v-if="icon === true || square === true">{{ content }}</v-icon>
  <span v-else>
    <v-icon v-if="prependIcon" class="prependIcon">{{prependIcon}}</v-icon>
    {{ content }}
    <v-icon v-if="appendIcon" class="appendIcon">{{appendIcon}}</v-icon>
  </span>
</template>

<script>
export default {
  name: 'buttonContent',
  props: {
    content: { type: String, default: '' },
    prependIcon: { type: String, default: '' },
    appendIcon: { type: String, default: '' },
    icon: { type: Boolean, default: false },
    square: { type: Boolean, default: false }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.v-btn {

  .v-btn__content {
    span {
      display: inline-flex;
    }
  }

  .v-icon {
    font-size: $btn-font + 8px;
  }

  &--small {
    height: $btn-height-small;
    font-size: $btn-font-small;
    line-height: $btn-height-small;
    padding: 0 22px;
    letter-spacing: 1px;

    .v-icon {
      font-size: $btn-font-small + 6px;
      line-height: $btn-height-small;
    }
  }

  &--large {
    height: $btn-height-large;
    font-size: $btn-font-large;
    line-height: $btn-height-large;
    font-weight: 700;
    padding: 0 45px;

    .v-icon {
      font-size: $btn-font-large + 10px;
      line-height: $btn-height-large;
    }
  }

  .prependIcon {
    margin-right: 10px;
    vertical-align: middle;
  }

  .appendIcon {
    margin-left: 10px;
    vertical-align: middle;
  }

  // reset padding for the square button
  &--icon, &--icon&--small, &--icon&--large, &--floating, &--floating&--small, &--floating&--large {
    padding: 0;
  }

  // icon button
  &--icon {
    width: $btn-height;
  }

  &--icon&--small {
    width: $btn-height-small;
  }

  &--icon&--large {
    width: $btn-height-large;
  }
}

</style>
