<template>
  <div class="timepickerWrapper">
    <section class="demoSection">
      <h2>General Use</h2>
      <Input-Tag :tags="tags" @onInput="onInputChange" @onChange="onChange" />
    </section>

    <section class="demoSection">
      <h2>Use beforeAdding</h2>
      <Input-Tag
        :tags="beforeaddingTags"
        @onChange="onBeforeaddingTagsChange"
        :beforeAdding="beforeAddingHook"
      />
    </section>

    <section class="resultSection">
      <h2>Result</h2>
      <div class="exampleWrapper">
        <pre
          v-highlightjs="`[${tags.map(t => `'${t}'`)}]`"
        ><code class="javascript"></code></pre>
        <pre
          v-highlightjs="`[${beforeaddingTags.map(t => `'${t}'`)}]`"
        ><code class="javascript"></code></pre>
      </div>
    </section>

    <Sample-Code />
  </div>
</template>

<script>
import InputTag from "../components/InputTag.vue";
import SampleCode from "./SampleCode.vue";

export default {
  name: "input-tag-example",
  methods: {
    submitHandler: function(data) {
      console.log("data: ", data);
    },
    cancelHandler: function() {
      console.log("close");
    },
    onInputChange(value) {
      console.log("Input Value: ", value);
    },
    onChange(newTags) {
      this.tags = newTags;
      console.log("this.tags", this.tags);
    },

    onBeforeaddingTagsChange(newTags) {
      this.beforeaddingTags = newTags;
      console.log("this.tags", this.tags);
    },
    beforeAddingHook({ newTag, newTags }) {
      console.log("before adding here! ", newTag, newTags);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (newTag.length < 3) {
            reject({ error: new Error("Sorry. Bad tag") });
          }
          resolve({ ok: "" });
        }, 1000);
      });
    }
  },
  components: {
    InputTag,
    SampleCode
  },
  data: function() {
    return {
      tags: ["123", "213"],
      beforeaddingTags: []
    };
  }
};
</script>

<style lang="scss" scoped>
.timepickerWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  .demoSection {
    width: 400px;
    margin: auto;
  }

  .resultSection {
    margin-top: 20px;
    text-align: left;
  }

  h2 {
    line-height: 2.5;
  }
}
</style>
