<template>
  <v-app>
    <div class="demoWrap">
      <div class="boxWrap">
        <h3>A</h3>
        <div class="box">
          <div class="stage">
            <div class="item">
              <x-button v-bind="buttonSchemeA"></x-button>
              <x-dialog v-bind="dialogSchemeA" v-model="dialogSchemeA.value">
                <div class="slot-header" slot="slot-header"></div>
                <customForm/>
              </x-dialog>
            </div>
            <a href="#" v-scroll-to="{ element: '#example-a' }">View Sample Code</a>
          </div>
        </div>
      </div>
      <div class="boxWrap">
        <h3>B</h3>
        <div class="box">
          <div class="stage">
            <div class="item">
              <p>By registering you agree to our <a class="hyberlink" @click="openDialog">Terms of Service</a></p> 
              <x-dialog v-bind="dialogSchemeB" v-model="dialogSchemeB.value">
                <div class="slot-header" slot="slot-header"></div>
                <customTerms/>
                <div slot="slot-btn"></div>
              </x-dialog>
            </div>
            <a href="#" v-scroll-to="{ element: '#example-b' }">View Sample Code</a>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import customForm from './Form.vue';
import customTerms from './Terms.vue';

export default {
  name: 'DialogExample',
  components: { customForm, customTerms },
  data() {
    return {
      buttonSchemeA: {
        content: 'Contact Us',
        borderRadius: 4,
        click: () => {
          this.dialogSchemeA.value = true;
        }
      },
      dialogSchemeA: {
        value: false,
        closeSign: true,
        cancelText: 'CANCEL',
        confirmText: 'SUBMIT'
      },
      dialogSchemeB: {
        value: false,
        closeSign: true,
        cancelText: 'Cancel',
        confirmText: 'Submit'
      }
    };
  },
  methods: {
    openDialog() {
      this.dialogSchemeB.value = true;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';
@import '../../styles/example-layout.styl';

>>>.application--wrap {
  min-height: 100% !important;
}

>>>.v-dialog {
  border-radius: 10px;

  .slot-header {
    height: 50px;
    background: $primary-01;
  }

  .close-sign {
    .v-icon {
      color: white !important;
    }
  }
}
</style>
