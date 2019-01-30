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
              <x-button v-bind="buttonSchemeB"></x-button>
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
      buttonSchemeB: {
        content: 'Terms of Service',
        borderRadius: 4,
        click: () => {
          this.dialogSchemeB.value = true;
        }
      },
      dialogSchemeB: {
        value: false,
        closeSign: true,
        cancelText: 'Cancel',
        confirmText: 'Submit'
      }
    };
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';

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

.demoWrap {
  font-family: 'Nunito Sans', sans-serif;
  text-align: left;
  background: #F9FAFB;
  padding: 14px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .boxWrap {
    background: #fff;
    width: 30%;
    min-width: 340px;
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 0 10px 70px rgba(0, 0, 0, 0.05);

    h3 {
      background: $pale-grey-two;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 16px;
      color: $bluey-grey;
      text-align: center;
      line-height: 40px;
    }

    .box {
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      .stage {
        text-align: center;

        .item {
          margin-bottom: 20px;
        }

        a {
          color: $bluey-grey;
          font-size: 14px;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.buttonSchemeD {
  box-shadow: 0 10px 18px -5px rgba(1, 7, 255, 0.23);
}

.buttonSchemeE {
  border-color: $silver-two;

  &.v-btn {
    &:hover {
      color: #fff !important;
      background: $secondary-01 !important;
      border-color: $secondary-01;
    }
  }
}

.buttonSchemeF {
  color: $bluey-grey !important;
}
</style>
