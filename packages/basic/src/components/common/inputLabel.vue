<template>
  <div class="label-wrap">
    <div class="label" v-if="label">
      {{label}}
      <span v-if="required" class="star">*</span>
    </div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
export default {
  name: 'inputLabel',
  props: {
    label: { type: String, default: '' },
    required: { type: Boolean, default: false },
    description: { type: String, default: '' }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables.styl';

.label-wrap {
  .label {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: $slate-grey;

    .star {
      color: $primary-01;
    }
  }

  .description {
    color: $bluey-grey;
  }
}
</style>
