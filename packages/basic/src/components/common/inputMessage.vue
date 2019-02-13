<template>
  <div class="message-wrap">
    <div v-if="errorMessages" class="errorMessages">{{errorMessages}}</div>
    <div v-else class="tip">{{tip}}</div>
  </div>
</template>

<script>
export default {
  name: 'inputMessage',
  props: {
    tip: { type: String, default: '' },
    errorMessages: { type: String, default: '' }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.message-wrap {
  height: 21px;

  .errorMessages {
    color: $error;
  }

  .tip {
    color: $bluey-grey;
  }
}
</style>
