<template>
  <div class="inputtag-wrapper">
    <span v-for="(tag, index) in tags" :key="index" class="inputtag-added">
      <span class="inputtag-text">{{ tag }}</span>
      <span class="inputtag-cancel">
        <CancelIcon class="icon remove" @click="removeTag(index)" />
      </span>
    </span>
    <input
      v-if="!readOnly"
      class="innputtag-edit"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="onInput"
      @blur="onBlur"
      @keydown.delete.stop="removeLastTag"
      @keydown="addNewTagByKeydown"
    />
  </div>
</template>

<script>
import CancelIcon from "../assets/cancel-icon.svg";

export default {
  name: "VueInputTag",
  components: {
    CancelIcon
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
    delimiters: {
      type: Array,
      default: () => [
        13, // Return
        188, // Comma ','
        9 // Tab]
      ]
    },
    placeholder: {
      type: String,
      default: () => "Tags..."
    },
    readOnly: {
      type: Boolean,
      default: () => false
    },
    isDuplicateAllowed: {
      type: Boolean,
      default: () => false
    },

    // should return Promise<{error: String}> or {error: String} if you decide not to add this tag.
    beforeAdding: {
      type: Function,
      default: () => ({})
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    onInput() {
      this.$emit("onInput", this.inputValue);
    },
    onBlur() {
      this.addNewTag(this.inputValue);
    },
    removeLastTag() {
      if (this.inputValue) return;
      this.removeTag(this.tags.length - 1);
    },
    removeTag(index) {
      const newTags = this.tags
        .slice(0, index)
        .concat(this.tags.slice(index + 1));
      this.emitChangeEvent(newTags);
    },
    addNewTagByKeydown(event) {
      const tag = this.inputValue;
      const isKeycodeMatchDelimiter =
        this.delimiters.indexOf(event.keyCode) !== -1;
      if (!isKeycodeMatchDelimiter) return;

      this.addNewTag(tag);
    },
    async addNewTag(tag) {
      if (
        tag === "" ||
        (!this.isDuplicateAllowed && this.tags.indexOf(tag) !== -1)
      )
        return;

      event.preventDefault();
      const newTags = [...this.tags, tag];

      const { error } = await this.beforeAdding({ newTag: tag, newTags });
      if (error) return;

      this.emitChangeEvent(newTags);
      this.inputValue = "";
    },
    emitChangeEvent(newTags) {
      if (this.readOnly) return;
      this.$emit("onChange", newTags);
    }
  }
};
</script>

<style lang="scss" scoped>
.inputtag-wrapper {
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d5dbde;
  min-height: 46px;
  width: 100%;
  padding-right: 16px;
  padding-bottom: 7px;
  cursor: text;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 4px;

  .inputtag-added {
    display: flex;
    background-color: #eff1f3;
    height: 32px;
    line-height: 32px;
    border-radius: 32px;
    margin: 7px 0 0 12px;
    padding: 0 6px 0 0;
  }
  .inputtag-text {
    font-size: 0.8rem;
    padding: 0 8px 0 14px;
  }
  .inputtag-cancel {
    display: flex;
    align-items: center;
    .remove {
      cursor: pointer;
    }
  }
  .innputtag-edit {
    background: transparent;
    border: 0;
    color: #2c3542;
    font-size: 0.9rem;
    outline: none;
    flex-grow: 1;
    max-height: 46px;
    padding: 16px;
  }
}
</style>
