<template>
  <v-app>
    <div class="contentWrapper">
      <x-button v-bind="buttonSchemeA"></x-button>
      <x-dialog v-bind="dialogSchemeA" v-model="dialogSchemeA.value">
        <FormGroup/>
      </x-dialog>
    </div>
  </v-app>
</template>

<script>
import FormGroup from '../../demo/stories/ExampleDialog/Form.vue';

export default {
  name: 'xform-group-page',
  components: {
    FormGroup
  },
  data: function() {
    return {
      buttonSchemeA: {
        content: 'Create Form',
        borderRadius: 4,
        click: () => {
          this.dialogSchemeA.value = true;
        }
      },
      dialogSchemeA: {
        value: '',
        hideOverlay: false
      }
    };
  }
};
</script>

<style>
.contentWrapper {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
</style>
